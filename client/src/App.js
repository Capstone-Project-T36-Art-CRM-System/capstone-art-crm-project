import React from 'react';

// React Routing
import Router from './routes';

// Theme Imports
import ScrollToTop from './components/ScrollToTop';
import GlobalStyles from './theme/globalStyles'
import ThemeConfig from './theme';

const App = () => {
    return (
        <ThemeConfig>
            <ScrollToTop />
            <GlobalStyles />
            <Router />
        </ThemeConfig>
    );
}

export default App;