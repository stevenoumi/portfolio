import React from "react";
import "./welcome.css";
import { Box, CardMedia, Stack, Typography } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

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
            <Stack direction="column" spacing={3} className="welcome-text-container">
              <div>
                <Typography variant="h1">
                  Steve Darius NDE NOUMI
                </Typography>
                <Typography variant="h6">
                  ETUDIANT INGENIEUR EN INFORMATIQUE
                </Typography>
              </div>
              <div>
                <Typography variant="h5">
                  Telephone:
                </Typography>
                <Typography variant="h6">
                  +261 34 12 345 67
                </Typography>
              </div>
              <div>
                <Typography variant="h5">
                  Email:
                </Typography>
                <Typography variant="h6">
                  steve@yahoo.com
                </Typography>
              </div>
              <div>
                <Typography variant="h5">
                  Adresse:
                </Typography>
                <Typography variant="h6">
                  Antananarivo, Madagascar
                </Typography>
              </div>
              <div>
                <Typography variant="h5">
                  Date de naissance:
                </Typography>
                <Typography variant="h6">
                  01 Janvier 2000
                </Typography>
              </div>
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