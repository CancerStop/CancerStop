import CancerPageTemplate from '../../../templates/CancerPageTemplate';
import { CancerData } from '../../../components/cancerPage/CancerData';

export default function BreastCancerAndHER2Enriched() {
    return (
        <CancerPageTemplate data={CancerData.breast_cancer_and_HER2_enriched} />
    )
}
