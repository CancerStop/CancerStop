import '../styles/templateStyles/CancerPageTemplateStyles.css';
import CancerPageCard from '../components/CancerPageCard';
import SubHeader from '../components/SubHeader';
import approvedDrugsImage from '../images/cancerPageCardImages/approvedDrugsImage.jpg';
import clinicalTrialsImage from '../images/cancerPageCardImages/clinicalTrialsImage.jpg';
import genesAndMoreImage from '../images/cancerPageCardImages/genesAndMoreImage.jpg';
import searchImage from '../images/cancerPageCardImages/searchImage.jpg';
import survivalCurvesImage from '../images/cancerPageCardImages/survivalCurvesImage.jpg';
import { CancerData } from '../data/CancerData';

export default function CancerPageTemplate(data:CancerData) {
	return () => (
		<div className="cancerPageTemplate">
			<SubHeader text={data.name} />
			<div className="cancerDescription">
				{data.description} <a href={data.information_link} target='_blank' rel="noreferrer">Learn more</a>
			</div>
			<div className="cancerPageTemplate_actionButtons">
				<CancerPageCard
					title="Approved Drugs"
					link={data.approved_drugs_link}
					isInternal={false}
					imagePath={approvedDrugsImage}
				/>

				<CancerPageCard
					title="Clinical Trials"
					link={`/${data.url}/clinical-trials`}
					isInternal={true}
					imagePath={clinicalTrialsImage}
				/>

				<CancerPageCard
					title="Genes & More"
					link="/genes-and-more"
					isInternal={true}
					imagePath={genesAndMoreImage}
				/>

				<CancerPageCard
					title="Search"
					link={data.search_link}
					isInternal={true}
					imagePath={searchImage}
				/>

				<CancerPageCard
					title="Survival Curves"
					link={data.survival_curves_link}
					isInternal={false}
					imagePath={survivalCurvesImage}
				/>
			</div>
		</div>
	);
}
