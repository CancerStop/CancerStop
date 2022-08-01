import CancerPageTemplate from '../../templates/CancerPageTemplate';
import { CancerData } from '../../data/CancerData';

export default function Pancreas() {
    return (
        <CancerPageTemplate data={CancerData.pancreas} />
    );
}
