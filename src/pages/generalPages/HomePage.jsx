import CancerMenu from '../../components/cancerMenu/CancerMenu';
import SubHeader from '../../components/SubHeader';
import '../../style.css';

export default function HomePage() {
    return (
        <div className='homepage'>
            <SubHeader text="A quick reference guide for different types of cancers" />
            <CancerMenu />
        </div>
    )
}
