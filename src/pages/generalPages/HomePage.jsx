import SubHeader from '../../components/SubHeader';
import CancerMenu from '../../components/cancerMenu/CancerMenu';
import '../../style.css';

export default function HomePage() {
    return (
        <div className='homepage page'>
            <SubHeader text="A quick reference guide for different types of cancers" />
            <CancerMenu />
        </div>
    )
}
