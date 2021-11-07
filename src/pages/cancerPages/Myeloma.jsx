import CancerPageTemplate from '../../templates/CancerPageTemplate';
import { CancerData } from '../../data/CancerData';

export default function Myeloma() {
    return (
        <CancerPageTemplate data={CancerData.myeloma} />
    );
}
