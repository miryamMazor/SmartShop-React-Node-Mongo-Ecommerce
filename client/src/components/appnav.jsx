
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import { useNavigate } from 'react-router';
// import { useSelector } from 'react-redux'; // ייבוא useSelector מ-react-redux
// import { admin } from './redux/Action';

// const pages = ['קורסים&מוצרים', 'דף הבית', 'התחברות', 'עגלת קניות', 'הרשמה'];
// const settings = ['עריכת פרופיל', 'סל הקניות', 'מנהל מערכת', 'LearnTech'];

// function ResponsiveAppBar() {
//     const [anchorElNav, setAnchorElNav] = React.useState(null);
//     const [anchorElUser, setAnchorElUser] = React.useState(null);
//     let nav = useNavigate();
//     const thisadmin = useSelector(state => state.admin); // קבלת המשתמש הנוכחי מ-Redux
//     console.log(thisadmin);

//     const handleOpenNavMenu = (event) => {
//         setAnchorElNav(event.currentTarget);
//     };

//     const handleOpenUserMenu = (event) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseNavMenu = (page) => {
//         setAnchorElNav(null);
//         if (page === 'קורסים&מוצרים') {
//             nav('/products');
//         } else if (page === 'דף הבית') {
//             nav('/home');
//         } else if (page === 'התחברות') {
//             nav('/login');
//         } else if (page === 'עגלת קניות') {
//             nav('/cart');
//         } else if (page === 'הרשמה') {
//             nav('/signup');
//         }else if (page === 'Categories') {
//             nav('/Categories');
//         } else if (page === 'ProductAdmin') {
//             nav('/ProductAdmin');
//         }
//     };

//     const handleCloseUserMenu = (setting) => {
//         setAnchorElUser(null);
//         if (setting === 'עריכת פרופיל') {
//             nav('/profile');
//         } else if (setting === 'סל הקניות') {
//             nav('/cart');
//         } else if (setting === 'מנהל מערכת') {
//             nav('/admin');
//         } else if (setting === 'LearnTech') {
//             nav('/home');
//         }
//     };

//     return (
//         <AppBar position="static">
//             <Container maxWidth="xl">
//                 <Toolbar disableGutters>
//                     <Typography
//                         variant="h6"
//                         noWrap
//                         component="a"
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'none', md: 'flex' },
//                             fontFamily: 'monospace',
//                             fontWeight: 700,
//                             letterSpacing: '.3rem',
//                             color: 'inherit',
//                             textDecoration: 'none',
//                         }}
//                     >
//                         LearnTech
//                     </Typography>

//                     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//                         <IconButton
//                             size="large"
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleOpenNavMenu}
//                             color="inherit"
//                         >
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorElNav}
//                             anchorOrigin={{
//                                 vertical: 'bottom',
//                                 horizontal: 'left',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'left',
//                             }}
//                             open={Boolean(anchorElNav)}
//                             onClose={() => handleCloseNavMenu(null)}
//                             sx={{
//                                 display: { xs: 'block', md: 'none' },
//                             }}
//                         >
//                             {pages.map((page) => (
//                                 <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
//                                     <Typography textAlign="center">{page}</Typography>
//                                 </MenuItem>
//                             ))}
//                             {thisadmin &&(
//                                 <>
//                                     <MenuItem onClick={() => handleCloseNavMenu('ProductAdmin')}>
//                                         <Typography textAlign="center">ProductAdmin</Typography>
//                                     </MenuItem>
//                                     <MenuItem onClick={() => handleCloseNavMenu('Categories')}>
//                                         <Typography textAlign="center">Categories</Typography>
//                                     </MenuItem>
//                                 </>
//                             )}
//                         </Menu>
//                     </Box>
//                     <Typography
//                         variant="h5"
//                         noWrap
//                         component="a"
//                         sx={{
//                             mr: 2,
//                             display: { xs: 'flex', md: 'none' },
//                             flexGrow: 1,
//                             fontFamily: 'monospace',
//                             fontWeight: 700,
//                             letterSpacing: '.3rem',
//                             color: 'inherit',
//                             textDecoration: 'none',
//                         }}
//                     >
//                         LearnTech
//                     </Typography>
//                     <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//                         {pages.map((page) => (
//                             <Button
//                                 key={page}
//                                 onClick={() => handleCloseNavMenu(page)}
//                                 sx={{ my: 2, color: 'white', display: 'block' }}
//                             >
//                                 {page}
//                             </Button>
//                         ))}
//                         {thisadmin.name &&(
//                             <>
//                                 <Button
//                                     onClick={() => handleCloseNavMenu('ProductAdmin')}
//                                     sx={{ my: 2, color: 'white', display: 'block' }}
//                                 >
//                                     ProductAdmin
//                                 </Button>
//                                 <Button
//                                     onClick={() => handleCloseNavMenu('Categories')}
//                                     sx={{ my: 2, color: 'white', display: 'block' }}
//                                 >
//                                     Categories
//                                 </Button>
//                             </>
//                         )}
//                     </Box>

