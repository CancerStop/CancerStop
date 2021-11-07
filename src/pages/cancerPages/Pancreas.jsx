import CancerPageTemplate from '../../templates/CancerPageTemplate';
import { CancerData } from '../../components/cancerPage/CancerData';

export default function Pancreas() {
    return (
        <CancerPageTemplate data={CancerData.pancreas} />
    );
}
