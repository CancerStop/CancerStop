import React from 'react';
import '../../style.css';
import CancerPageCard from './CancerPageCard.jsx';
import SubHeader from '../SubHeader.jsx';

export default function CancerPageTemplate({
    name,
    approvedDrugsLink,
    clinicalTrialsLink,
    survivalCurvesLink,
    searchLink
}) {
    return (
        <div className='cancerPageTemplate'>
            <SubHeader text={name} />

            <div className='cancerPageTemplate_actionButtons'>
                <CancerPageCard
                    title='Approved Drugs'
                    link={approvedDrugsLink}
                    isInternal={false}
                />

                <CancerPageCard
                    title='Clinical Trials'
                    link={clinicalTrialsLink}
                    isInternal={false}
                />

                <CancerPageCard
                    title='Genes & More'
                    link='/genes-and-more'
                    isInternal={true}
                />

                <CancerPageCard
                    title='Search'
                    link={searchLink}
                    isInternal={false}
                />

                <CancerPageCard
                    title='Survival Curves'
                    link={survivalCurvesLink}
                    isInternal={false}
                />
            </div>
        </div>
    )
}
