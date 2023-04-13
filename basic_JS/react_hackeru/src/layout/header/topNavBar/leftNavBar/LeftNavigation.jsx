import { Box } from "@mui/material";
import React from "react";
import Logo from "../logo/Logo";
import LogoIcon from "../logo/LogoIcon";
import NavItem from "../../../../routes/components/NavItem";
import ROUTES from "../../../../routes/routesModel";

export default function LeftNavigation() {
    return (
        <Box>
            <LogoIcon />
            <Logo />
            <NavItem to={ROUTES.ABOUT} label='ABOUT' />
            <NavItem to={ROUTES.CARDS} label='Cards' />
        </Box>);}