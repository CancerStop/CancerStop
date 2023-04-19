import SubHeader from '../components/SubHeader';
import '../styles/pageStyles/ClinicalTrialsStyles.css';
import { StudiesResponse, findStudies } from '../util/api';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@material-ui/core';
import { DataGrid, GridColDef, GridPaginationModel } from '@mui/x-data-grid';

const searchStatusName = {
	"idle": "Search",
	"searching": "Searching...",
	"errored": "Search failed"
};

const dataGridColumns: GridColDef[] = [
	{
		field: "ID",
		headerName: "NCT ID",
		description: "The NCT ID for this study.",
		minWidth: 140,
		flex: 0.15,
	},{
		field: "Title",
		headerName: "Title",
		renderCell(params) {
			if(typeof params.value === "string"){
				return <a href={params.row.url} target="_blank" rel="noreferrer">{params.value}</a>;
			} else return `TypeError: ${typeof params.value}`;
		},
		minWidth: 200,
		flex: 1,
	},{
		field: "StudyType",
		headerName: "Type",
		description: "Interventional studies study the effect of an intervention, such as administering a new medication. Observational studies measure effects without attempting to change the outcome (no treatments are given).",
		minWidth: 130,
		flex: 0.1,
	},{
		field: "Status",
		headerName: "Status",
		minWidth: 120,
		flex: 0.2
	},{
		field: "HasResults",
		headerName: "Results",
		minWidth: 100,
		flex: 0.07,
		renderCell(params) {
			if(typeof params.value === "boolean"){
				return params.value
					? <a href={`https://www.clinicaltrials.gov/ct2/show/results/NCT02336282`} target="_blank" rel="noreferrer">Yes</a>
					: "No";
			} else return `TypeError: ${typeof params.value}`;
		},
	},{
		field: "Condition",
		headerName: "Condition",
		minWidth: 150,
		flex: 0.4,
	},{
		field: "Locations",
		headerName: "Locations",
		description: "List of all locations involved in this study.",
		renderCell(params) {
			if(Array.isArray(params.value)){
				const text = params.value.join(", ");
				if(text.length > 200) return <span title={text}>{text.slice(0, 197) + "..."}</span>;
				else return text;
			} else return `TypeError: ${typeof params.value}`;
		},
		minWidth: 200,
		flex: 1.1
	},{
		field: "Phase",
		headerName: "Phase",
		description: "A Phase 1 study is performed with 20 to 80 participants to determine safe dosage. Phase 2 studies involve hundreds of participants, and check for long term side effects. Phase 3 and 4 studies involve thousands of participants.",
		renderCell(params) {
			if(Array.isArray(params.value)){
				if(params.value.length && params.value.every(p => /Phase \d/.test(p)))
					return `Phase ${params.value.map(p => p.split(" ")[1]).join(", ")}`;
				else if(params.value.length === 0 || params.value[0] === "Not Applicable"){
					return "N/A";
				} return params.value.join(", ");
			} else return `TypeError: ${typeof params.value}`;
		},
		sortComparator(a, b){
			function score(value:string[]){
				if(value.length === 0 || value[0] === "Not Applicable") return 0;
				const matchData = value.map(v => v.match(/Phase (\d)/)?.[1]);
				return matchData.reduceRight((a, b) => a / 10 + (b ? +b : 0), 0);
			}
			return score(a) - score(b);
		},
		minWidth: 100,
		flex: 0.1
	},
];

export default function ClinicalTrialsPage() {

	const [response, setResponse] = useState<StudiesResponse | null>(null);
	const searchInput = useRef<HTMLInputElement | null>(null);
	const [paginationModel, setPaginationModel] = useState({
		pageSize: 25,
		page: 0,
	});
	const [searchStatus, setSearchStatus] = useState<"idle" | "searching" | "errored">("idle");

	const fetchData = (page = paginationModel.page, resultsPerPage = paginationModel.pageSize) => findStudies(searchInput.current?.value ?? "", (page) * resultsPerPage + 1, (page + 1) * resultsPerPage);
	const handle = (err:unknown) => {
		console.error(err);
		setSearchStatus("errored");
	}
	const search = (model = paginationModel) => {
		setSearchStatus("searching");
		fetchData(model.page, model.pageSize).then(data => {
			if(model.page > Math.ceil(data.totalStudiesAvailable / model.pageSize) && data.studies.length === 0){
				//If no studies were returned and page is more than the new max page, refetch
				setPaginationModel({
					page: 0, pageSize: model.pageSize
				});
				fetchData(0).then(d => {
					setResponse(d);
					setSearchStatus("idle");
				}).catch(handle);
			} else {
				setResponse(data);
				setSearchStatus("idle");
			}
		}).catch(handle);
	}
	const reloadWithPaginationModel = (model:GridPaginationModel) => {
		setPaginationModel(model);
		search(model);
	}

	//If there's a search expression on first load, search automatically
	useEffect(() => {
		if(searchInput.current?.value !== "") search();
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className="cancerSpecificClinicalTrialsTemplate clinicalTrialsPage">
			<SubHeader>
				<a href="https://clinicaltrials.gov/ct2/" target="_blank" rel="noreferrer">Clinical Trials</a>
			</SubHeader>
			<span className="searchBar">
				<input
					placeholder="Search Expression"
					defaultValue={new URLSearchParams(window.location.search).get("cond")?.split("+").join(" ") ?? ""}
					onKeyDown={(e) => {
						if(e.key === "Enter" && searchStatus !== "searching") search();
					}}
					id="searchInput"
					ref={searchInput}
				/>
				<Button
					onClick={() => search()}
					variant="contained" id="searchButton"
					disabled={searchStatus === "searching"}
				>
					{searchStatusName[searchStatus]}
				</Button>
			</span>
			{
				!response && searchStatus === "searching" ? <div className="table-text">Loading...</div> :
				!response ? "" :
				response.totalStudiesAvailable === 0 ? <div className="table-text">No studies found.</div> :
				<DataGrid
					columns={dataGridColumns}
					rows={response.studies}
					getRowId={row => row.ID}
					autoHeight={true}
					getRowHeight={() => "auto"}
					paginationMode="server"
					rowCount={response.totalStudiesAvailable}
					paginationModel={paginationModel}
					onPaginationModelChange={reloadWithPaginationModel}
					rowSelection={false}
				/>
			}
		</div>
	);
}
