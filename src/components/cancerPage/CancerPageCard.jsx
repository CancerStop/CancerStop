import '../../style.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from "react-router-dom";

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
