import React from 'react';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import '../../style.css';

export default function CancerCardsWithExternalLinks({ title, name, message, link }) {
    return (
        <Card className="cancerHubPage_actionButton" variant="outlined">
            <CardContent>
                <Typography color="black" gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="subtitle2">
                    {message} {name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button disableElevation size="small">
                    <a
                        href={link}
                        target="_blank"
                        className="cancerHubPage_actionButton-route"
                    >
                        <p className="cancerHubPage_actionButton-route">
                            Go to {title}
                        </p>
                    </a>
                </Button>
            </CardActions>
        </Card>
    );
}
