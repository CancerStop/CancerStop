import CancerMenu from '../../components/cancerMenu/CancerMenu';
import SubHeader from '../../components/SubHeader';

export default function HomePage() {
    return (
        <div className='homepage'>
            <SubHeader text='A quick reference guide to different types of cancers' />
            <CancerMenu />
        </div>
    )
}
