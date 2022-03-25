import React from 'react';

// React Routing
import Router from './routes';

// Theme Imports
import ScrollToTop from './components/ScrollToTop';
import ThemeProvider from './theme'
import ThemeConfig from './theme';

const App = () => {
    return (
        <ThemeProvider>
            <ThemeConfig>
                <ScrollToTop />
                <Router />
            </ThemeConfig>
        </ThemeProvider>
    );
}

export default App;