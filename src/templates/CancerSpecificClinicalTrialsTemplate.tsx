import '../styles/pageStyles/ClinicalTrialsStyles.css';
import SubHeader from '../components/SubHeader';
import { CancerData } from '../data/CancerData';
import { CTStudy, findStudies } from '../util/api';
import { useState } from 'react';
import { Table, TableContainer, TableRow, Button, TableBody, TableHead, TableCell } from '@material-ui/core';

function CancerSpecificClinicalTrialsTemplate(data:CancerData) {
	const [studies, setStudies] = useState<CTStudy[]>([]);


	const fetchData = () => {
		findStudies(data.clinical_trials_name).then(setStudies);
		console.log("Fetched data!");
	}
	return () => (
		<div className="cancerSpecificClinicalTrialsTemplate clinicalTrialsPage">
			<SubHeader text={`${data.name} - Clinical Trials`} />
			<Button onClick={fetchData}>Fetch Data</Button>
			<TableContainer>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Title</TableCell>
							<TableCell>Condition</TableCell>
							<TableCell>Status</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{studies.map(s =>
								<TableRow key={s.id} >
									<TableCell>{s.id}</TableCell>
									<TableCell>
										<a href={s.url} target="_blank" rel="noreferrer">{s.title}</a>
									</TableCell>
									<TableCell>{s.condition}</TableCell>
									<TableCell>{s.status}</TableCell>
								</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}

export default CancerSpecificClinicalTrialsTemplate;
