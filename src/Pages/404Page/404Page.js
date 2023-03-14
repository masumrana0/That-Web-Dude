import React from 'react';
import { Link } from 'react-router-dom';
import './Emtypage.css'

const EmtyPage = () => {
    return (
        <div className='container-emty'>
            <div className='emty-route-container'>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <Link to='/'><button>Go back Home</button></Link>
            </div>
        </div>
    );
};

export default EmtyPage;