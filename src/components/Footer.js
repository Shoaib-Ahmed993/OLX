import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <React.Fragment>
            <div className="footer flex">
                <div className="block flex flex-col">
                    <h2 className="title s16 fontb color">POPULAR CATEGORIES</h2>
                    <Link to="/" className="noul noulh font s14 color">Cars</Link>
                    <Link to="/" className="noul noulh font s14 color">Flats for Rents</Link>
                    <Link to="/" className="noul noulh font s14 color">Jobs</Link>
                    <Link to="/" className="noul noulh font s14 color">Mobile Phones</Link>
                </div>
                <div className="block flex flex-col">
                    <h2 className="title s16 fontb color">TRENDING SEARCHES</h2>
                    <Link to="/" className="noul noulh font s14 color">Bikes</Link>
                    <Link to="/" className="noul noulh font s14 color">Watches</Link>
                    <Link to="/" className="noul noulh font s14 color">Books</Link>
                    <Link to="/" className="noul noulh font s14 color">Dogs</Link>
                </div>
                <div className="block flex flex-col">
                    <h2 className="title s16 fontb color">ABOUT US</h2>
                    <Link to="/" className="noul noulh font s14 color">About OLX Group</Link>
                    <Link to="/" className="noul noulh font s14 color">OLX Blog</Link>
                    <Link to="/" className="noul noulh font s14 color">Contact Us</Link>
                    <Link to="/" className="noul noulh font s14 color">OLX for Businesses</Link>
                </div>
                <div className="block flex flex-col">
                    <h2 className="title s16 fontb color">OLX</h2>
                    <Link to="/" className="noul noulh font s14 color">Help</Link>
                    <Link to="/" className="noul noulh font s14 color">Sitemap</Link>
                    <Link to="/" className="noul noulh font s14 color">Legal & Privacy Information</Link>
                </div>
                <div className="block">
                    <h2 className="title s16 fontb color">FOLLOW US</h2>
                    <div>
                        <a href="#" className="noul"><i className="fa fa-facebook "></i></a>
                        <a href="#" className="noul"><i className="fa fa-twitter"></i></a>
                        <a href="#" className="noul"><i className="fa fa-youtube"></i></a>
                        <a href="#" className="noul"><i className="fa fa-instagram"></i></a>
                    </div>
                    <br /> <br />
                    <div className="flex">
                        <a href="#" className="noul bl"><img className="store" src="//statics.olx.com.pk/external/base/img/appstore.png" width={100} alt="app store" /></a>
                        <a href="#" className="noul bl ml-2"><img className="store" src="//statics.olx.com.pk/external/base/img/playstore.webp" width={100} alt="play store" /></a>
                    </div>
                </div>
            </div>

            <div className="footerb flex">
                <h2 className="cfff font s14">Other Countries</h2>
                <h2 className="cfff font s14">India - South Africa - Indonesia</h2>
                <h2 className="r cfff font s14">Free Classifieds in Pakistan</h2>
                <h2 className=" cfff font s14">. © 2006-2020 OLX</h2>
            </div>
        </React.Fragment>
    )
}

export default Footer;