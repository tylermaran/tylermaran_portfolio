// Importing Dependencies
import React from 'react';

// Importing Components
import Header from '../components/Header';
import Phone from '../components/Phone';
import Footer from '../components/Footer';

// Importing Styling
import './Testing.css';

const Testing = () => {
    return (
        <div className="Testing">
            <Header />
            <div className="content">
                <div className="container">
                    <Phone />
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Testing;
