import '../styles/componentStyles/CancerPageCardStyles.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Link } from "react-router-dom";

export default function CancerPageCard({ title, link, isInternal, imagePath }: {title:string, link:string, isInternal:boolean, imagePath:string}) {
    const card = (
        <Card sx={{maxWidth: 290}} className='cancerPageCard' variant='outlined'>
            <CardMedia
                component='img'
                height='140'
                image={imagePath}
            />

            <CardContent>
                <h3>{title}</h3>
            </CardContent>
        </Card>
    );
    if (isInternal) {
        return (
            <Link
                style={{
                    textDecoration: 'none'
                }}
                to={link}
            >
                {card}
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
                rel="noreferrer"
            >
                {card}
            </a>
        )
    }
}
