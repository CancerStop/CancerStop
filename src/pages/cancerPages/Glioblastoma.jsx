import { CancerData } from '../../components/cancerPage/CancerData';
import CancerPageTemplate from '../../components/cancerPage/CancerPageTemplate';

export default function Glioblastoma() {
    return (
        <CancerPageTemplate data={CancerData.glioblastoma} />
    );
}
