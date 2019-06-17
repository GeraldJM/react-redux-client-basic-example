import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './redux/stores';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('App')
);