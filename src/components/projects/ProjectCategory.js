import { CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import projectCategoryData from "../../data/projectcategorydata";
import "./projectcategory.css";

function ProjectCategory() {
    return (
        <div>
            <Stack direction="row" spacing={5} className="project-category-container">

                {projectCategoryData.map((category) => (

                    <Stack
                        key={category.id}
                        direction="column"
                        spacing={2}
                        className="project-category">
                        <CardMedia
                            component="img"
                            alt="Project Image"
                            src={category.image}
                            className="project-category-image"
                        />


                        <Typography
                            variant="h5"
                            className="project-category-title"
                        >
                            {category.title}
                        </Typography>
                        <Typography variant="body1" >
                            {/* {category.description} */}
                        </Typography>
                        <Link to={`/details`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <Button variant="contained" color="primary" >
                                Voir les projets
                            </Button>
                        </Link>

                    </Stack>
                ))}
            </Stack>

        </div>
    );
}

export default ProjectCategory;