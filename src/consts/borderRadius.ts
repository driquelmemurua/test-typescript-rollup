export const borderRadius = {
    md: '0.375rem',
    full: '9999px',
};

const borderRadiusNames = Object.keys(borderRadius) as Array<keyof typeof borderRadius>;
export type BorderRadiusType = typeof borderRadiusNames[number];