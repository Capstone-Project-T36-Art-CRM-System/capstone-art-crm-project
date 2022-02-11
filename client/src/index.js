import ReactDOM from 'react-dom';

// React Helmet
import { HelmetProvider } from 'react-helmet-async';

// React Routing
import { BrowserRouter } from 'react-router-dom';

// Project Imports
import App from './App';

ReactDOM.render(
    <HelmetProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </HelmetProvider>,
    
    document.getElementById('root')
);