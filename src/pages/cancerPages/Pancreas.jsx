import CancerPageTemplate from '../../components/cancerPage/CancerPageTemplate';
import { CancerData } from '../../components/cancerPage/CancerData';

export default function Pancreas() {
    return (
        <CancerPageTemplate data={CancerData.pancreas} />
    );
}
