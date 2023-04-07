import SubHeader from '../components/SubHeader';
import '../styles/pageStyles/ClinicalTrialsStyles.css';
import { CTStudy, findStudies } from '../util/api';
import { useState } from 'react';
import { Table, TableContainer, TableRow, Button, TableBody, TableHead, TableCell } from '@material-ui/core';


export default function ClinicalTrialsPage() {
	const [studies, setStudies] = useState<CTStudy[]>([]);
	const [searchExpr, setSearchExpr] = useState("");
	const resultsPerPage = 20;
	const [page, setPage] = useState(1);
	const fetchData = () => {
		findStudies(searchExpr, (page - 1) * resultsPerPage + 1, page * resultsPerPage).then(setStudies);
		console.log("Fetched data!");
	}
	console.log("Component re-rendered!");
	return (
		<div className="cancerSpecificClinicalTrialsTemplate clinicalTrialsPage">
			<SubHeader text="Clinical Trials" />
			<span className="searchBar">
				<input
					placeholder="Search Expression"
					value={searchExpr}
					onChange={(e) => setSearchExpr(e.target.value)}
				/>
				<Button onClick={fetchData} variant="contained">Search</Button>
			</span>
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
