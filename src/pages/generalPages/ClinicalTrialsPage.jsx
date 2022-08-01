import SubHeader from '../../components/SubHeader';

export default function ClinicalTrialsPage() {
	return (
		<div className="clinicalTrialsPage page">
			<SubHeader text="Clinical Trials" />

			<iframe
				title="Clinical Trials"
				width="100%"
				height="1500"
				src="https://www.clinicaltrials.gov/ct2/home"
				alt="Loading..."
				style={{
					marginTop: '20px',
					border: '2px solid black',
				}}
			/>
		</div>
	);
}
