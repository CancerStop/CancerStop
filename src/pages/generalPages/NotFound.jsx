import '../../style.css';
import SubHeader from '../../components/SubHeader';

export default function NotFoundPage() {
    return (
        <div className='notfound page'>
            <center>
                <SubHeader text="404 Not Found" />
                <a href="/">Return to the home page</a>
            </center>
        </div>
    )
}
