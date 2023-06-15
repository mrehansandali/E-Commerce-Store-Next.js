import React from 'react'
import Footercss from "../../styles/Footer.module.css"
import { BsFacebook } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';

const Footer = () => {
    return (
        <>

            <footer className={Footercss.footer}>
                <div className={Footercss.container}>
                    <div className="row">
                        <div className="col-md-3">
                            <h3>About</h3>
                            <ul>
                                <li><a href="#">Company</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3>Products</h3>
                            <ul>
                                <li><a href="#">Netlify Build</a></li>
                                <li><a href="#">Netlify Edge</a></li>
                                <li><a href="#">Netlify Analytics</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3>Resources</h3>
                            <ul>
                                <li><a href="#">Docs</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Events</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h3>Legal</h3>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms of Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; 2023 Your Company Name. All rights reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <ul className={Footercss.social_icons}>
                                <li><a href="#"><BsFacebook /></a></li>
                                <li><a href="#"><BsTwitter /></a></li>
                                <li><a href="#"><BsInstagram /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}

export default Footer