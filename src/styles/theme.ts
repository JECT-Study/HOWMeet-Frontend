const theme = {
  color: {
    primary: {
      black: '#081837',
      white: '#fff',
    },
    secondary: {
      solid: {
        bk: {
          900: '#222325',
          800: '#3A3C40',
          700: '#53555B',
          600: '#84888F',
          500: '#9FA2A7',
          400: '#BABCC0',
          300: '#CFD0D3',
          200: '#DFE0E2',
          100: '#EAEAEC',
          50: '#F4F5F5',
        },
      },
      transparent: {
        bk: {
          op80: 'rgba(8, 24, 55, 0.8)',
          op64: 'rgba(8, 24, 55, 0.64)',
          op48: 'rgba(8, 24, 55, 0.48)',
          op40: 'rgba(8, 24, 55, 0.40)',
          op20: 'rgba(8, 24, 55, 0.20)',
          op16: 'rgba(8, 24, 55, 0.16)',
          op12: 'rgba(8, 24, 55, 0.12)',
          op8: 'rgba(8, 24, 55, 0.08)',
          op4: 'rgba(8, 24, 55, 0.04)',
          op2: 'rgba(8, 24, 55, 0.02)',
        },
      },
    },
  },
  fontSize: {
    base: '14px',
  },
} as const;

export default theme;
