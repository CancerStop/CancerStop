import '../styles/pageStyles/ClinicalTrialsStyles.css';
import SubHeader from '../components/SubHeader';
import { CancerData } from '../data/CancerData';

function CancerSpecificClinicalTrialsTemplate(data:CancerData) {
	return () => (
		<div className="cancerSpecificClinicalTrialsTemplate clinicalTrialsPage">
			<SubHeader text={`${data.name} - Clinical Trials`} />

			<iframe
				title="Clinical Trials"
				src={data.clinical_trials_link}
				placeholder="Loading..."
			/>
		</div>
	);
}

export default CancerSpecificClinicalTrialsTemplate;
