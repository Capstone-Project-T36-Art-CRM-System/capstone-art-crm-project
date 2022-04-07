import React from 'react';

// React Routing
import Router from './routes';

// Theme Imports
import ScrollToTop from './components/ScrollToTop';
import ThemeProvider from './theme'
import ThemeConfig from './theme';
import { AuthProvider } from './contexts/AuthContext';

const App = () => {
    return (
        <AuthProvider>
            <ThemeProvider>
                <ThemeConfig>
                    <ScrollToTop />
                    <Router />
                </ThemeConfig>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;