import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Styles/DishList.css';
import CategoryItems from './CategoryList';  
import {  useNavigate } from 'react-router-dom';

function MenuItems() {
  const [items, setItems] = useState([]);
//const Navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  useEffect(() => {
    axios.get("https://localhost:7205/api/Dishes")
      .then(response => {
        setItems(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  function handleEdit(item) {
    console.log(`Editing item ${item.menuId}`);
    // Implement edit logic here
  }
  function handleDelete(item) {
    const confirmDelete = window.confirm(`Are you sure you want to delete ${item.menuName}?`);
  if (confirmDelete) {
    axios.delete("https://localhost:7205/api/Dishes${item.catId}")
      .then(() => {
        console.log(`Deleted item ${item.catId}`);
        setItems(prevItems => prevItems.filter(prevItem => prevItem.catId !== item.catId));
      })
      .catch(error => {
        console.error(`Error deleting item ${item.dishId}:`, error);

      });

  }
    console.log(`Deleting item ${item.id}`);
    // Implement delete logic here
  }
  function handleClick(item) {
    setSelectedItem(item.menuId);
// Navigate(`/categories/${item.menuId}`, { menuId: item.menuId });
    console.log(`Clicked item ${item.dishId}`);
    // Implement click logic here

  }
  return (
<div className='MenuList'>
{selectedItem ? (
        <CategoryItems catId ={selectedItem} />
      ) : (
   <center> <table>
    <thead>
      <tr>
       <th>Dish ID</th>
        <th>Menu Name</th>
        <th>Description</th>
        <th>Image</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.dishId} onClick={() => handleClick(item)}>
          <td>{item.dishId}</td>
          <td><a href='Homepage' className = "DishListAnchor" onClick={e => { e.preventDefault(); handleClick(item); }}>{item.dishName}</a></td>
          <td><a href="#" className = "MenuListAnchor" onClick={e => { e.preventDefault(); handleClick(item); }}>{item.dishDescription}</a></td>
          <td><img src = {item.menuImage} alt = {item.menuName} /></td>
          <td><button onClick={() => handleEdit(item)}>Edit</button></td>
          <td><button onClick={() => handleDelete(item)}>Delete</button></td>
        </tr>
      ))}
    </tbody>
  </table>
  </center>
      )}
  </div>
);
}
export default MenuItems;