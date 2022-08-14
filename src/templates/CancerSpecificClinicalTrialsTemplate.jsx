import '../styles/pageStyles/ClinicalTrialsStyles.css';
import SubHeader from '../components/SubHeader';

function CancerSpecificClinicalTrialsTemplate(data) {
	return () => (
		<div className="cancerSpecificClinicalTrialsTemplate clinicalTrialsPage">
			<SubHeader text={`${data.name} - Clinical Trials`} />

			<iframe
				title="Clinical Trials"
				src={data.clinical_trials_link_ref}
				alt="Loading..."
			/>
		</div>
	);
}

export default CancerSpecificClinicalTrialsTemplate;
