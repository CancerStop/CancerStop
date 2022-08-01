import CancerMenu from '../../components/cancerMenu/CancerMenu';
import SubHeader from '../../components/SubHeader';

export default function HomePage() {
    return (
        <div className='homepage'>
            <SubHeader text='A quick reference guide to different types of cancers' />
            <div style={{textAlign: "center", color: "gray", marginTop: "5px"}}>
                From therapies to genomics
                - See what the public databases and resources say
            </div>
            <CancerMenu />
        </div>
    )
}
