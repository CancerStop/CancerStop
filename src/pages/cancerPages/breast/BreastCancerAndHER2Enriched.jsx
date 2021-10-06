import CancerPageTemplate from '../../../components/cancerPage/CancerPageTemplate.jsx';
import { CancerPageData } from '../../../components/cancerPage/CancerPageData.jsx';

export default function BreastCancerAndHER2Enriched() {
    return (
        <CancerPageTemplate data={CancerPageData.breast_cancer_and_HER2_enriched} />
    )
}
