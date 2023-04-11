import SubHeader from '../components/SubHeader';
import '../styles/pageStyles/ClinicalTrialsStyles.css';
import { CTColumn, CTStudy, StudiesResponse, findStudies } from '../util/api';
import { useState, ChangeEvent, useEffect } from 'react';
import { Table, TableContainer, TableRow, Button, TableBody, TableHead, TableCell } from '@material-ui/core';

const defaultColumns:CTColumn[] = ["ID", "Title", "Condition", "Status"];
const resultsPerPage = 20;
const columnTooltips: Partial<Record<CTColumn, string>> = {
	ID: "The NCT ID for this study.",
};
const searchStatusName = {
	"idle": "Search",
	"searching": "Searching...",
	"errored": "Search failed"
};

type StudySort = [property:CTColumn | "default", direction: -1 | 1];

function compareProps<T>(a:T, b:T):number {
	if(Array.isArray(a) && Array.isArray(b)){
		let i = 0;
		while(i < a.length && i < b.length){
			const diff = compareProps(a.at(i), b.at(i));
			if(diff !== 0) return diff;
			i ++;
		}
		if(a.length !== b.length) return a.length - b.length;
		return 0;
	} else if(typeof a == "string" && typeof b == "string"){
		let i = 0;
		while(i < a.length && i < b.length){
			const diff = a.codePointAt(i)! - b.codePointAt(i)!;
			if(diff !== 0) return diff;
			i ++;
		}
		if(a.length !== b.length) return a.length - b.length;
		return 0;
	} else throw new Error(`Cannot compare object ${a} (type ${typeof a})`);
}

function compareStudies(a:CTStudy, b:CTStudy, sort:StudySort):number {
	if(sort[0] === "default") return 0;
	return compareProps(a[sort[0]], b[sort[0]]) * sort[1];
}

export default function ClinicalTrialsPage() {

	const [columns, setColumns] = useState<CTColumn[]>(defaultColumns);
	const [response, setResponse] = useState<StudiesResponse | null>(null);
	const [searchExpr, setSearchExpr] = useState<string>(
		new URLSearchParams(window.location.search).get("cond")?.split("+").join(" ") ?? ""
	);
	const [page, setPage] = useState(1);
	const [searchStatus, setSearchStatus] = useState<"idle" | "searching" | "errored">("idle");
	const [sort, setSort] = useState<StudySort>(["default", 1]);

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
	const search = () => {
		setSearchStatus("searching");
		fetchData().then(data => {
			if(page > Math.ceil(data.totalStudiesAvailable / resultsPerPage) && data.studies.length === 0){
				//If no studies were returned and page is more than the new max page, refetch
				setPage(1);
				fetchData(1).then(setResponse).catch(e => setSearchStatus("errored"));
				setSearchStatus("idle");
			} else {
				setResponse(data);
				setSearchStatus("idle");
			}
		}).catch(e => setSearchStatus("errored"));
	}

	function format(obj:string | string[]){
		if(Array.isArray(obj)) return obj.join(", ");
		else return obj;
	}

	useEffect(() => {
		if(searchExpr !== "") search();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className="cancerSpecificClinicalTrialsTemplate clinicalTrialsPage">
			<SubHeader>
				<a href="https://clinicaltrials.gov/ct2/" target="_blank" rel="noreferrer">Clinical Trials</a>
			</SubHeader>
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
				<Button
					onClick={search}
					variant="contained" id="searchButton"
					disabled={searchStatus === "searching"}
				>
					{searchStatusName[searchStatus]}
				</Button>
				<Button onClick={() => setColumns(prompt("Columns (comma separated):", defaultColumns.join(","))?.split(/, ?/) as CTColumn[] ?? defaultColumns)}>TEMP:set columns</Button>
				<Button onClick={() => setSort(prompt("Column, sort order", "ID,1")?.split(/, ?/) as StudySort ?? ["ID", 1])}>TEMP:set sort</Button>
			</span>
			<TableContainer>
				<Table stickyHeader>
					<TableHead>
						<TableRow>
							{columns.map(name =>
								<TableCell title={columnTooltips[name]} key={name}>{name}</TableCell>
							)}
						</TableRow>
					</TableHead>
					<TableBody>
						{response && response.studies.sort((a, b) => compareStudies(a, b, sort)).map(s =>
							<TableRow key={s.ID} >
								{columns.map(name =>
									<TableCell>{
										name === "Title"
											? <a href={s.url} target="_blank" rel="noreferrer">{s.Title}</a>
											: format(s[name as CTColumn])
									}</TableCell>
								)}
							</TableRow>
						)}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
}
