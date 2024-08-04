import { AppBar, Toolbar, Button, IconButton, Typography, Stack } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };


  return (
    <div>
      <AppBar position="fixed" className="header-container">
        <Toolbar>
          <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'inherit' , display: 'flex', alignItems: 'center'}}>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}         
            >
              S
            </IconButton>
            <Typography 
            variant="h1"
            >
              Darius NOUMI  /
            </Typography>
            <Typography
             variant="h6"
             ml={1}
             >
              Etudiant ingenieur
            </Typography>
            </Link>
          </Stack>
          <Stack direction="row" spacing={4}>
            <Link to="/a-propos" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h6">
                A PROPOS
              </Typography>
            </Link>
            <Link to="/experience" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h6">
                EXPERIENCE
              </Typography>
            </Link>
            <Link to="/formation" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h6">
                FORMATION
              </Typography>
            </Link>
            <Link to="/projets" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h6">
                PROJETS
              </Typography>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h6">
                CONTACT
              </Typography>
            </Link>
            {/* <Button color="inherit" onClick={() => changeLanguage("fr")}>
              FR
            </Button> */}
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
