import React from 'react';
import { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import { Divider } from '@mui/material';
import { TextField } from '@mui/material';
import { IconButton } from '@mui/material';

import {
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Typography,
  Paper,
  Button,
  colors
} from '@mui/material';
import { CardMedia } from "@mui/material";
import { Stack } from "@mui/material";
import { PieChart } from '@mui/x-charts';
import { Gauge } from '@mui/x-charts';
import './formation.css';
import { ExpandMore, ExpandLess } from '@mui/icons-material';


const formations = [

  {
    label: 'Software Engineer at Company A',
    date: 'January 2022 - Present',
    description: 'Working on developing scalable web applications using React and Node.js.'
  },
  {
    label: 'Front-End Developer at Company B',
    date: 'June 2020 - December 2021',
    description: 'Focused on building responsive web designs and improving user formation with Angular.'
  },
  {
    label: 'Intern at Company C',
    date: 'January 2020 - May 2020',
    description: 'Assisted in developing and testing mobile applications using Flutter and Dart.'
  },
  {
    label: 'Web Developer at Company D',
    date: 'June 2019 - December 2019',
    description: 'Worked on creating and maintaining websites using HTML, CSS, and JavaScript.'
  }
];

function Formation() {

  const [expandedStep, setExpandedStep] = useState(null);
  const handleExpandClick = (index) => {
    setExpandedStep(expandedStep === index ? null : index);
  };

  return (
    <div className="formation_container">
      <Stack spacing={2} direction="row" className="formation_stack_container">
        <div className="formation_left">
          <Stack direction="column" className="formation_infos_container">
            <CardMedia
              component="img"
              alt="profile picture"
              src="my-avatar.png"
              className='formation_profile_picture'
            />
            <div>
              <h2> Darius NOUMI</h2>
              <div className='formation_infos_title'>
                <h4>Etudiant ingenieur</h4>
              </div>
            </div>

            <Divider className='formation_divider' />
            < Stack direction="column" spacing={2}>
              <Stack direction="row" spacing={3} className="formation_infos_row">
                <div className="formation_infos_icon">
                  <EmailIcon fontSize='2rem' />
                </div>
                <div>
                  <h5>Email:</h5>
                  <h6> adress@yahoo.com </h6>
                </div>
              </Stack>
              <Stack direction="row" spacing={3} className="formation_infos_row">
                <div className="formation_infos_icon">
                  <PhoneIcon fontSize='2rem' />
                </div>
                <div>
                  <h5>Telephone:</h5>
                  <h6>6 99 99 99 99 </h6>
                </div>
              </Stack>
              <Stack direction="row" spacing={3} className="formation_infos_row">
                <div className="formation_infos_icon">
                  <CalendarMonthIcon fontSize='2rem' />
                </div>
                <div>
                  <h5>Date de naissance:</h5>
                  <h6>30 Octobre 2003</h6>
                </div>
              </Stack>
              <Stack direction="row" spacing={3} className="formation_infos_row">
                <div className="formation_infos_icon">
                  <LocationOnIcon fontSize='2rem' />
                </div>
                <div>
                  <h5> Adresse :</h5>
                  <h6> Nantes, France </h6>
                </div>
              </Stack>
              <Stack direction="row" spacing={3} className="formation_infos_row_icon">
                <GitHubIcon fontSize='small' />
                <LinkedInIcon fontSize='small' />
                <FacebookIcon fontSize='small' />
                <TwitterIcon fontSize='small' />
              </Stack>
            </Stack>
          </Stack>
        </div>
        <div className="formation_right">
          <Stack direction="column" className="formation_form_container" spacing={2}>
            <div className='formation__stepper_container'>
              <Stack direction="row" spacing={2} className="formation__header">
                <MenuBookOutlinedIcon fontSize='large' />
                <h1> Mes formations</h1>
              </Stack>
              <Stepper orientation="vertical" position = "fixed">
                {formations.map((formation, index) => (
                  <Step key={formation.label}>
                    <StepLabel>
                      <Typography variant="h6">{formation.label}</Typography>
                      <Typography variant="subtitle2">{formation.date}</Typography>
                      <Stack direction="row" alignItems="center">
                        <Typography variant="body1" sx={{ width: '40vw', fontSize: '0.8rem' }}>
                          {expandedStep === index ? formation.description : `${formation.description.substring(0, 50)}...`}
                        </Typography>
                        <IconButton onClick={() => handleExpandClick(index)}>
                          {expandedStep === index ? <ExpandLess /> : <ExpandMore />}
                        </IconButton>
                      </Stack>
                    </StepLabel>

                  </Step>
                ))}
              </Stepper>
            </div>
            
          </Stack>
        </div>
      </Stack>
    </div>

  );
}

export default Formation;
