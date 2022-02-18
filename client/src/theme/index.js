import { useMemo } from 'react';
import PropTypes from 'prop-types';

// Material UI
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';

// Custom Theme Options Import
import palette from './palette';
import typography from './typography';
import shape from './shape';
import shadows, { customShadows } from './shadows';

// Custom Theme Components Import
import Lists from './overrides/Lists';
import Button from './overrides/Button';
import Card from './overrides/Card';

// Prop Types
ThemeConfig.propTypes = {
  children: PropTypes.node
};

export default function ThemeConfig({ children }) {
  const themeOptions = useMemo(
    () => ({
      palette,
      typography,
      shadows,
      shape,
      customShadows
    }),
    []
  );

  const theme = createTheme(themeOptions);
  theme.components = Lists(theme);
  theme.components = Button(theme);
  theme.components = Card(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}