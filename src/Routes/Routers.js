import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from '../Components/Pages/home';
import Login from '../Components/Pages/login';
import MenuItems from '../Components/Pages/MenuList';

const Routers = () => {
    return(
        <Routes>
            <Route path='/' element={<Navigate to="/home" />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element= {<Login />} />
            <Route path = '/MenuList' element = {<MenuItems />} />
            {/* <Route path='/login' element={<Navigate to="/home" />} /> */}
        </Routes>
    );
}

export default Routers;