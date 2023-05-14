import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link, NavLink, useNavigate} from "react-router-dom";

function Navbar() {
    const navigate = useNavigate()

    const func = () => {
        navigate('/Home')
    }


    return (
        <div>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static" style={{background: "#00214a"}}>
                    <Toolbar className="container">
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{mr: 2, '&:hover': {backgroundColor: '#0e3b75'}}}
                        >
                            <MenuIcon/>
                        </IconButton>

                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            News

                        </Typography>
                        <Box sx={{display: {xs: 'none', sm: 'block'}}}>


                            <Button sx={{'&:hover': {backgroundColor: '#0e3b75'}}}>
                                <NavLink style={{color: '#fff', textDecoration: "none"}} to="/home">Home Page</NavLink>
                            </Button>

                            <Button sx={{'&:hover': {backgroundColor: '#0e3b75'}}}>
                                <NavLink style={{color: '#fff', textDecoration: "none"}} to="/converter">Converter page</NavLink>
                            </Button>

                        </Box>

                        <Button color="inherit" sx={{'&:hover': {backgroundColor: '#0e3b75'}}}>Login</Button>
                    </Toolbar>
                </AppBar>
            </Box>

        </div>

    );
}

export default Navbar;