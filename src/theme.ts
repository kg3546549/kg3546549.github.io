import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      50: '#e1f0ff',
      100: '#b2d6ff',
      200: '#82bcff',
      300: '#52a2ff',
      400: '#2388ff',
      500: '#006EC8', // Primary Blue
      600: '#00569d',
      700: '#003e72',
      800: '#002648',
      900: '#000e1f',
    },
    accent: {
      500: '#F8302A', // Point Red
    },
    text: {
      primary: '#013B90', // Deep Blue Text
      secondary: '#4A5568',
    },
    navy: {
      50: '#f4f7fa',
      100: '#e9eff5',
      500: '#FFFFFF', // Replaced Navy with White
      600: '#F7FAFC', // Light Gray for cards
      700: '#E2E8F0', // Border color
    },
  },
  fonts: {
    heading: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
    body: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
    mono: `"Fira Code", "Roboto Mono", monospace`,
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'text.secondary',
        lineHeight: 'tall',
      },
      h1: { color: 'text.primary' },
      h2: { color: 'text.primary' },
      h3: { color: 'text.primary' },
    },
  },
  components: {
    Button: {
      variants: {
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
          },
        },
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
      },
    },
  },
});

export default theme;