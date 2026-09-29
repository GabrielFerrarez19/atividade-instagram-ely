import { MD3LightTheme } from 'react-native-paper';

// Tema Material Design 3 com as cores do Instagram
export const tema = {
  ...MD3LightTheme,
  roundness: 2,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#0095f6',
    onPrimary: '#ffffff',
    secondary: '#d62976',
    error: '#ed4956',
    background: '#ffffff',
    surface: '#ffffff',
    onSurface: '#262626',
    onSurfaceVariant: '#8e8e8e',
    outline: '#dbdbdb',
    outlineVariant: '#dbdbdb',
    elevation: {
      ...MD3LightTheme.colors.elevation,
      level2: '#ffffff',
    },
  },
};
