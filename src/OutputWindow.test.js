import React from 'react';
import ReactDOM from 'react-dom';
import InputWindow from './InputWindow';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InputWindow inputString="" />, div);
    ReactDOM.unmountComponentAtNode(div);
});
