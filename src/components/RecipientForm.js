import React, { Component } from 'react';
import { changeMessage, changeRecipient } from '../redux/actions';
import { connect } from 'react-redux';

class RecipientForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        message: '',
        recipient: '',
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        let { message, recipient } = this.state;

        message != '' ? this.props.changeMessage(message) : false;
        recipient != '' ? this.props.changeRecipient(recipient) : false;

        this.setState({
            message: '',
            recipient: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Message
                    <input name="message" onChange={this.handleChange} value={this.state.message}></input>
                </label>
                <label>Recipient
                    <input name="recipient" onChange={this.handleChange} value={this.state.recipient}></input>
                </label>
                <input type="submit" value="Update"></input>
            </form>
        )
    }
}

export default connect(null, { changeRecipient, changeMessage })(RecipientForm);