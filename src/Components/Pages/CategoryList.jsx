import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Styles/CategoryList.css';
import DishItems from './DishList';
//import { useLocation } from 'react-router-dom';
//import MenuItems from './MenuList';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button'
// import CardActions from '@mui/material/CardActions';
function CategoryItems({menuId}) {

//const location = useLocation();
  //const menuId = location.state?.menuId;
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
const [editedItem, setEditedItem] = useState(null);


  useEffect(() => {
    axios.get("https://localhost:7205/api/Categories?menuId=${menuId}")
      .then(response => {
        setItems(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
 []);


const handleEdit = (item) => {
    setEditedItem(item);
  };

  function handleDelete(item) {
    console.log(`Deleting item ${item.id}`);
    // Implement delete logic here
  }
  function handleClick(item) {
    setSelectedItem(true);
    console.log(`Clicked item ${item.id}`);
    // Implement click logic here
  }
const handleSubmit = (e) => {
    e.preventDefault();

    // Send a POST request to the backend API using Axios
    axios
      .post('https://localhost:7205/api/Categories/update', editedItem)
      .then((response) => {
        // Handle the response, e.g., show a success message or update the menu item list
        console.log('Item updated successfully');
      })
      .catch((error) => {
        // Handle the error, e.g., show an error message
        console.error('Error updating item:', error);
      });

    // Clear the editedItem state
    setEditedItem(null);
  };

 return (
<div className='CategoryList'>
{selectedItem ? (
        <DishItems item={selectedItem} />
      ) : (
   <center> <table>
    <thead>
      <tr>
        <th>Category ID</th>
        <th>Category Name</th>
        <th>Description</th>
        <th>Image</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {items.map(item => (
        <tr key={item.catId} >
          <td>{item.catId}</td>
          <td><a href="#" className = "CategoryListAnchor" onClick={e => { e.preventDefault(); handleClick(item); }}>{item.catName}</a></td>
{/*           <td><a href="#" className = "CategoryListAnchor" onClick={e => { e.preventDefault(); handleClick(item); }}>{item.categoryDescription}</a></td> */}
          <td><img src = {item.catImage} alt = {item.catName} /></td>
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
export default CategoryItems;