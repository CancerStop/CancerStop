import CancerPageTemplate from '../../templates/CancerPageTemplate';
import { CancerData } from '../../data/CancerData';

export default function Stomach() {
    return (
        <CancerPageTemplate data={CancerData.stomach} />
    );
}
