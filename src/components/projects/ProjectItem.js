import { Stack, Typography } from "@mui/material";
import React from "react";
import { CardMedia } from "@mui/material";
import projectListdata from "../../data/projectListdata";
import "./projectItem.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { PieChart } from '@mui/x-charts';
import { Gauge } from '@mui/x-charts';


function ProjectItem() {
    return (
        <div>
            {projectListdata.map((project) => (
                <Stack
                    direction="row"
                    spacing={2}
                    key={project.id}
                    className="project-item-container">

                    <Stack direction="column" spacing={3} className="project-item-text">
                        <div className="project-item-title">
                            <Typography
                                variant="h4"
                                fontFamily={"times new roman"}
                                mb={1}
                            >
                                {project.title}
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                fontFamily={"times new roman"}
                                fontSize={20}
                            >
                                {project.category}
                            </Typography>
                        </div>
                        <Stack direction="row" spacing={2} className="project-item-skills">
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
                                    width={350}
                                    height={130}
                                />

                            </div>
                            <div>
                            <Gauge width={110} height={160} value={90}  color="#fff" />

                            </div>
                        </Stack>

                            <p className="project-item-description">
                                {project.description}
                            </p>

                        </Stack>
                        <Stack direction="column" spacing={2} className="project-item-image">

                            <CardMedia
                                component="img"
                                src={project.image}
                                alt="random"
                                className="project-item-image"
                            />
                            <Stack direction='row' spacing={4}>
                                <div>
                                    <LinkedInIcon
                                        onClick={() => window.open('https://www.linkedin.com/in/steve-darius-nde-noumi-0b8b8b1b0/')}
                                        className="projectitem-icone "
                                    />
                                </div>
                                <div>
                                    <FacebookIcon
                                        onClick={() => window.open('https://www.facebook.com/steve.darius.7')}
                                        className="projectitem-icone "
                                    />
                                </div>
                                <div>
                                    <TwitterIcon
                                        onClick={() => window.open('https://twitter.com/SteveDariusNde1')}
                                        className="projectitem-icone "
                                    />
                                </div>
                                <div>
                                    <GitHubIcon
                                        onClick={() => window.open('https://guithub.com/stevenoumi')}
                                        className="projectitem-icone "
                                    />
                                </div>
                            </Stack>

                        </Stack>
                    </Stack>
            ))}
                </div >
            );
}
            export default ProjectItem;