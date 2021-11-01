import CancerMenu from '../../components/cancerMenu/CancerMenu';
import SubHeader from '../../components/SubHeader';
import '../../style.css';
import {en_us} from "../../i18n/en_us.jsx";

const lang = en_us;//Note, the lang object should probably be passed as an argument to the function so it can be easily switched.
export default function HomePage() {
    return (
        <div className='homepage'>
            <SubHeader text={lang.homePage.header} />
            <CancerMenu />
        </div>
    )
}
