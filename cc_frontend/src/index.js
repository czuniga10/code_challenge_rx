import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
// import ScrollToTop from './ScrollToTop';

ReactDOM.render(
    <Provider store={store}>
        {/* <ScrollToTop> */}
            <App />
        {/* </ScrollToTop> */}
    </Provider>
    ,
document.getElementById('root'));

