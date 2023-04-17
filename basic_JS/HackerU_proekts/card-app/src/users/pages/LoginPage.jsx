import React from 'react';
import { Navigate } from 'react-router-dom';
import ROUTES from '../../routes/routesModel';

function LoginPage(props) {
    const user = {
        email: 'adjsdlfjsdjf'
    }
    if (user) {
        return <Navigate replace to={ROUTES.ROOT} />
    }

    return (
        <div>
            Login Page
        </div>
    );
}

export default LoginPage;