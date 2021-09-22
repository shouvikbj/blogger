import React, { useContext, useEffect } from "react";

import Link from "next/link";
import Router from "next/router";

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

import { AuthContext } from "../components/AuthContext";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const Navbar = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigateToMyPosts = () => {
    Router.push("/my-posts");
  };

  const handleSignin = () => {
    var firebaseConfig = {
      apiKey: "AIzaSyC9vtOyHhZmP2rD2_SoAez0_m5qqGxi8mE",
      authDomain: "fir-8c9f5.firebaseapp.com",
      projectId: "fir-8c9f5",
      storageBucket: "fir-8c9f5.appspot.com",
      messagingSenderId: "507014862640",
      appId: "1:507014862640:web:9d8d43f1fd39ec942a5af5",
      measurementId: "G-9H4EBY5P2E",
    };

    const app = initializeApp(firebaseConfig);

    var provider = new GoogleAuthProvider();

    const a = getAuth();

    signInWithPopup(a, provider)
      .then((data) => {
        const user = {
          name: data.user.displayName,
          email: data.user.email,
          image: data.user.photoURL,
        };
        setAuth(user);
        toast(`Welcome ${user.name}`, { type: "success" });
        Cookies.set("blogger_user_name", user.name, { expires: 365 });
        Cookies.set("blogger_user_email", user.email, { expires: 365 });
        Cookies.set("blogger_user_image", user.image, { expires: 365 });
      })
      .catch((error) => {
        toast("Signin failed!", { type: "error" });
      });
  };

  const checkAuth = () => {
    var blogger_user_name = Cookies.get("blogger_user_name");
    var blogger_user_email = Cookies.get("blogger_user_email");
    var blogger_user_image = Cookies.get("blogger_user_image");
    if (blogger_user_name && blogger_user_email && blogger_user_image) {
      setAuth({
        name: blogger_user_name,
        email: blogger_user_email,
        image: blogger_user_image,
      });
    }
  };

  const logoutUser = () => {
    var choice = confirm("Want to Logout?");
    if (choice == true) {
      toast("Logged out!", { type: "success" });
      setAuth(null);
      Cookies.remove("blogger_user_name");
      Cookies.remove("blogger_user_email");
      Cookies.remove("blogger_user_image");
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "transparent" }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link href="/">
              <a style={{ fontWeight: "bolder" }}>Blogger</a>
            </Link>
          </Typography>
          {auth ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar alt="" src={auth.image} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={() => {}}>
                  <Avatar alt="" src={auth.image} />
                  <Chip label={auth.name} color="primary" variant="outlined" />
                </MenuItem>
                <MenuItem onClick={() => {}}>
                  <Chip label={auth.email} color="primary" variant="outlined" />
                </MenuItem>
                <Divider />
                <MenuItem
                  onClick={() => {
                    navigateToMyPosts();
                    handleClose();
                  }}
                >
                  My Posts
                </MenuItem>
                <Divider />
                <MenuItem
                  onClick={() => {
                    logoutUser();
                    handleClose();
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle fontSize="large" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem
                  onClick={() => {
                    handleSignin();
                    handleClose();
                  }}
                >
                  Get Started!
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
