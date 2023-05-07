import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../Components/Pages/home';
import Login from '../Components/Pages/login';
import MenuItems from '../Components/Pages/MenuList';
import CategoryItems from '../Components/Pages/CategoryList';
import DishItems from '../Components/Pages/DishList';
import EditMenu from '../Forms/MenuEdit';
import AddCategoryButton from '../Components/Pages/AddCategoryButton';
import AddCategories from '../Forms/AddCategories';
import AddMenu from '../Forms/AddMenu';

const Routers = () => {
    return(
        <Routes>
            <Route path='/' element={<Navigate to="/home" />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element= {<Login />} />
            <Route path = '/MenuList' element = {<MenuItems />} />
            <Route path ='/CategoryList' element  = {< CategoryItems />} />
            <Route path ='/DishList' element  = {< DishItems />} />
            <Route path= '/editmenu' element = {<EditMenu />} />
            <Route path= '/AddCategoryButton' element = {<AddCategoryButton />} />
            <Route path= '/AddCategories' element = {<AddCategories />} />
            <Route path= '/AddMenu' element = {<AddMenu />} />
            


            {/* <Route path='/login' element={<Navigate to="/home" />} /> */}
        </Routes>
    );
}

export default Routers;