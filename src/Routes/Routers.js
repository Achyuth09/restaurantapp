import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
//import HomePage from '../Components/Pages/home';
import Login from '../Components/Pages/login';
import MenuItems from '../Components/Pages/MenuList';
import CategoryItems from '../Components/Pages/CategoryList';
import DishItems from '../Components/Pages/DishList';
import EditMenu from '../Forms/MenuEdit';
import AddCategoryButton from '../Components/Pages/AddCategoryButton';
import AddCategories from '../Forms/AddCategories';
import AddMenu from '../Forms/AddMenu';
import EditCategory from '../Forms/CategoryEdit';
import AddDish from '../Forms/AddDish';
import EditDish from '../Forms/DishEdit';
import HomePage from '../Components/Pages/home';
import AboutPage from '../Components/Pages/Aboutus';
import ContactPage from '../Components/Pages/Contact';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import DishByName from '../Components/Pages/dishByName';
const Routers = () => {
   

    

        return (<>
        
            <Routes>
                {/* <Route path='/' element={<Navigate to="/home" />} /> */}
                <Route path='/home' element={<HomePage />} />
                <Route path='/login' element={<Login/> } />
                <Route path='/MenuList' element={<MenuItems />}  />
                <Route path='/CategoryList' element={< CategoryItems />} />
                <Route path='/DishList' element={< DishItems />} />
                <Route path='/editmenu' element={<EditMenu />} />
                <Route path='/editcategory' element={<EditCategory />} />
                <Route path='/AddCategoryButton' element={<AddCategoryButton />} />
                <Route path='/AddCategories' element={<AddCategories />} />
                <Route path='/AddMenu' element={<AddMenu />} />
                <Route path='/AddDish' element={<AddDish />} />
                <Route path='/EditDish' element={<EditDish />} />
                <Route path='/Aboutus' element={< AboutPage />} />
                <Route path='/contact' element={< ContactPage />} />
                <Route path='/dishByName' element={< DishByName />} />
                {/* <Route path='/login' element={<Navigate to="/home" />} /> */}
            </Routes>
            </>
        );
    }


    export default Routers;