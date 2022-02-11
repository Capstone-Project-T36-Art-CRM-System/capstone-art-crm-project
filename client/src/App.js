import React from 'react';


// React Routing
import DashboardLayout from './layouts/Dashboard';

import ScrollToTop from './components/ScrollToTop';
import GlobalStyles from './theme/globalStyles'
import ThemeConfig from './theme';

const App = () => {
    return (
        <ThemeConfig>
            <ScrollToTop />
            <GlobalStyles />

            <DashboardLayout />
        </ThemeConfig>
    );
}

export default App;