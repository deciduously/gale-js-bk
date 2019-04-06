import React, { Component } from 'react';
import './InputWindow.css';

class InputWindow extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.props.onInputStringChange(evt.target.value)
    }
    render() {
        const inputString = this.props.inputString
        return (
            <div className="InputWindow">
                <textarea value={inputString} onChange={this.handleChange} />
            </div>
        );
    }
}

export default InputWindow;
