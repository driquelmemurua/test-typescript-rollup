export const colors = {
  black: '#000',
  white: '#FFF',
  'blue-1': '#081A51',
  'blue-2': '#0E3681',
  'blue-3': '#1869D6',
  'blue-4': '#017EFA',
  cyan: '#E1E6F7',
  lightblue: '#F3F7FF',
  'gray-10': '#F1F1F1',
  'gray-30': '#AEAEAE',
  'gray-50': '#737373',
  'gray-60': '#444444',
  'gray-70': '#1C1C1C',
  success: '#0CBC8B',
  error: '#FC0C0C',
  alert: '#FFD80B',
  notification: '#51CBFF',
};

const colorNames = Object.keys(colors) as Array<keyof typeof colors>;
export type ColorType = typeof colorNames[number];