import '../styles/pageStyles/ClinicalTrialsStyles.css';
import SubHeader from '../components/SubHeader';
import { CancerData } from '../data/CancerData';
import { CTStudy, findStudies } from '../util/api';
import { useState } from 'react';
import { Table, TableContainer, TableRow, Button, TableBody, TableHead, TableCell } from '@material-ui/core';

function CancerSpecificClinicalTrialsTemplate(data:CancerData) {
	const [studies, setStudies] = useState<CTStudy[]>([]);
	const [searchExpr, setSearchExpr] = useState("");
	const resultsPerPage = 20;
	const [page, setPage] = useState(1);
	const fetchData = () => {
		findStudies(searchExpr, (page - 1) * resultsPerPage + 1, page * resultsPerPage).then(d => setStudies(d.studies));
		console.log("Fetched data!");
	}
	console.log("Component re-rendered!");
	return () => (
		<div className="cancerSpecificClinicalTrialsTemplate clinicalTrialsPage">
			<SubHeader text={`${data.name} - Clinical Trials`} />
			<input
				placeholder="Search Expression"
				value={searchExpr}
				onChange={(e) => setSearchExpr(e.target.value)}
			/>
			<Button onClick={fetchData}>Search</Button>
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
