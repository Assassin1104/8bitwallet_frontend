import React from 'react'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';

import MenuIcon from '@mui/icons-material/Menu';

import LogoImage from '../assets/img/logo.png'

import BitButton1 from './Button/BitButton1';
import BitHeaderButton from './Button/BitHeaderButton';

export default function Header() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <div className='header'
            style={{
                backgroundColor: '#03161F'
            }}>
            <Container maxWidth="xl">
                <AppBar position="static"
                    sx={{
                        height: '116px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        backgroundColor: '#03161F',
                        border: '',
                        boxShadow: 'none'
                    }}>
                    <Container maxWidthg="xl">
                        <Toolbar disableGutters
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-around'
                            }}>
                            <IconButton href="/" aria-label="8bit Wallet">
                                <img
                                    src={`${LogoImage}`}
                                    style={{ width: '176px', height: '66px' }}
                                    alt="logoimage" />
                            </IconButton>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: 'flex', md: 'none' },
                                    justifyContent: 'flex-end'
                                }}>

                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon sx={{
                                        border: '3px solid #3ECF8E', fontSize: '35px',
                                        '&:hover': {
                                            fontSize: '37px', boxShadow: '0 0 15px #3ECF8E'
                                        }
                                    }} />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}

                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: { xs: 'flex', md: 'none', justifyContent: 'end', },
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            backgroundColor: 'black'
                                        }}>
                                        <BitHeaderButton content="Home" textColor="white" url="/" />
                                        <BitHeaderButton content="Status" textColor="white" url="/status" />
                                        <BitHeaderButton content="Crypto Prices" textColor="white" url="/prices" />
                                        <BitHeaderButton content="About" textColor="white" url="/about" />
                                        <BitHeaderButton content="Contact" textColor="white" url="/contact" />
                                        <BitButton1 content="Download" displayXS="flex" displayMD="none" fontSize='15px' />
                                    </Box>
                                </Menu>
                            </Box>
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: 'none', md: 'flex' },
                                    justifyContent: 'center',
                                    alignItem: 'center'
                                }}>
                                <BitHeaderButton content="Home" textColor="white" url="/" />
                                <BitHeaderButton content="Status" textColor="white" url="/status" />
                                <BitHeaderButton content="Crypto Prices" textColor="white" url="/prices" />
                                <BitHeaderButton content="About" textColor="white" url="/about" />
                                <BitHeaderButton content="Contact" textColor="white" url="/contact" />
                            </Box>
                            <BitButton1 content={"Download"} displayXS="none" displayMD="flex" fontSize='15px' />
                            <Box
                                sx={{
                                    flexGrow: 0
                                }}>
                                <Menu
                                    sx={{
                                        mt: '45px'
                                    }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Container >
        </div >
    )

}

