import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Routers from '../../Routes/Routers';
import  Footer  from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Layout = () => {

    

    return (
        <Fragment>
            <Header />
            <div>
                <Routers />
            </div>
            {/* <Footer /> */}
        </Fragment>

    );
}

export default Layout