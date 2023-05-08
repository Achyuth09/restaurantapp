import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Styles/MenuList.css';
//import CategoryItems from './CategoryList';
import { Card, Button } from 'react-bootstrap';
//import CategoryItems from './CategoryList';  
import { useNavigate } from 'react-router-dom';
//import Routers from '../../Routes/Routers';




function MenuItems() {
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    // const [selectedItem, setSelectedItem] = useState(null);
    // const [editedItem, setEditedItem] = useState({});
    const [deletedItemId, setDeletedItemId] = useState(null);



    useEffect(() => {
        axios.get("https://localhost:7205/api/Menus")
            .then(response => {
                setItems(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [deletedItemId]);


    function handleEdit(event, item) {
        console.log(`Editing item ${item.menuId}`);
        navigate('/editmenu', { state: { menuId: item.menuId } });
    }

    //Deleting a menu

     function handleDelete(item) {
        // event.preventDefault();
        const confirmDelete = window.confirm(`Are you sure you want to delete ${item.menuName}?`);
      if (confirmDelete) {
        axios.delete(`https://localhost:7205/api/Menus/${item.menuId}`)
          .then(() => {
            console.log(`Deleted item ${item.menuId}`);
            setDeletedItemId(item.menuId);
            // setItems(prevItems => prevItems.filter(prevItem => prevItem.menuId !== item.menuId));
          })
          .catch(error => {
            console.error(`Error deleting item ${item.menuId}:`, error);
          });
      }

        console.log(`Deleting item ${item.menuId}`);
        // Implement delete logic here
      }
    function handleClick(item) {
        //     setSelectedItem(item.menuId);
        navigate(`/CategoryList`, { state: { menuId: item.menuId } });


        
        console.log(`Clicked item ${item.menuId}`);
        //console.log(items.categories);

       
        // Implement click logic here

    }

    function handleAdd(){

            navigate("/AddMenu");
        
            console.log("Adding Menu");
        
          }
    return (
        <div className="MenuList">

            <div className="row">
               <center> <h1 > Welcome to Menu</h1></center>
                {items.map(item => (
                    <div key={item.menuId} className="col-md-4 mb-4">
                        <Card>
                            <Card.Img
                                variant="top"
                                src={item.menuImage}
                                alt={item.menuName}
                                onClick={() => handleClick(item)}
                                style={{ cursor: 'pointer' }}
                            />
                            <Card.Body>
                            {/* <Card.Title className='title'  onClick={() => handleClick(item)}>{item.menuName}</Card.Title> */}
                                <Card.Title>{item.menuName}</Card.Title>
                                <Card.Text>{item.menuDescription}</Card.Text>
                                <Button variant="primary" style={{ margin: "10px" }} onClick={(event) => handleEdit(event, item)}>Edit</Button>
                                <Button variant="danger" style={{ margin: "10px" }} onClick={e => { e.preventDefault(); handleDelete(item); }}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}

            {/* new adding card */}

                
        <div className='col-md-4 mb-4'>
        <Card>
        <Card.Img variant="top" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxSvzqqCxIRCkwENdT2nz3H4mpupNRDICerA&usqp=CAU"} alt={"Add Menu"} />
        <Card.Body>
        <Card.Title className='title' onClick={e => {e.preventDefault(); handleAdd();}} >Add Menu</Card.Title>
        <Card.Text>{"Add a new menu item"}</Card.Text>
        <Button style={{margin: "10px"}} variant="primary" onClick={e => {e.preventDefault(); handleDelete();}}>Add Menu</Button>
        </Card.Body>
        </Card>
        </div>
            </div>

        </div>


        
    );
}
export default MenuItems;