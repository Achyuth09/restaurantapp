//import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



 function AddCategoryButton() {
    const location = useLocation();
    const menuiD = location.state.menuId;
const navigate = useNavigate();


    function handleClick(menuiD) {
        //     setSelectedItem(item.menuId);
        navigate('/AddCategories', { state: { menuId:menuiD} });

        
        console.log(`Clicked item ${menuiD}`);


    }

    function handleDelete(){
        <p>nothing brooo</p>
    }
   
        return (
            <div className='col-md-4 mb-4'>
        <Card>
        <Card.Img variant="top" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeQ8Te5K2tD29NIgMhTb9FOz4eMHfkdAr0A&usqp=CAU"} alt={"Add Menu"} />
        <Card.Body>
        <Card.Title className='title'  onClick={() => handleClick(menuiD)}>Add Menu"</Card.Title>
        <Card.Text>{"Add a new menu item"}</Card.Text>
        <Button style={{margin: "10px"}} variant="primary" onClick={e => {e.preventDefault(); handleDelete();}}>Add Menu</Button>
        </Card.Body>
        </Card>
        </div>
        );
    
}

export default AddCategoryButton;