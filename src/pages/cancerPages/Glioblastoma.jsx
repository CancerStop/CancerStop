import CancerPageTemplate from '../../templates/CancerPageTemplate';
import { CancerData } from '../../components/cancerPage/CancerData';

export default function Glioblastoma() {
    return (
        <CancerPageTemplate data={CancerData.glioblastoma} />
    );
}
