
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import {disableReactDevTools} from '@fvilers/disable-react-devtools'

if(process.env.NODE_ENV === 'production') disableReactDevTools()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
       <Provider  store={store}>
         <App />
       </Provider>
    </React.StrictMode>
);
