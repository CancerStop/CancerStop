import CancerPageTemplate from '../../templates/CancerPageTemplate';
import { CancerData } from '../../data/CancerData';

export default function Ovaries() {
    return (
        <CancerPageTemplate data={CancerData.ovaries} />
    );
}
