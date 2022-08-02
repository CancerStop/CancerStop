import '../styles/templateStyles/CancerSpecificClinicalTrialsTemplateStyles.css';
import SubHeader from '../components/SubHeader';

function CancerSpecificClinicalTrialsTemplate(data) {
	return () => (
		<div className="cancerSpecificClinicalTrialsTemplate">
			<SubHeader text={`${data.name} - Clinical Trials`} />

			<iframe
				title="Clinical Trials"
				width="100%"
				height="1500"
				src={data.clinical_trials_link_ref}
				alt="Loading..."
				style={{
					marginTop: '20px',
					border: '2px solid black',
				}}
			/>
		</div>
	);
}

export default CancerSpecificClinicalTrialsTemplate;