//                     <Box sx={{ flexGrow: 0 }}>
//                         <Tooltip title="Open settings">
//                             <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                                 <Avatar alt="LearnTech" src="/static/images/avatar/2.jpg" />
//                             </IconButton>
//                         </Tooltip>
//                         <Menu
//                             sx={{ mt: '45px' }}
//                             id="menu-appbar"
//                             anchorEl={anchorElUser}
//                             anchorOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                                 vertical: 'top',
//                                 horizontal: 'right',
//                             }}
//                             open={Boolean(anchorElUser)}
//                             onClose={() => handleCloseUserMenu(null)}
//                         >
//                             {settings.map((setting) => (
//                                 <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
//                                     <Typography textAlign="center">{setting}</Typography>
//                                 </MenuItem>
//                             ))}
//                         </Menu>
//                     </Box>
//                 </Toolbar>
//             </Container>
//         </AppBar>
//     );
// }

// export default ResponsiveAppBar;
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';

const pages = ['קורסים&מוצרים', 'דף הבית', 'התחברות', 'עגלת קניות', 'הרשמה'];
const settings = ['עריכת פרופיל', 'סל הקניות', 'מנהל מערכת', 'LearnTech'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    let nav = useNavigate();
    const currentUser = useSelector(state => state.currentUser);
    const thisadmin = useSelector(state => state.admin);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (page) => {
        setAnchorElNav(null);
        if (page === 'קורסים&מוצרים') {
            nav('/products');
        } else if (page === 'דף הבית') {
            nav('/home');
        } else if (page === 'התחברות') {
            nav('/login');
        } else if (page === 'עגלת קניות') {
            nav('/cart');
        } else if (page === 'הרשמה') {
            nav('/signup');
        } else if (page === 'Categories') {
            nav('/Categories');
        } else if (page === 'ProductAdmin') {
            nav('/ProductAdmin');
        }
    };

    const handleCloseUserMenu = (setting) => {
        setAnchorElUser(null);
        if (setting === 'עריכת פרופיל') {
            nav('/profile');
        } else if (setting === 'סל הקניות') {
            nav('/cart');
        } else if (setting === 'מנהל מערכת') {
            nav('/admin');
        } else if (setting === 'LearnTech') {
            nav('/home');
        }
    };

    // קבלת האות הראשונה של השם
    const getInitial = (name) => {
        return name ? name.charAt(0).toUpperCase() : 'L';
    };

    // קבלת שם המשתמש או המנהל
    const userName = thisadmin.name || currentUser.name;
    const userInitial = getInitial(userName);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LearnTech
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
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
                            onClose={() => handleCloseNavMenu(null)}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                            {thisadmin && (
                                <>
                                    <MenuItem onClick={() => handleCloseNavMenu('ProductAdmin')}>
                                        <Typography textAlign="center">ProductAdmin</Typography>
                                    </MenuItem>
                                    <MenuItem onClick={() => handleCloseNavMenu('Categories')}>
                                        <Typography textAlign="center">Categories</Typography>
                                    </MenuItem>
                                </>
                            )}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LearnTech
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleCloseNavMenu(page)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                        {thisadmin.name && (
                            <>
                                <Button
                                    onClick={() => handleCloseNavMenu('ProductAdmin')}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    ProductAdmin
                                </Button>
                                <Button
                                    onClick={() => handleCloseNavMenu('Categories')}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    Categories
                                </Button>
                            </>
                        )}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar>{userInitial}</Avatar>
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
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
                            onClose={() => handleCloseUserMenu(null)}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={() => handleCloseUserMenu(setting)}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
