import '../../style.css';
import CancerPageCard from './CancerPageCard';
import SubHeader from '../SubHeader';

export default function CancerPageTemplate({data}) {
    return (
        <div className='cancerPageTemplate'>
            <SubHeader text={data.name} />

            <div className='cancerPageTemplate_actionButtons'>
                <CancerPageCard
                    title='Approved Drugs'
                    link={data.approved_drugs_link}
                    isInternal={false}
                />

                <CancerPageCard
                    title='Clinical Trials'
                    link={data.clinical_trials_link}
                    isInternal={false}
                />

                <CancerPageCard
                    title='Genes & More'
                    link='/genes-and-more'
                    isInternal={true}
                />

                <CancerPageCard
                    title='Search'
                    link={data.search_link}
                    isInternal={false}
                />

                <CancerPageCard
                    title='Survival Curves'
                    link={data.survival_curves_link}
                    isInternal={false}
                />
            </div>
        </div>
    )
}
