import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/footer.css';


const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Company Name</h5>
            <p>123 Street, City, Country</p>
          </div>
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;