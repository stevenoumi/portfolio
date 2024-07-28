import react from 'react';
import { Stack, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
    return (
     <Stack direction="row" spacing={2}>
        <Stack direction="column" spacing={2} className="contact-item">
            <Typography variant="h6" gutterBottom>
                Contact
            </Typography>
            <Typography variant="body2" gutterBottom>
                <Link href="mailto: [email protected]">[email protected]</Link>
            </Typography>
            <Typography variant="body2" gutterBottom>
                <Link href="tel:123-456-7890">123-456-7890</Link>
            </Typography>
            
        </Stack>
        <Stack direction="column" spacing={2} className="contact-item">
            <Typography variant="h6" gutterBottom>
                Social
            </Typography>
            <Link href="https://www.linkedin.com/in/username" target="_blank" rel="noreferrer">
                <LinkedInIcon fontSize="small" />
            </Link>
        </Stack>
     </Stack>
    )
}

export default Contact;