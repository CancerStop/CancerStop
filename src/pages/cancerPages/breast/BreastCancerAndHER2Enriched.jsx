import CancerPageTemplate from '../../../templates/CancerPageTemplate';
import { CancerData } from '../../../data/CancerData';

export default function BreastCancerAndHER2Enriched() {
    return (
        <CancerPageTemplate data={CancerData.breast_cancer_and_HER2_enriched} />
    )
}
