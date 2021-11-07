import { CancerData } from '../../../data/CancerData';
import CancerPageTemplate from '../../../templates/CancerPageTemplate';

export default function ChronicMyeloidLeukemia() {
    return (
        <CancerPageTemplate data={CancerData.chronic_myeloid_leukemia} />
    );
}
