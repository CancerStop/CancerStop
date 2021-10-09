import CancerPageTemplate from '../../components/cancerPage/CancerPageTemplate';
import { CancerData } from '../../components/cancerPage/CancerData';

export default function Prostate() {
    return (
        <CancerPageTemplate data={CancerData.prostate} />
    );
}
