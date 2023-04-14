import { AppBar, Container, Toolbar } from '@mui/material';
import React from 'react';
import NavItem from '../routes/components/NavItem';
import { Outlet } from 'react-router-dom';

function SandBox(props) {
    return (
        <>
            <AppBar position="sticky" color="transparent">
                <Toolbar>
                    <NavItem to='first' label='FirstComp' sx={{color: 'black'}}/>
                    <NavItem to='second' label='SecondComp' sx={{color: 'black'}}/>
                    <NavItem to='life-cycle' label='LifeCycle' sx={{color: 'black'}}/>
                    <NavItem to="country" label="Country" sx={{color: 'black'}}/>
                </Toolbar>
            </AppBar>
            <Container>

                <Outlet />
            </Container>
        </>
    );
}

export default SandBox;