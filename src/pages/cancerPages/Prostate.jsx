import CancerPageTemplate from '../../templates/CancerPageTemplate';
import { CancerData } from '../../components/cancerPage/CancerData';

export default function Prostate() {
    return (
        <CancerPageTemplate data={CancerData.prostate} />
    );
}
