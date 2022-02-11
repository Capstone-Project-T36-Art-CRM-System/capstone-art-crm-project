import ReactDOM from 'react-dom';

// third party
import { BrowserRouter } from 'react-router-dom';

// project imports
import App from './App';

// style + assets
// import './assets/scss/style.scss';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);