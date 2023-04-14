import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CardsPage from '../cards/pages/CardsPage';
import PageAbout from '../pages/AboutPage';
import ROUTES from './routesModel';
import ErrorPage from '../pages/ErrorPage';
import FavCardsPage from '../cards/pages/FavCardsPage';
import MyCards from '../cards/pages/MyCards';
import SignupPage from '../users/pages/SignupPage';
import LoginPage from '../users/pages/LoginPage';
import EditUser from '../users/pages/EditUser';
import UserProfile from '../users/pages/UserProfile';
import CardDetailsPage from '../cards/pages/CardDetailsPage';
import SandBox from '../sandbox/SandBox';
import FirsComponent from '../sandbox/components/FirsComponent';
import SecondComponent from '../sandbox/components/SecondComponent';
import LifeCycle from '../sandbox/components/LifeCycle';
import Country from '../sandbox/components/Country';

function Router(props) {
    return (
        <Routes>

            <Route path={ROUTES.ROOT} element={<CardsPage/>} />
            <Route path={ROUTES.CARDS} element={<CardsPage/>} />
            <Route path={ROUTES.ABOUT} element={<PageAbout/>} />
            <Route path={ROUTES.FAV_CARDS} element={<FavCardsPage/>} />
            <Route path={ROUTES.MY_CARDS} element={<MyCards/>} />
            <Route path={ROUTES.SIGNUP} element={<SignupPage/>} />
            <Route path={ROUTES.LOGIN} element={<LoginPage/>} />
            <Route path={ROUTES.EDIT_USER} element={<EditUser/>} />
            <Route path={ROUTES.UserProfile} element={<UserProfile/>} />
            <Route path={`${ROUTES.CARD_INFO}/:id`} element = {<CardDetailsPage />} />
            <Route path={ROUTES.SANDBOX} element = {<SandBox />}>
                <Route path="first" element={<FirsComponent />} />
                <Route path="second" element={<SecondComponent />} />
                <Route path="life-cycle" element={<LifeCycle />} />
                <Route path="country" element={<Country />} />
            </Route>
            <Route path='*' element={<ErrorPage/>} />
            
        </Routes>
    );
}

export default Router;