import { Button, Divider, Stack } from '@mui/material';
import { TextField } from '@mui/material';
import React from 'react';
import { CardMedia } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import './contact.css';

function Contact() {
    return (
        <div className="contact_container">
            <Stack spacing={2} direction="row" className="contact_stack_container">
                <div className="contact_left">
                    <Stack direction="column" className="contact_infos_container">
                        <CardMedia
                            component="img"
                            alt="profile picture"
                            src="profile.png"
                            className='contact_profile_picture'
                        />
                        <div>
                            <h2> Steve Darius NOUMI</h2>
                            <div className='contact_infos_title'>
                                <h4>Etudiant ingenieur</h4>
                            </div>
                        </div>

                        <Divider className='contact_divider' />
                        < Stack direction="column" spacing={2}>
                            <Stack direction="row" spacing={3} className="contact_infos_row">
                                <div className="contact_infos_icon">
                                    <EmailIcon fontSize='2rem' />
                                </div>
                                <div>
                                    <h5>Email:</h5>
                                    <h6> adress@yahoo.com </h6>
                                </div>
                            </Stack>
                            <Stack direction="row" spacing={3} className="contact_infos_row">
                                <div className="contact_infos_icon">
                                    <PhoneIcon fontSize='2rem' />
                                </div>
                                <div>
                                    <h5>Telephone:</h5>
                                    <h6>6 99 99 99 99 </h6>
                                </div>
                            </Stack>
                            <Stack direction="row" spacing={3} className="contact_infos_row">
                                <div className="contact_infos_icon">
                                    <CalendarMonthIcon fontSize='2rem' />
                                </div>
                                <div>
                                    <h5>Date de naissance:</h5>
                                    <h6>30 Octobre 2003</h6>
                                </div>
                            </Stack>
                            <Stack direction="row" spacing={3} className="contact_infos_row">
                                <div className="contact_infos_icon">
                                    <LocationOnIcon fontSize='2rem' />
                                </div>
                                <div>
                                    <h5> Adresse :</h5>
                                    <h6> Nantes, France </h6>
                                </div>
                            </Stack>
                            <Stack direction="row" spacing={3} className="contact_infos_row_icon">
                                <GitHubIcon fontSize='small' />
                                <LinkedInIcon fontSize='small' />
                                <FacebookIcon fontSize='small' />
                                <TwitterIcon fontSize='small' />
                            </Stack>
                        </Stack>
                    </Stack>
                </div>
                <div className="contact_right">
                    <Stack direction="column" className="contact_form_container" spacing={2}>
                        <div className="contact_map">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2705.661468177012!2d-1.553282684398829!3d47.21837157915989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805e4f9c1d3d4e5%3A0x3f1e4b6b3e3e7d1d!2sNantes!5e0!3m2!1sfr!2sfr!4v1634761591407!5m2!1sfr!2sfr" width="99%" height="96%" style={{ border: 0 }} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                        <div>
                            <Stack direction="row" spacing={2} className="contact_form_title">
                                <h2> Besoin de me contacter ?</h2>
                                <h7> N'hesitez pas à me laisser un message</h7>
                            </Stack>
                        </div>
                        <div>
                            <Stack direction="column" spacing={3} className="contact_form">
                                <Stack direction="row" spacing={3} className="contact_form_input">
                                    <TextField id="outlined-basic" label="Nom" variant="outlined" size='small' sx={{ width: '49%' }} />
                                    <TextField id="outlined-basic" label="Prenom" variant="outlined" size='small' sx={{ width: '49%' }} />
                                </Stack>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Message"
                                    multiline
                                    rows={2}
                                    variant="outlined"
                                    className="contact_form_input"

                                />
                                <div className="contact_form_button_container">
                                <Button variant="contained" className='contact_form_button'>
                                    Envoyer votre message
                                </Button>
                                </div>

                            </Stack>
                        </div>
                    </Stack>
                </div>
            </Stack>
        </div>
       
    );
}

export default Contact;