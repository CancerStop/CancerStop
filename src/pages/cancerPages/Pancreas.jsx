import React from 'react';
import CancerPageTemplate from '../../components/cancerPage/CancerPageTemplate.jsx';

export default function Pancreas() {
    return (
        <CancerPageTemplate
            name="Pancreas"
            approvedDrugsLink="https://www.cancer.gov/about-cancer/treatment/drugs/pancreatic"
            clinicalTrialsLink="https://www.clinicaltrials.gov/ct2/results?cond=Pancreas&term=&type=&rslt=&recrs=b&recrs=a&recrs=f&recrs=e&recrs=c&age_v=&gndr=&intr=&titles=&outc=&spons=&lead=&id=&cntry=&state=&city=&dist=&locn=&rsub=&strd_s=&strd_e=&prcd_s=&prcd_e=&sfpd_s=&sfpd_e=&rfpd_s=&rfpd_e=&lupd_s=&lupd_e=&sort="
            survivalCurvesLink="https://seer.cancer.gov/explorer/application.html?site=40&data_type=4&graph_type=6&compareBy=age_range&chk_age_range_16=16&chk_age_range_62=62&chk_age_range_122=122&chk_age_range_160=160&chk_age_range_166=166&sex=1&race=1&stage=101&advopt_precision=1&advopt_show_ci=on&advopt_display=2#label_graphArea"
            searchLink="https://cse.google.com/cse?cx=005505425243181267405:xmmlkfi5txg&q=Pancreas"
        />
    );
}
