import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Styles/MenuList.css';
import CategoryItems from './CategoryList';
import { Card, Button } from 'react-bootstrap';
//import CategoryItems from './CategoryList';  
//import {  useNavigate } from 'react-router-dom';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button'
// import CardActions from '@mui/material/CardActions';



function MenuItems() {
  const [items, setItems] = useState([]);
//const Navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);
  const [editedItem, setEditedItem] = useState({});
  


  useEffect(() => {
    axios.get("https://localhost:7205/api/Menus")
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
    axios.delete("https://localhost:7205/api/Menus/${item.menuId}")
      .then(() => {
        console.log(`Deleted item ${item.menuId}`);
        setItems(prevItems => prevItems.filter(prevItem => prevItem.menuId !== item.menuId));
      })
      .catch(error => {
        console.error(`Error deleting item ${item.menuId}:`, error);

      });

  }
    console.log(`Deleting item ${item.id}`);
    // Implement delete logic here
  }
  function handleClick(item) {
    setSelectedItem(item.menuId);
// Navigate(`/categories/${item.menuId}`, { menuId: item.menuId });
    console.log(`Clicked item ${item.menuId}`);
    // Implement click logic here

  }
  return (
    <div className="MenuList">
    {selectedItem ? (
      <CategoryItems item={selectedItem} />
    ) : (
      <div className="row">
        {items.map(item => (
          <div key={item.menuId} className="col-md-4 mb-4">
            <Card>
              <Card.Img variant="top" src={item.menuImage} alt={item.menuName} />
              <Card.Body>
                <Card.Title>{item.menuName}</Card.Title>
                {/* <Card.Text>{item.menuDescription}</Card.Text> */}
                <Button variant="primary" onClick={() => handleEdit(item)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(item)}>Delete</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    )}
  </div>


// <div className='MenuList'>
// {selectedItem ? (
//         <CategoryItems item={selectedItem} />
//       ) : (
//    <center> <table>
//     <thead>
//       <tr>
//         <th>Menu ID</th>
//         <th>Menu Name</th>
// {/*         <th>Description</th> */}
//         <th>Image</th>
//        <th>Edit</th>
//         <th>Delete</th>
//       </tr>
//     </thead>
//     <tbody>
//       {items.map(item => (
//         <tr key={item.menuId}>
//           <td>{item.menuId}</td>
//           <td><a href="#" className = "MenuListAnchor" onClick={e => { e.preventDefault(); handleClick(item); }}>{item.menuName}</a></td>
// {/*           <td><a href="#" className = "MenuListAnchor" onClick={e => { e.preventDefault(); handleClick(item); }}>{item.menuDescription}</a></td> */}
//           <td><img src = {item.menuImage} alt = {item.menuName} /></td>
//           <td><button onClick={() => handleEdit(item)}>Edit</button></td>
//           <td><button onClick={() => handleDelete(item)}>Delete</button></td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
//   </center>
//       )}
//   </div>
);
}
export default MenuItems;