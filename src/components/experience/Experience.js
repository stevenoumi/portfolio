import React from 'react';
import {
  Box,
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


const experiences = [
  {
    label: 'Software Engineer at Company A',
    date: 'January 2022 - Present',
    description: 'Working on developing scalable web applications using React and Node.js.'
  },
  {
    label: 'Front-End Developer at Company B',
    date: 'June 2020 - December 2021',
    description: 'Focused on building responsive web designs and improving user experience with Angular.'
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

function Experience() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 1000, margin: '0 auto', backgroundColor: colors.grey[50]}}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {experiences.map((experience, index) => (
          <Step key={experience.label}>
            <StepLabel>
              <Typography variant="h6">{experience.label}</Typography>
              <Typography variant="subtitle2">{experience.date}</Typography>
            </StepLabel>
            <StepContent>
              <Stack
                direction="row"
                spacing={1}
                
                className="project-item-container">

                <Stack direction="column" spacing={2} className="project-item-text" >
                  <div className="project-item-title">
                    <Typography
                      variant="h5"
                      fontFamily={"times new roman"}
                      mb={1}
                    >
                      {experience.label}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      fontFamily={"times new roman"}
                      fontSize={20}
                      color={colors.green[500]}
                    >
                      {experience.date}
                    </Typography>
                  </div>
                  <p className="project-item-description">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. lorem ipsum dolor sit amet, consectetur
                  </p>
                  <Stack direction="row" spacing={10} className="project-item-skills">
                    
                    <div>
                      <PieChart
                        series={[
                          {
                            data: [
                              { id: 0, value: 10, label: 'first skill' },
                              { id: 1, value: 15, label: 'second skill' },
                              { id: 2, value: 20, label: 'third skill' },
                            ],
                          },
                        ]}
                        width={300}
                        height={100}
                        colors={['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', '#E6B333', '#3366E6', '#999966']}
                      />

                    </div>
                    <div>
                      <Gauge width={110} height={160} value={90}
                        fill="black"
                      
                      />

                    </div>
                  </Stack>

                </Stack>
                <Stack direction="column" spacing={2} className="project-item-image">

                  <CardMedia
                    component="img"
                    src="profile.png"
                    alt="random"
                    className="project-item-image"
                  />
                </Stack>
              </Stack>              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                    disabled={index === experiences.length }
                  >
                    {index === experiences.length -1 ? 'Terminer' : 'Suivant'}
                  </Button>
                  <Button
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                    disabled={index === 0}
                  >
                    Précédent
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === experiences.length   && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Vous avez vu toutes les expériences.</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }} variant='contained' color='success'>
            Réinitialiser
          </Button>
        </Paper>
      )}
    </Box>
  );
}

export default Experience;
