function rgba2rgb(rgbBackground, rgbaColor) {
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

export function determineColor(rgbaColor) {
  return lumaBg(rgbaColor) > 0.5
}
