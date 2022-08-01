import CancerPageTemplate from '../../templates/CancerPageTemplate';
import { CancerData } from '../../data/CancerData';

export default function Prostate() {
    return (
        <CancerPageTemplate data={CancerData.prostate} />
    );
}
