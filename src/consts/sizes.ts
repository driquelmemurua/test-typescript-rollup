export const fontSizes = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
}

export const fontLineHeight = {
  xs: '1rem',
  sm: '1.25rem',
  base: '1.5rem',
  lg: '1.75rem',
  xl: '1.75rem',
  '2xl': '2rem',
}

export const iconSizes = {
  xs: 'scale(0.75)',
  sm: 'scale(0.875)',
  base: 'scale(1)',
  lg: 'scale(1.125)',
  xl: 'scale(1.25)',
  '2xl': 'scale(1.5)',
}


export const buttonSizes = {
  xs: '0.25em 0.5em',
  sm: '0.25em 0.5em',
  base: '0.375em 0.75em',
  lg: '0.5em 1em',
  xl: '0.5em 1em',
  '2xl': '0.5em 1em',
}

export const buttonGap = {
  xs: '0.25em',
  sm: '0.25em',
  base: '0.375em',
  lg: '0.5em',
  xl: '0.5em',
  '2xl': '0.5em',
}

export const loadingSpinnerSizes = {
  xs: '1.5em',
  sm: '1.5em',
  base: '2em',
  lg: '2em',
  xl: '2em',
  '2xl': '2em',
}

const sizeNames = Object.keys(fontSizes) as Array<keyof typeof fontSizes>;
export type SizeType = typeof sizeNames[number];