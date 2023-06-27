import * as React from "react";
import { Box, Stack, IconButton, Button, Typography } from "@mui/material";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import useMediaQuery from "@mui/material/useMediaQuery";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LoginIcon from '@mui/icons-material/Login';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import "./Nav.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../reducer/ContextProvider";
import { auth } from "../Firebase/Config";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `1px solid`,
    padding: "0 4px",
  },
}));

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const Nav = () => {
  const isActive = useMediaQuery("(max-width: 770px)");

  const [{ basket, user }, dispatch] = useStateValue();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAuth = () => {
    if (user) {
      auth.signOut()
    }
  }

  return (
    <>
      {
        !isActive && (
          <Box
            className="Menu"
            position="sticky"
            sx={{ zIndex: "101", top: 0, flexGrow: 1, padding: "5px 1rem", backgroundColor: "lightgray" }}
          >
            <Stack
              direction="row"
              spacing={3}
              sx={{ width: "95%", margin: "0 auto", display: "flex", justifyContent: "space-between" }}
            >
              <Link to="/" style={{ textDecoration: "none" }}>
                <Stack direction="row" sx={{ flexGrow: "1" }}>
                  <img
                    size="small"
                    src="https://cdn1.iconfinder.com/data/icons/payment-methods-13/48/amazon_payments_pay_online_send_money_credit_card_ecommerce-64.png"
                    edge="start"
                    alt="logo"
                  />
                  <Typography variant="h4" color="black" p={1} >Shop</Typography>
                </Stack>
              </Link>

              <Stack direction="row" spacing={1} style={{}}>
                <Button
                  color="inherit"
                  size="small"
                  disableRipple
                  disableFocusRipple
                  disableTouchRipple
                  onClick={handleAuth}
                >
                  <Link to={!user ? 'Signup' : null} style={{ textDecoration: "none", color: "black" }}>
                    {user ? 'Log Out' : 'Log In '}
                  </Link>
                </Button>



                <Button
                  color="inherit"
                  size="small"
                  disableRipple
                  disableFocusRipple
                  disableTouchRipple
                >
                  Return Order
                </Button>
                <Button
                  color="inherit"
                  size="small"
                  disableFocusRipple
                  disableTouchRipple
                >
                  Your prime
                </Button>

                <Link to="white-lists" style={{ textDecoration: "none", paddingTop: "15px" }}>
                  <Button variant="contained" color="secondary" endIcon={<FavoriteBorderIcon />}>Favourite</Button>
                </Link>

                <Link to="checkout">
                  <IconButton
                    aria-label="cart"
                    sx={{py:"15px"}}
                    disableRipple
                    disableFocusRipple
                    disableTouchRipple
                  >
                      <StyledBadge badgeContent={basket.length} color="warning">
                        <ShoppingCartIcon color="primary" variant="outlined" fontSize="large" />
                      </StyledBadge>
                  </IconButton>
                </Link>  
              </Stack>
            </Stack>
          </Box>
        )
      }

      {isActive && (
        <AppBar color="primary" position="sticky" sx={{ top: 0, bottom: "auto" }}>
          <Toolbar>
            <Button
              id="demo-customized-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="contained"
              disableElevation
              onClick={handleClick}
              endIcon={<KeyboardArrowDownIcon />}
            >
              Menu
            </Button>
            <StyledMenu
              id="demo-customized-menu"
              MenuListProps={{
                'aria-labelledby': 'demo-customized-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={auth ? handleAuth : undefined} disableRipple>
                <Link to={!user ? "signup" : null} onClick={handleClose} style={{ textDecoration: "none", color: "black" }}>
                  <LoginIcon />
                  {user ? 'Log Out' : 'Log In'}
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <BorderColorIcon />
                Return Order
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <SettingsAccessibilityIcon />
                HELLO Prime
              </MenuItem>
            </StyledMenu>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Typography sx={{ alignSelf: "center" }} >HOME</Typography>
            </Link>
            <Box sx={{ flexGrow: 1 }} />

            <Link to="white-lists" style={{ textDecoration: "none" }}>
              <IconButton variant="contained" sx={{color: "white"}}>
                <FavoriteIcon />
              </IconButton>
            </Link>
            
            <StyledBadge badgeContent={basket.length} color="warning" sx={{ mx: 2 }}>
              <Link to="checkout" style={{ color: "whitesmoke" }}>
                <ShoppingCartIcon />
              </Link>
            </StyledBadge>
          </Toolbar>
        </AppBar>
      )}
    </>
  );
};

export default Nav;
