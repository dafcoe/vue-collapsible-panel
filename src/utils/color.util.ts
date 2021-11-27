const normalizedPartialColor = (partial: number): number => {
  if (partial > 255) return 255
  if (partial < 0) return 0
  return partial
}

export const lightenDarkenColor = (paramHexColor: string, hexColor: string, amount: number) => {
  if (paramHexColor) return paramHexColor

  const color = hexColor.replace('#', '')
  const colorNumber = parseInt(color, 16)

  const red = normalizedPartialColor((colorNumber >> 16) + amount)
  const blue = normalizedPartialColor(((colorNumber >> 8) & 0x00FF) + amount)
  const green = normalizedPartialColor((colorNumber & 0x0000FF) + amount)

  return `#${(green | (blue << 8) | (red << 16)).toString(16)}`
}
