import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    const backgroundStyle = {
        backgroundImage: `url(https://img.freepik.com/premium-photo/restaurant_23-2148014999.jpg?size=626&ext=jpg&ga=GA1.1.2087195351.1683348613&semt=ais)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      };
    
      const contentStyle = {
        textAlign: 'center',
        color: "grey",
      };
    
      const restaurantStyle = {
        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKGdGUKsZ498X1E6wG7zsvMyAvgS7YI8Z-JtBoFUvgn8qtxlKDvNa&usqp=CAE&s)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
      };
    
      const handleRestaurantClick = () => {
        // Add your logic here for handling the restaurant image click
        console.log('Restaurant image clicked!');
      }

         function handleclick(event){
          navigate("/MenuList");
      };
    
      return (
        <div style={backgroundStyle}>
          <Container>
            <Row>
              <Col md={6} className="d-flex align-items-center justify-content-center">
                <div style={contentStyle}>
                  <h1>Welcome to Langaa's Restaurant</h1>
                  <p>The ultimate dining experience at your fingertips!</p>
                  <Button onClick={(event) => handleclick(event)} variant="primary">Show Menu</Button>
                </div>
              </Col>
              <Col md={6} className="d-flex align-items-center">
                <div
                  style={restaurantStyle}
                  onClick={handleRestaurantClick}
                  role="button"
                  tabIndex="0"
                  onKeyDown={handleRestaurantClick}
                ></div>
              </Col>
            </Row>
          </Container>
        </div>
      );
};

export default HomePage;