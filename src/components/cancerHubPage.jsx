import React from 'react';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import '../style.css';
import CancerCardsWithExternalLinks from './cancerRedirectCards/cancerCardsWithExternalLinks';
import CancerCardsWithInternalLinks from './cancerRedirectCards/cancerCardsWithInternalLinks';

export default function CancerHubPage({
    cancerTitle,
    cancerName,
    approvedDrugsLink,
    clinicalTrialsLink,
    survivalCurvesLink,
    searchLink
}) {
    return (
        <div cancerHubPage>
            <h1 className="cancerHubPage_cancerHeading">{cancerTitle}</h1>

            <div className="cancerHubPage_actionButtons">
                <CancerCardsWithExternalLinks
                    title="Approved Drugs"
                    name={cancerName}
                    message="Get to know about the approved drugs for"
                    link={approvedDrugsLink}
                />

                <CancerCardsWithExternalLinks
                    title="Clinical Trials"
                    name={cancerName}
                    message="Get to know about current clinical trials conducted for"
                    link={clinicalTrialsLink}
                />

                <CancerCardsWithInternalLinks
                    title="Genes & More"
                    name={cancerName}
                    message="Understand more about different genes and their variants for"
                    link="/genesAndMoreForm"
                />

                <Card className="cancerHubPage_actionButton" variant="outlined">
                    <CardContent>
                        <Typography color="black" gutterBottom variant="h5" component="h2">
                            Search
                        </Typography>
                        <Typography variant="subtitle2">
                            Know more about {cancerName} using our curated
                            search engine
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button disableElevation size="small">
                            <a
                                href={searchLink}
                                className="cancerHubPage_actionButton-route"
                                target="_blank"
                            >
                                <p className="cancerHubPage_actionButton-route">
                                    Go to Search
                                </p>
                            </a>
                        </Button>
                    </CardActions>
                </Card>

                <CancerCardsWithExternalLinks
                    title="Survival Curves"
                    name={cancerName}
                    message="Take a look at the survival curves for"
                    link={survivalCurvesLink}
                />
            </div>
        </div>
    );
}