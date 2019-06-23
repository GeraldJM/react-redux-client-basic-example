import React from 'react';
import { connect } from 'react-redux';
import RecipientForm from './RecipientForm';

const App = (props) => {
    return (
        <div>
            <h1>{props.message}, {props.recipient}</h1>
            <RecipientForm />
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        message: state.message,
        recipient: state.recipient
    }
}

export default connect(mapStateToProps)(App);