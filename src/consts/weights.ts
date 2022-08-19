export const weights = {
  normal: 'normal',
  medium: 500,
  semibold: 600,
  bold: 'bold',
  extrabold: 800,
}

export const weightNames = Object.keys(weights) as Array<keyof typeof weights>;
export type WeightType = typeof weightNames[number];