import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import StripeCheckout from 'react-stripe-checkout';

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
            <div className="row">
                <div className="col-sm">
                    <li className="footer-list">
                        <ul className="footer-head">Explore</ul>
                        <ul className="footer-item">Horror</ul>
                        <ul className="footer-item">Aliens</ul>
                        <ul className="footer-item">Space</ul>
                    </li>
                </div>
                <div className="col-sm">
                <li className="footer-list">
                        <ul className="footer-head">Contact</ul>
                        <ul className="footer-item">+91 8240625004</ul>
                        <ul className="footer-item">@gamestory</ul>
                        <ul className="footer-item">info@gamestory.com</ul>
                    </li>
                </div>
                 <div className="col-sm">
                 <li className="footer-list">
                        <ul className="footer-head">Donate</ul>
                        <ul className="footer-item">UPI</ul>
                        <ul className="footer-item">PayPal</ul>
                        <ul className="footer-item"><StripeCheckout 
                            stripeKey=""
                            token=""
                            name="Donate $10"
                        >Credit Card</StripeCheckout></ul>
                    </li>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Footer;