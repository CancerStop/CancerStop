import { CancerPageData } from '../../components/cancerPage/CancerPageData';
import CancerPageTemplate from '../../components/cancerPage/CancerPageTemplate';

export default function Glioblastoma() {
    return (
        <CancerPageTemplate data={CancerPageData.glioblastoma} />
    );
}
