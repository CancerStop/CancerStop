import CancerPageTemplate from '../../templates/CancerPageTemplate';
import { CancerData } from '../../data/CancerData';

export default function Glioblastoma() {
    return (
        <CancerPageTemplate data={CancerData.glioblastoma} />
    );
}
