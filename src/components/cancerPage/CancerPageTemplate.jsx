import '../../style.css';
import CancerPageCard from './CancerPageCard';
import SubHeader from '../SubHeader';
import approvedDrugsImage from './cancerPageCardImages/approvedDrugsImage.jpg';
import clinicalTrialsImage from './cancerPageCardImages/clinicalTrialsImage.jpg';
import genesAndMoreImage from './cancerPageCardImages/genesAndMoreImage.jpg';
import searchImage from './cancerPageCardImages/searchImage.jpg';
import survivalCurvesImage from './cancerPageCardImages/survivalCurvesImage.jpg';

export default function CancerPageTemplate({data}) {
    return (
        <div className='cancerPageTemplate'>
            <SubHeader text={data.name} />

            <div className='cancerPageTemplate_actionButtons'>
                <CancerPageCard
                    title='Approved Drugs'
                    link={data.approved_drugs_link}
                    isInternal={false}
                    imagePath={approvedDrugsImage}
                />

                <CancerPageCard
                    title='Clinical Trials'
                    link={data.clinical_trials_link}
                    isInternal={false}
                    imagePath={clinicalTrialsImage}
                />

                <CancerPageCard
                    title='Genes & More'
                    link='/genes-and-more'
                    isInternal={true}
                    imagePath={genesAndMoreImage}
                />

                <CancerPageCard
                    title='Search'
                    link={data.search_link}
                    isInternal={false}
                    imagePath={searchImage}
                />

                <CancerPageCard
                    title='Survival Curves'
                    link={data.survival_curves_link}
                    isInternal={false}
                    imagePath={survivalCurvesImage}
                />
            </div>
        </div>
    )
}
