import CancerPageTemplate from '../../templates/CancerPageTemplate';
import { CancerData } from '../../components/cancerPage/CancerData';

export default function Ovaries() {
    return (
        <CancerPageTemplate data={CancerData.ovaries} />
    );
}
