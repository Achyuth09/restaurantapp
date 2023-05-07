import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Styles/DishList.css';
import { Card, Button } from 'react-bootstrap';
import CategoryItems from './CategoryList';  
import {  useNavigate } from 'react-router-dom';

function DishItems() {
  const [items, setItems] = useState([]);
   const Navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
 const [deletedItemId, setDeletedItemId] = useState(null);

  useEffect(() => {
    axios.get("https://localhost:7205/api/Dishes")
      .then(response => {
        setItems(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [deletedItemId]);



  function handleEdit(item) {
    console.log(`Editing item ${item.dishId}`);
    // Implement edit logic here
  }


  function handleDelete(item) {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${item.menuName}?`);
  if (confirmDelete) {
    axios.delete(`https://localhost:7205/api/Dishes${item.catId}`)
      .then(() => {
        console.log(`Deleted item ${item.dishId}`);
        setDeletedItemId(item.dishId);

//         setItems(prevItems => prevItems.filter(prevItem => prevItem.catId !== item.catId));
      })
      .catch(error => {
        console.error(`Error deleting item ${item.dishId}:`, error);

      });

  }
    console.log(`Deleting item ${item.id}`);
    // Implement delete logic here
  }
  function handleClick(item) {
    //setSelectedItem(item.menuId);
// Navigate(`/categories/${item.menuId}`, { menuId: item.menuId });
    console.log(`Clicked item ${item.dishId}`);
    // Implement click logic here

  }
  return (
<div className='MenuList'> 
      <div className="row">
        {items.map(item => (
          <div key={item.dishId} className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src={item.dishImage} alt={item.dishName} />
              <Card.Body>
                <Card.Title className='title'  onClick={() => handleClick(item)}>{item.dishName}</Card.Title>
                <Card.Text>{item.dishDescription}</Card.Text>
                <Button style={{margin: "10px"}} variant="primary" onClick={(event) => handleEdit(event, item)}>Edit</Button>
                <Button style={{margin: "10px"}} variant="danger" onClick={e => {e.preventDefault(); handleDelete(item);}}>Delete</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      </div>
);
}
export default DishItems;