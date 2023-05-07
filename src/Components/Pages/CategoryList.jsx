import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../Styles/CategoryList.css';
import DishItems from './DishList';
import { useLocation } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

//import MenuItems from './MenuList';

function CategoryItems() {

    const location = useLocation();
    const navigate = useNavigate();
    const menuId = location;
    const [items, setItems] = useState([]);
    const [deletedItemId, setDeletedItemId] = useState(null);
    //const [selectedItem, setSelectedItem] = useState(null);
    const [editedItem, setEditedItem] = useState(null);


    useEffect(() => {
        axios.get(`https://localhost:7205/api/Categories?menuId=${menuId.state.menuId}`)
            .then(response => {
                setItems(response.data);
                console.log(response.data);
                
            })
            .catch(error => {
                console.log(error);
            });
    },[deletedItemId]);


    function handleEdit(event,item )  {
        console.log(`Editing item ${item.catId}`);
        navigate('/AddCategories', {state: {catId: item.catId, menuId: menuId.state.menuId}});
        
    };

    function handleDelete(item) {

        const confirmDelete = window.confirm(`Are you sure you want to delete ${item.catName}?`);

        if (confirmDelete) {

            axios.delete(`https://localhost:7205/api/Categories/${item.catId}`)

                .then(() => {

                    console.log(`Deleted item ${item.catId}`);

                    setDeletedItemId(item.catId);

                    //setItems(prevItems => prevItems.filter(prevItem => prevItem.categoryId !== item.categoryId));

                })

                .catch(error => {

                    console.error(`Error deleting item ${item.categoryId}:`, error);

                });
        }
    }
        //   function handleClick(item) {
        //     navigate(`/DishList`, {state: {categoryId: item.categoryId}});

        //     // setSelectedItem(true);
        //      console.log(`Clicked item ${item.catid}`);
        //      // Implement click logic here
        //    }

        // const handleSubmit = (e) => {
        //     e.preventDefault();

        //     // Send a POST request to the backend API using Axios
        //     axios
        //         .post('https://localhost:7205/api/Categories/update', editedItem)
        //         .then((response) => {
        //             // Handle the response, e.g., show a success message or update the menu item list
        //             console.log('Item updated successfully');
        //         })
        //         .catch((error) => {
        //             // Handle the error, e.g., show an error message
        //             console.error('Error updating item:', error);
        //         });

        //     // Clear the editedItem state
        //     setEditedItem(null);
        // }



        function handleClick(item) {
            //     setSelectedItem(item.menuId);
            navigate(`/DishList`, { state: { catId: item.catId } });
            console.log(`Clicked item ${item.catId}`);
         
        }
        function handleAdd(){

                navigate(`/AddCategories`, {state:{menuid: menuId.state.menuId}});
            
                console.log("Adding Category");
            
              }


    
    return (
        <div className="CategoryList">

            <div className="row">
                {items.map(item => (
                    <div key={item.catd} className="col-md-4 mb-4">
                        <Card>
                            <Card.Img
                                variant="top"
                                src={item.catImage}
                                alt={item.catName}
                                onClick={() => handleClick(item)}
                                style={{ cursor: 'pointer' }}
                            />
                            <Card.Body>
                                <Card.Title>{item.catName}</Card.Title>
                                {/* <Card.Text>{item.menuDescription}</Card.Text> */}
                                <Button variant="primary" style={{ margin: "10px" }} onClick={(event) => handleEdit(event, item)}>Edit</Button>
                                <Button variant="danger" style={{ margin: "10px" }} onClick={e => { e.preventDefault(); handleDelete(item); }}>Delete</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}

<div className='col-md-4 mb-4'>
        <Card>
        <Card.Img variant="top" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkeQ8Te5K2tD29NIgMhTb9FOz4eMHfkdAr0A&usqp=CAU"} alt={"Add Menu"} />
        <Card.Body>
        <Card.Title className='title' onClick={e => {e.preventDefault(); handleAdd();}} >Add Category</Card.Title>
        <Card.Text>{"Add a new category item"}</Card.Text>
        <Button style={{margin: "10px"}} variant="primary" onClick={e => {e.preventDefault(); handleDelete();}}>Add Category</Button>
        </Card.Body>
        </Card>
        </div>
            </div>
        </div>

    );
}
export default CategoryItems;