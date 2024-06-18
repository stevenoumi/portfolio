import { AppBar, Toolbar, Button, IconButton, Typography, Stack } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import "./header.css";

function Header() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <AppBar position="relative" className="header-container">
        <Toolbar>
          <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}           
            >
              S
            </IconButton>
            <Typography variant="h1" >
              Darius NOUMI /
            </Typography>
            <Typography variant="h6" >
              Etudiant ingenieur
            </Typography>
          </Stack>
          <Stack direction="row" spacing={4}>
            <Typography variant="h6" >
              EXPERIENCE
            </Typography>
            <Typography variant="h6" >
              FORMATION
            </Typography>
            <Typography variant="h6" >
              PROJETS
            </Typography>
            <Typography variant="h6" >
              APTITUDE
            </Typography>
            <Typography variant="h6" >
              EXPERTISE
            </Typography>

            <Typography variant="h6" >
              CONTACT
            </Typography>

            <Button color="inherit" onClick={() => changeLanguage("fr")}>
              FR
            </Button>

          </Stack>

        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
