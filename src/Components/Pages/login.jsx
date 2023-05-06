import React, { useEffect, useState } from 'react';
import '../../Styles/login.css'
import { useDispatch, useSelector } from 'react-redux';
import { loginAPI } from '../storeLogin/actionLogin';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
//     const [password, setPassword] = useState("");
//   const [username, setusername] = useState("");
//   const [passwordError, setpasswordError] = useState("");
//   const [usernameError, setusernameError] = useState("");

const [login, setLogin] = useState({
    userId: "",
    password: "",
})

const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
}

//   const handleValidation = (event) => {
//     let formIsValid = true;
//     const dispatch = useDispatch();

//     if (!username.match(/^[a-zA-Z]{8,22}$/)) {
//       formIsValid = false;
//       setusernameError("username Not Valid");
//       return false;
//     } else {
//       setusernameError("");
//       formIsValid = true;
//     }

//     if (!password.match(/^[a-zA-Z]{8,22}$/)) {
//       formIsValid = false;
//       setpasswordError(
//         "Only Letters and length must best min 8 Chracters and Max 22 Chracters"
//       );
//       return false;
//     } else {
//       setpasswordError("");
//       formIsValid = true;
//     }

//     return formIsValid;
//   };

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAPI(login));
    console.log(login);
    // handleValidation();
  };

  const { isAuth } = useSelector((state) => state.login);
  console.log(isAuth);  
  useEffect(() => {
    if(isAuth) {
        navigate("/home");
    }
  }, [navigate, isAuth]);

    return (
        <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <label>Username</label>
                <input
                  type="userId"
                  className="form-control"
                  id="userId"
                  name="userId"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  value={login.userId}
                  onChange={handleLoginChange}
                />
                {/* <small id="emailHelp" className="text-danger form-text">
                  {usernameError}
                </small> */}
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  value={login.password}
                  onChange={handleLoginChange}
                />
                {/* <small id="passworderror" className="text-danger form-text">
                  {passwordError}
                </small> */}
              </div>
              {/* <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">Check me out</label>
              </div> */}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;