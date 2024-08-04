import React from "react";
import "./welcome.css";
import { Box, CardMedia, Stack, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


function Welcome() {
  return (
    <div>
      <Box direction="column" spacing={2} className="welcome-conatiner">
        <Stack direction="column" className="welcome-table">
          <Stack direction="row" spacing={2}  >
            <Stack direction="column" spacing={2} className="welcome-image-container">
              <CardMedia
                component="img"
                alt="profile picture"
                src="profile.png"
              />
            </Stack>
            <Stack direction="column" spacing={3.5} className="welcome-text-container">
              <div>
                <Typography variant="h1">
                  Steve Darius NDE NOUMI
                </Typography>
                <Typography variant="h6">
                  ETUDIANT INGENIEUR EN INFORMATIQUE
                </Typography>
              </div>
              <Stack direction="row" spacing={3.5} className="welcome_infos_row">
                <div className="contact_infos_icon">
                  <EmailIcon fontSize='2rem' />
                </div>
                <div>
                  <h5>Email:</h5>
                  <h6> adress@yahoo.com </h6>
                </div>
              </Stack>
              <Stack direction="row" spacing={3.5} className="welcome_infos_row">
                <div className="contact_infos_icon">
                  <PhoneIcon fontSize='2rem' />
                </div>
                <div>
                  <h5>Telephone:</h5>
                  <h6>6 99 99 99 99 </h6>
                </div>
              </Stack>
              <Stack direction="row" spacing={3.5} className="welcome_infos_row">
                <div className="contact_infos_icon">
                  <CalendarMonthIcon fontSize='2rem' />
                </div>
                <div>
                  <h5>Date de naissance:</h5>
                  <h6>30 Octobre 2003</h6>
                </div>
              </Stack>
              <Stack direction="row" spacing={3.5} className="welcome_infos_row">
                <div className="contact_infos_icon">
                  <LocationOnIcon fontSize='2rem' />
                </div>
                <div>
                  <h5> Adresse :</h5>
                  <h6> Nantes, France </h6>
                </div>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction='row' spacing={4} className="welcome-social-media-container">
            <div>
              <LinkedInIcon
                onClick={() => window.open('https://www.linkedin.com/in/steve-darius-nde-noumi-0b8b8b1b0/')}
                className="welcome-icone"
              />
            </div>
            <div>
              <FacebookIcon
                onClick={() => window.open('https://www.facebook.com/steve.darius.7')}
                className="welcome-icone"
              />
            </div>
            <div>
              <TwitterIcon
                onClick={() => window.open('https://twitter.com/SteveDariusNde1')}
                className="welcome-icone"
              />
            </div>
            <div>
              <GitHubIcon
                onClick={() => window.open('https://guithub.com/stevenoumi')}
                className="welcome-icone"
              />
            </div>
          </Stack>
        </Stack>
      </Box>
    </div>

  );
}

export default Welcome;