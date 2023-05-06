import {
    LOGIN_FAILURE,
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGOUT
} from "./actionTypesLogin";

import { useState } from "react";


import axios from "axios";




export const loginAPI = (creds) => (dispatch) => {

    dispatch({ type: LOGIN_LOADING });

    const headers = {
        "Content-Type": "application/json",
    };

    axios.post('https://localhost:7205/api/Users', creds, {
        headers: headers,
    })
    .then((r) => dispatch({type: LOGIN_SUCCESS, playload: r.data}))
    // .catch(() => dispatch({ type: LOGIN_FAILURE }));
};

export const LogoutAPI = () => ({ type: LOGOUT });