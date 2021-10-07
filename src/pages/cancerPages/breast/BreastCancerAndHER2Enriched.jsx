import CancerPageTemplate from '../../../components/cancerPage/CancerPageTemplate';
import { CancerPageData } from '../../../components/cancerPage/CancerPageData';

export default function BreastCancerAndHER2Enriched() {
    return (
        <CancerPageTemplate data={CancerPageData.breast_cancer_and_HER2_enriched} />
    )
}
