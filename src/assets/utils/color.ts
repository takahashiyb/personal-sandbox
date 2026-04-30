type ContrastResult = {
  ratio: number
  passesAA: boolean
  passesAAA: boolean
}

export function hexToHSL(hex: string) {
  // Remove leading #
  hex = hex.replace(/^#/, '')

  // Parse r, g, b values
  const r = parseInt(hex.substring(0, 2), 16) / 255
  const g = parseInt(hex.substring(2, 4), 16) / 255
  const b = parseInt(hex.substring(4, 6), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = (max + min) / 2
  let s = (max + min) / 2
  const l = (max + min) / 2

  if (max === min) {
    s = 0 // achromatic
  } else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return {
    h: Math.round(h * 360), // Hue in degrees
    s: Math.round(s * 100), // Saturation in %
    l: Math.round(l * 100), // Lightness in %
  }
}

export function luminanceFromHex(hex: string): number {
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255

  const linearize = (c: number): number =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)

  return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b)
}

function contrastRatio(hex1: string, hex2: string): number {
  const L1 = luminanceFromHex(hex1)
  const L2 = luminanceFromHex(hex2)
  const lighter = Math.max(L1, L2)
  const darker = Math.min(L1, L2)
  return (lighter + 0.05) / (darker + 0.05)
}

function pickContrastingColor(bg: string): string {
  const contrastWithWhite = contrastRatio(bg, '#FFFFFF')
  const contrastWithBlack = contrastRatio(bg, '#000000')
  return contrastWithWhite >= contrastWithBlack ? '#FFFFFF' : '#000000'
}

/**
 * Decide on a usable text color given primary, secondary, and text colors.
 * @param primary - hex code for primary color
 * @param secondary - hex code for secondary color
 * @param text - hex code for text color
 * @param prioritizePrimary - true if primary is the priority background, false if secondary
 * @returns hex code string for the chosen text color
 */

export function resolveTextColor(
  primary: string,
  secondary: string,
  text: string,
  prioritizePrimary: boolean,
): string {
  const bg = prioritizePrimary ? primary : secondary
  const other = prioritizePrimary ? secondary : primary

  // Step 1: Check bg vs white
  if (contrastRatio(bg, '#FFFFFF') >= 4.5) {
    return '#FFFFFF'
  }

  // Step 2: Check bg vs provided text color
  if (contrastRatio(bg, text) >= 4.5) {
    return text
  }

  // Step 3: Check bg vs non-priority color
  if (contrastRatio(bg, other) >= 4.5) {
    return other
  }

  // Step 4: Last resort — pick black or white automatically
  return pickContrastingColor(bg)
}
