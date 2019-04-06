import React, { Component } from 'react';
import './InputWindow.css';

class OutputWindow extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.props.onInputStringChange(evt.target.value)
    }
    render() {
        const outputString = this.props.outputString
        return (
            <div className="InputWindow">
                <span>{outputString}</span>
            </div>
        );
    }
}

export default OutputWindow;
