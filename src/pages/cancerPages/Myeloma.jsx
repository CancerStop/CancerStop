import CancerPageTemplate from '../../templates/CancerPageTemplate';
import { CancerData } from '../../components/cancerPage/CancerData';

export default function Myeloma() {
    return (
        <CancerPageTemplate data={CancerData.myeloma} />
    );
}
