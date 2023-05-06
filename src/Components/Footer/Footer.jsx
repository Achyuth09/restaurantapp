import React from 'react';
import '../../Styles/header.css'

// import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon,CDBBox, CDBContainer } from 'cdbreact';

export const Footer = () => {
  return (
    <footer>
        <div className="row justify-content-around mb-0 pt-5 pb-0 ">
            <div className=" col-11">
                <div className="row justify-content-center">
                    <div className="col-md-3 col-12 font-italic align-items-center mt-md-3 mt-4">
                        <h5><span> <img src="https://extendthemes.com/wp-content/uploads/2018/06/xbox-green-min.png" className="img-fluid mb-1 " /></span><b className="text-dark"> Key<span className="text-muted"> Pass</span></b></h5>
                        <p className="social mt-md-3 mt-2"> <span><i className="fa fa-facebook " aria-hidden="true"></i></span> <span><i className="fa fa-linkedin" aria-hidden="true"></i></span> <span><i className="fa fa-twitter" aria-hidden="true"></i></span> </p> <small className="copy-rights cursor-pointer">&#9400; 2019 EasyGo Digital Technologies</small><br /> <small>Copyright.All Rights Resered. </small>
                    </div>
                    <div className="col-md-3 col-12 my-sm-0 mt-5">
                        <ul className="list-unstyled">
                            <li className="mt-md-3 mt-4">Our Solution</li>
                            <li>Intergrated Security Platform</li>
                            <li>Core Features</li>
                            <li>Product Features</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div className="col-md-3 col-12 my-sm-0 mt-5">
                        <ul className="list-unstyled">
                            <li className="mt-md-3 mt-4">Your needs</li>
                            <li>Intergrated Security Platform</li>
                            <li>Core Features</li>
                            <li>Product Features</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                    <div className="col-xl-auto col-md-3 col-12 my-sm-0 mt-5">
                        <ul className="list-unstyled">
                            <li className="mt-md-3 mt-4">Offer</li>
                            <li>Intergrated Security Platform</li>
                            <li>Core Features</li>
                            <li>Product Features</li>
                            <li>Pricing</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  );
};