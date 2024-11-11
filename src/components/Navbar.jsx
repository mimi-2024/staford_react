import React, { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Logo from "../assets/images/header_logo.png";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    { text: "Home", path: "/" },
    { text: "About", path: "/components/pages/AboutUs" },
    { text: "Product", to: "Product" },
    { text: "OTC Products", to: "OtcProductSection" },
    { text: "Contact", to: "Course" }
  ];

  return (
    <header className="headersec">
      <div className="container">
        <div className="hderinr">
          <div className="hdrlgo">
            <img src={Logo} alt="" onClick={() => window.scrollTo(0, 0)} />
          </div>
          <div className="hdrmnu">
            {menuOptions.map((item) => (
              <Link key={item.text} to={item.path} className="nav-link">
                {item.text}
              </Link>
            ))}
          </div>
          <div className="navbar-menu-container">
            <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
          </div>
          <Drawer
            open={openMenu}
            onClose={() => setOpenMenu(false)}
            anchor="right"
          >
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={() => setOpenMenu(false)}
              onKeyDown={() => setOpenMenu(false)}
            >
              <List>
                {menuOptions.map((item) => (
                  <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                      <Link
                        to={item.path}
                        className="drawer-link"
                        onClick={() => setOpenMenu(false)}
                      >
                        <ListItemText primary={item.text} />
                      </Link>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Box>
          </Drawer>
          <div className="hdrinfo" id="desktopinfo">
            <ul>
              <li>
              <span style={{ transform: 'rotate(90deg)' }}><FaPhone/></span>
                <a href="tel:001234567890">+00 123 456 7890</a>
              </li>
              <li>
                <span><FaEnvelope /></span>
                <a href="mailto:info@stafford.com">info@stafford.com</a>
              </li>
            </ul>
          </div>
          <div className="hdrinfo" id="mobileinfo">
            <ul>
              <li>
              <span style={{ transform: 'rotate(90deg)' }}><a href="tel:001234567890"><FaPhone/></a></span>
               
              </li>
              <li>
                <span><a href="mailto:info@stafford.com"><FaEnvelope /></a></span>
               
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
