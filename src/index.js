import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.js'

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)