import SubHeader from '../components/SubHeader';
import '../styles/pageStyles/ClinicalTrialsStyles.css';
import { StudiesResponse, findStudies } from '../util/api';
import { useState } from 'react';
import { Table, TableContainer, TableRow, Button, TableBody, TableHead, TableCell } from '@material-ui/core';


export default function ClinicalTrialsPage() {
	const [response, setResponse] = useState<StudiesResponse | null>(null);
	const [searchExpr, setSearchExpr] = useState("");
	const resultsPerPage = 20;
	const [page, setPage] = useState(1);
	const fetchData = () => {
		findStudies(searchExpr, (page - 1) * resultsPerPage + 1, page * resultsPerPage).then(setResponse);
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
					id="searchInput"
				/>
				<span id="pageSelector">
					Page <input value={page} type="number" onChange={e => setPage(+ e.target.value)} className="numberInput"/> of {Math.ceil((response?.totalStudiesAvailable ?? 1) / resultsPerPage)}
				</span>
				<Button onClick={fetchData} variant="contained" id="searchButton">Search</Button>
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
						{response && response.studies.map(s =>
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
