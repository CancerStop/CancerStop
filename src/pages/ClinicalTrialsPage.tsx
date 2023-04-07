import SubHeader from '../components/SubHeader';
import '../styles/pageStyles/ClinicalTrialsStyles.css';
import { StudiesResponse, findStudies } from '../util/api';
import { useState, ChangeEvent, useEffect } from 'react';
import { Table, TableContainer, TableRow, Button, TableBody, TableHead, TableCell } from '@material-ui/core';


export default function ClinicalTrialsPage() {
	const resultsPerPage = 20;

	const [response, setResponse] = useState<StudiesResponse | null>(null);
	const [searchExpr, setSearchExpr] = useState<string>(window.location.search.match(/cond=([^&]+)/)?.[1]!.split("+").join(" ") ?? "");
	const [page, setPage] = useState(1);
	const [locked, setLocked] = useState(false);

	const fetchData = (p = page) => findStudies(searchExpr, (p - 1) * resultsPerPage + 1, p * resultsPerPage);
	const numberInputUpdated = (e:ChangeEvent<HTMLInputElement>) => {
		const val = + e.target.value;
		const maxPage = Math.ceil((response?.totalStudiesAvailable ?? 1) / resultsPerPage);
		if(isNaN(val) || val <= 0){
			e.target.value = "1";
			setPage(1);
		} else if(val > maxPage){
			e.target.value = maxPage.toString();
			setPage(maxPage);
		} else {
			setPage(val);
		}
	};
	const search = async () => {
		setLocked(true);
		const data = await fetchData();
		if(page > Math.ceil(data.totalStudiesAvailable / resultsPerPage) && data.studies.length === 0){
			//If no studies were returned and page is more than the new max page, refetch
			setPage(1);
			setResponse(await fetchData(1));
			setLocked(false);
		} else {
			setResponse(data);
			setLocked(false);
		}
	}

	useEffect(() => {
		if(searchExpr !== "") search();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

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
					Page <input value={page} type="number" onChange={numberInputUpdated} className="numberInput"/> of {Math.ceil((response?.totalStudiesAvailable ?? 1) / resultsPerPage)}
				</span>
				<Button onClick={search} variant="contained" id="searchButton" disabled={locked}>{locked ? "Searching..." : "Search"}</Button>
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
