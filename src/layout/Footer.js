import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import StripeCheckout from 'react-stripe-checkout';
import { Link } from 'react-router-dom';

const Footer = () => {

    

    return(
        <div className="footer">
            <div className="container">
            <div className="list-container">
                <div className="list">
                    <ul className="footer-list">
                        <li className="footer-head">Explore</li>
                        <li className="footer-item">Horror</li>
                        <li className="footer-item">Aliens</li>
                        <li className="footer-item">Space</li>
                    </ul>
                </div>
                <div className="list">
                <ul className="footer-list">
                        <li className="footer-head">Connect</li>
                        <li className="footer-item">Mail</li>
                        <li className="footer-item">Twitter</li>
                        <li className="footer-item">Instagram</li>
                    </ul>
                </div>
                 <div className="list">
                 <ul className="footer-list">
                        <li className="footer-head">Donate</li>
                        <li className="footer-item">UPI</li>
                        <li className="footer-item">PayPal</li>
                        <li className="footer-item"><StripeCheckout 
                            stripeKey=""
                            token=""s
                            name="Donate $10"
                        >Credit Card</StripeCheckout></li>
                    </ul>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Footer;