export function hexa2rgba(hexaColor) {
  const r = parseInt(hexaColor.slice(1, 3), 16)
  const g = parseInt(hexaColor.slice(3, 5), 16)
  const b = parseInt(hexaColor.slice(5, 7), 16)
  const a = parseInt(hexaColor.slice(7, 9), 16) / 255

  return { r, g, b, a }
}

export function rgba2rgb(rgbBackground, rgbaColor) {
  const alpha = rgbaColor.a

  return {
    r: (1 - alpha) * rgbBackground.r + alpha * rgbaColor.r,
    g: (1 - alpha) * rgbBackground.g + alpha * rgbaColor.g,
    b: (1 - alpha) * rgbBackground.b + alpha * rgbaColor.b,
  }
}

export function lumaBg(rgbaColor) {
  const blendedColor = rgba2rgb({ r: 255, g: 255, b: 255 }, rgbaColor)
  return (
    (0.299 * blendedColor.r + 0.587 * blendedColor.g + 0.114 * blendedColor.b) /
    255
  )
}

/** Return true if this is a bright color (luma > 0.5) */
export function determineColor(rgbaColor) {
  return lumaBg(rgbaColor) > 0.5
}
