import React from 'react';
import '../../style.css';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {
    Link
} from "react-router-dom";

export default function CancerPageCard({ title, link, isInternal }) {
    if (isInternal) {
        return (
            <Link
                style={{
                    textDecoration: 'none'
                }}
                to={link}
            >
                <Card className='cancerPageCard' variant='outlined'>
                    <CardContent>
                        <h3>{title}</h3>
                    </CardContent>
                </Card>
            </Link>
        )
    } else {
        return (
            <a
                style={{
                    textDecoration: 'none'
                }}
                href={link}
                target='_blank'
            >
                <Card className='cancerPageCard' variant='outlined'>
                    <CardContent>
                        <h3>{title}</h3>
                    </CardContent>
                </Card>
            </a>
        )
    }
}
