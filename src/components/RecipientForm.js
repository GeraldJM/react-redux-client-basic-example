import React, { Component } from 'react';
import { changeRecipient } from '../redux/actions';
import { connect } from 'react-redux';

class RecipientForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        input: ''
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.changeRecipient(this.state.input);
        this.setState({
            input: ''
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="input" onChange={this.handleChange} value={this.state.input}></input>
                <input type="submit" value="Change Recipient"></input>
            </form>
        )
    }
}

export default connect(null, { changeRecipient })(RecipientForm);