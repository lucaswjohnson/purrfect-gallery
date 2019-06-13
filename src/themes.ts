interface ITheme {
  primary: string,
  secondary: string,
  accent: string
}

interface IThemes {
  blue: ITheme,
  green: ITheme,
  purple: ITheme,
  orange: ITheme
}

export const themes: IThemes = {
  blue: {
    primary: '#fff',
    secondary: '#4688B2',
    accent: '#cca97f'
  },
  green: {
    primary: '#fff',
    secondary: '#7CC1AC',
    accent: '#E27D5F'
  },
  purple: {
    primary: '#fff',
    secondary: '#B29BC7',
    accent: '#F172A1'
  },
  orange: {
    primary: '#fff',
    secondary: '#90c9d1',
    accent: '#F4976C'
  }
}
