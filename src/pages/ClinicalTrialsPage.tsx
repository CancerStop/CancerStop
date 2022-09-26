import SubHeader from '../components/SubHeader';
import '../styles/pageStyles/ClinicalTrialsStyles.css';

export default function ClinicalTrialsPage() {
	return (
		<div className="clinicalTrialsPage page">
			<SubHeader text="Clinical Trials" />

			<iframe
				title="Clinical Trials"
				src="https://www.clinicaltrials.gov/ct2/home"
				alt="Loading..."
			/>
		</div>
	);
}
