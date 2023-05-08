import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Hamburger } from '../../assets/hamburger.svg'
import { ReactComponent as Brand } from '../../assets/logo.svg'
import '../../Styles/header.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'

//import MenuItems from '../Pages/MenuList'

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  




  

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }



  return (

//     <div class="top-bar">
//     <div class="container-lg container-fluid ">
//         <div class="row">
//             <div class="col-lg-5 col-md-5 d-flex align-items-center justify-content-md-start justify-content-center">
//                 <div class="open-time">
//                     <p>
//                         <span>Opening Hour:</span>
//                         9.00 am to 10.00 pm
//                     </p>
//                 </div>
//             </div>
//             <div class="col-lg-7 col-md-7 d-flex justify-content-end">
//                 <div class="contact-info">
//                     <ul>
//                         <li>
//                             <a href="mailto:info@example.com">
//                                 <i class="bi bi-envelope"></i>
//                                 info@example.com
//                             </a>
//                         </li>
//                         <li>
//                             <a>
//                                 <i class="bi bi-geo-alt"></i>
//                                 Road-01, Block-B, West London City
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
  
    <nav className="navbar" bg = "dark" >
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/MenuList"> Menu List </NavLink>
            </li>
            <li>
              <NavLink to="/Aboutus">About</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
            <Form className="d-flex">
            <Form.Control 
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(event) => setSearchValue(event.target.value)}
              value={searchValue}
            />
            <Button variant="outline-success"onClick = {() => {

                                console.log(searchValue);

                                navigate("/dishByName", {state : {dishName : searchValue}})

                            }}>Search</Button>
          </Form>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header