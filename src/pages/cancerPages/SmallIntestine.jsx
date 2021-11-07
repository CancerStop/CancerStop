import CancerPageTemplate from '../../templates/CancerPageTemplate';
import { CancerData } from '../../components/cancerPage/CancerData';

export default function SmallIntestine() {
    return (
        <CancerPageTemplate data={CancerData.small_intestine} />
    );
}
