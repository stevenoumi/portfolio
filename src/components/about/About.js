import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoIcon from '@mui/icons-material/Info';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Divider } from '@mui/material';
import { CardMedia } from "@mui/material";
import { Stack } from "@mui/material";
import './about.css';

const recommendations = [
  {
    name: 'Personne A',
    contact: '6 99 99 99 99',
    relation: 'Collègue de travail'
  },
  {
    name: 'Personne B',
    contact: '6 88 88 88 88',
    relation: 'Supérieur hiérarchique'
  },
  {
    name: 'Personne C',
    contact: '6 77 77 77 77',
    relation: 'Mentor'
  },
  {
    name: 'Personne D',
    contact: '6 66 66 66 66',
    relation: 'Client'
  },
  {
    name: 'Personne E',
    contact: '6 55 55 55 55',
    relation: 'Ancien collègue'
  },
  // Ajoutez autant de recommandations que nécessaire
];

function About() {

  return (
    <div className="about_container">
      <Stack spacing={2} direction="row" className="about_stack_container">
        <div className="about_left">
          <Stack direction="column" className="about_infos_container">
            <CardMedia
              component="img"
              alt="profile picture"
              src="my-avatar.png"
              className='about_profile_picture'
            />
            <div>
              <h2> Steve Darius NOUMI</h2>
              <div className='about_infos_title'>
                <h4>Etudiant ingenieur</h4>
              </div>
            </div>

            <Divider className='about_divider' />
            < Stack direction="column" spacing={2}>
              <Stack direction="row" spacing={3} className="about_infos_row">
                <div className="about_infos_icon">
                  <EmailIcon fontSize='2rem' />
                </div>
                <div>
                  <h5>Email:</h5>
                  <h6> adress@yahoo.com </h6>
                </div>
              </Stack>
              <Stack direction="row" spacing={3} className="about_infos_row">
                <div className="about_infos_icon">
                  <PhoneIcon fontSize='2rem' />
                </div>
                <div>
                  <h5>Telephone:</h5>
                  <h6>6 99 99 99 99 </h6>
                </div>
              </Stack>
              <Stack direction="row" spacing={3} className="about_infos_row">
                <div className="about_infos_icon">
                  <CalendarMonthIcon fontSize='2rem' />
                </div>
                <div>
                  <h5>Date de naissance:</h5>
                  <h6>30 Octobre 2003</h6>
                </div>
              </Stack>
              <Stack direction="row" spacing={3} className="about_infos_row">
                <div className="about_infos_icon">
                  <LocationOnIcon fontSize='2rem' />
                </div>
                <div>
                  <h5> Adresse :</h5>
                  <h6> Nantes, France </h6>
                </div>
              </Stack>
              <Stack direction="row" spacing={3} className="about_infos_row_icon">
                <GitHubIcon fontSize='small' />
                <LinkedInIcon fontSize='small' />
                <FacebookIcon fontSize='small' />
                <TwitterIcon fontSize='small' />
              </Stack>
            </Stack>
          </Stack>
        </div>
        <div className="about_right">
          <Stack direction="column" spacing={2}>
            <div >
              <Stack direction="row" spacing={2} className="about__header">
                <InfoIcon fontSize='large' />
                <h1> A propos de moi</h1>
              </Stack>
              <Divider sx={{ width: '6%', backgroundColor: "#f9f9f9", height: '4px', borderRadius: '5px' }} />
            </div>
            <div >
              <p>
                I am a software engineer with experience in front-end development, back-end development, and mobile application development. I am passionate about creating user-friendly applications and I am always looking to learn new technologies. I have experience working with React, Angular, Node.js, and Flutter.
              </p>
            </div>
            <div>
              <h1> Mon Expertise</h1>
              <Stack direction="column" spacing={2}>
                <Stack direction="row" spacing={5}>
                  <Stack direction="row" spacing={3} className="about_form_expertise">
                    <div className="about_infos_icon">
                      <PhoneIcon fontSize='2rem' />
                    </div>
                    <div>
                      <h5>Telephone:</h5>
                      <h6>6 99 99 99 99 </h6>
                    </div>
                  </Stack>
                  <Stack direction="row" spacing={3} className="about_form_expertise">
                    <div className="about_infos_icon">
                      <PhoneIcon fontSize='2rem' />
                    </div>
                    <div>
                      <h5>Telephone:</h5>
                      <h6>6 99 99 99 99 </h6>
                    </div>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={5}>
                  <Stack direction="row" spacing={3} className="about_form_expertise">
                    <div className="about_infos_icon">
                      <PhoneIcon fontSize='2rem' />
                    </div>
                    <div>
                      <h5>Telephone:</h5>
                      <h6>6 99 99 99 99 </h6>
                    </div>
                  </Stack>
                  <Stack direction="row" spacing={3} className="about_form_expertise">
                    <div className="about_infos_icon">
                      <PhoneIcon fontSize='2rem' />
                    </div>
                    <div>
                      <h5>Telephone:</h5>
                      <h6>6 99 99 99 99 </h6>
                    </div>
                  </Stack>
                </Stack>
              </Stack>
            </div>
            <div>
              <h1>Mes Recommandations</h1>
              <div className='about_form_recommendations'>
                <Stack direction="row" spacing={5} >
                  {recommendations.map((recommendation, index) => (
                    <Stack key={index} direction="row" spacing={3} className="about_form_recomandations_item">
                      <CardMedia
                        component="img"
                        alt="profile picture"
                        src="my-avatar.png"
                        className='about_form_recomandations_item_avatar'
                        wi

                      />
                      <div>
                        <h5>{recommendation.name}</h5>
                        <h6>{recommendation.contact}</h6>
                        <p>{recommendation.relation}</p>
                      </div>
                    </Stack>
                  ))}
                </Stack>
              </div>
            </div>
            <div>
              <h1> Mes prix et distictions </h1>
            </div>
            <Stack direction="row" spacing={3} className="about_infos_row">
              <div className="about_infos_icon">
                <EmojiEventsIcon fontSize='2rem' />
              </div>
              <div className="about_form_awards ">
                <h5>Telephone:</h5>
                <h6>6 99 99 99 99 </h6>
              </div>
            </Stack>
            <Stack direction="row" spacing={3} className="about_infos_row">
              <div className="about_infos_icon">
                <EmojiEventsIcon fontSize='2rem' />
              </div>
              <div className="about_form_awards ">
                <h5>Telephone:</h5>
                <h6>6 99 99 99 99 </h6>
              </div>
            </Stack>
            <Stack direction="row" spacing={3} className="about_infos_row">
              <div className="about_infos_icon">
                <EmojiEventsIcon fontSize='2rem' />
              </div>
              <div className="about_form_awards ">
                <h5>Telephone:</h5>
                <h6>6 99 99 99 99 </h6>
              </div>
            </Stack>
            <Stack direction="row" spacing={3} className="about_infos_row">
              <div className="about_infos_icon">
                <EmojiEventsIcon fontSize='2rem' />
              </div>
              <div className="about_form_awards ">
                <h5>Telephone:</h5>
                <h6>6 99 99 99 99 </h6>
              </div>
            </Stack>
            <div>

            </div>
          </Stack>
        </div>
      </Stack>
    </div>

  );
}

export default About;
