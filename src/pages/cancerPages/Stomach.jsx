import CancerPageTemplate from '../../templates/CancerPageTemplate';
import { CancerData } from '../../components/cancerPage/CancerData';

export default function Stomach() {
    return (
        <CancerPageTemplate data={CancerData.stomach} />
    );
}
