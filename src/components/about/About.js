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
import { Card, Divider } from '@mui/material';
import { CardMedia } from "@mui/material";
import { Stack } from "@mui/material";
import './about.css';

const recommendations = [
  {
    name: 'Michel Dupont',
    date: '12/12/2021',
    relation: 'Collègue de travail',
    message: 'Steve est un excellent ingénieur logiciel qui a une grande passion pour le développement web. Il est très compétent et a une grande capacité à résoudre des problèmes complexes. Je le recommande vivement pour tout projet de développement web.',
    image: 'avatar-1.png'
  },
  {
    name: 'franck Martin',
    date: '12/12/2021',
    relation: 'Supérieur hiérarchique',
    message: 'Steve est un excellent ingénieur logiciel qui a une grande passion pour le développement web. Il est très compétent et a une grande capacité à résoudre des problèmes complexes. Je le recommande vivement pour tout projet de développement web.',
    image: 'avatar-2.png'
  },
  {
    name: 'alice Margot',
    date: '12/12/2021',
    relation: 'Mentor',
    message: 'Steve est un excellent ingénieur logiciel qui a une grande passion pour le développement web. Il est très compétent et a une grande capacité à résoudre des problèmes complexes. Je le recommande vivement pour tout projet de développement web.',
    image: 'avatar-3.png'
  },
  {
    name: 'Olivier Dupuis',
    date: '12/12/2021',
    relation: 'Client',
    message: 'Steve est un excellent ingénieur logiciel qui a une grande passion pour le développement web. Il est très compétent et a une grande capacité à résoudre des problèmes complexes. Je le recommande vivement pour tout projet de développement web.',
    image: 'avatar-4.png'

  },
  {
    name: 'Ferdinand Lenoir',
    date: '12/12/2021',
    relation: 'Ancien collègue',
    message: 'Steve est un excellent ingénieur logiciel qui a une grande passion pour le développement web. Il est très compétent et a une grande capacité à résoudre des problèmes complexes. Je le recommande vivement pour tout projet de développement web.',
    image: 'my-avatar.png'
  },
];
const description = "Étudiant en ingénierie logicielle avec une passion pour l'innovation, je me spécialise dans le développement front-end (React, Angular), back-end (Node.js, PHP, Java) et mobile (Flutter, React Native). Mon expertise en DevOps, incluant AWS, Google Cloud, et Docker, complète mes compétences. Enthousiaste par la cybersécurité, l'administration système, et l'intelligence artificielle, je manie également les technologies Big Data (Hadoop, Spark, Tableau, Talend). Actuellement, je perfectionne mes compétences avec Elasticsearch, Kibana, Logstash, et PfSense. Toujours avide de nouveaux défis, je suis déterminé à utiliser mes compétences pour résoudre des problèmes complexes et explorer les dernières innovations technologiques.";
// Fonction pour tronquer le message
const truncateMessage = (message, wordLimit) => {
  const words = message.split(' ');
  if (words.length <= wordLimit) return message;
  return `${words.slice(0, wordLimit).join(' ')}...`;
};

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
                <InfoIcon fontSize='large' color='#FFBC5E' />
                <h1> A propos de moi</h1>
              </Stack>
              <Divider sx={{ width: '6%', backgroundColor: "#FFBC5E", height: '4px', borderRadius: '5px' }} />
            </div>
            <div className='about_description_container'>
              <p className='about_description'>
                {description}
              </p>
            </div>
            <div>
              <h1> Mon Expertise</h1>
              <Stack direction="column" spacing={2}>
                <Stack direction="row" spacing={5}>
                  <Stack direction="row" spacing={3} className="about_form_expertise">
                    <div>
                      <CardMedia
                        component="img"
                        alt="profile picture"
                        src="icon-design.svg"
                        sx={{ width: 50, height: 50 }}
                      />
                    </div>
                    <div>
                      <h5>Web design </h5>
                      <h6>The most modern and high-quality design made at a professional level.  </h6>
                    </div>
                  </Stack>
                  <Stack direction="row" spacing={3} className="about_form_expertise">
                    <div>
                      <CardMedia
                        component="img"
                        alt="profile picture"
                        src="icon-dev.svg"
                        sx={{ width: 50, height: 50 }}
                      />
                    </div>
                    <div>
                      <h5>Web development </h5>
                      <h6>The most modern and high-quality design made at a professional level.  </h6>
                    </div>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={5}>
                  <Stack direction="row" spacing={3} className="about_form_expertise">
                    <div>
                      <CardMedia
                        component="img"
                        alt="profile picture"
                        src="icon-app.svg"
                        sx={{ width: 50, height: 50 }}
                      />
                    </div>
                    <div>
                      <h5>Mobile apps development </h5>
                      <h6>The most modern and high-quality design made at a professional level.  </h6>
                    </div>
                  </Stack>
                  <Stack direction="row" spacing={3} className="about_form_expertise">
                    <div>
                      <CardMedia
                        component="img"
                        alt="profile picture"
                        src="icon-photo.svg"
                        sx={{ width: 50, height: 50 }}
                      />
                    </div>
                    <div>
                      <h5> Cloud computing </h5>
                      <h6>The most modern and high-quality design made at a professional level.  </h6>
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
                        src={recommendation.image}
                        className='about_form_recomandations_item_avatar'

                      />
                      <div >
                        <h3>{recommendation.name}</h3>
                        <h6>{truncateMessage(recommendation.message, 25)}</h6>
                      </div>
                    </Stack>
                  ))}
                </Stack>
              </div>
            </div>
            <div>
              <h1> Mes prix et distictions </h1>
            </div>
            
            <div>
            </div>
          </Stack>
        </div>
      </Stack>
    </div>

  );
}

export default About;
