// Importing Dependencies
import React, { Component } from 'react';

// Importing Components
// import Header from '../components/Header';
// import Phone from '../components/Phone';
// import Footer from '../components/Footer';

// Importing Styling
import './Testing.css';

class Testing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
        };
    }

    updateMessage(e) {
        this.setState({
            message: e.target.value,
        });
    }

    render() {
        return (
            <input
                type="text"
                onChange={this.updateMessage.bind(this)}
                value={(this.state && this.state.message) || ''}
            />
        );
    }
}

export default Testing;
