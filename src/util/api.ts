
type CTStatus = "Unknown status" | "Recruiting" | "Completed" | "Not yet recruiting" | "Withdrawn" | "Terminated" | "Active, not recruiting" | "Enrolling by invitation";
type CTStudyType = "Interventional" | "Observational" | "Expanded Access";
export interface CTStudy {
	ID: string;
	Condition: string;
	Title: string;
	Status: CTStatus;
	url: string;
	Locations: string[];
	Phase: string[];
	StudyType: CTStudyType;
	HasResults: boolean;
}

export type CTColumn = "ID" | "Condition" | "Title" | "Status" | "Locations";

//https://www.clinicaltrials.gov/api/query/study_fields?expr=Acute+Lymphocytic+Leukemia&fields=NCTId,Condition,BriefTitle,OverallStatus&fmt=json
interface CTStudyFieldsResponse {
	StudyFieldsResponse: {
		APIVrs: string;
		DataVrs: string;
		Expression: string;
		NStudiesAvail: number;
		NStudiesFound: number;
		MinRank: number;
		MaxRank: number;
		NStudiesReturned: number;
		FieldList: string[];
		StudyFields?: Array<{
			Rank: number;
			NCTId: string[];
			Condition: string[];
			BriefTitle: string[];
			OverallStatus: string[];
			LocationFacility: string[];
			Phase: string[];
			StudyType: string[];
			ResultsFirstSubmitDate: string[] | [];
		}>;
	}
}

export type StudiesResponse = {
	studies: CTStudy[];
	totalStudiesAvailable: number;
};


export async function findStudies(
	searchExpr:string, minRank:number = 1, maxRank:number = 20,
	fields = ["NCTId", "Condition", "BriefTitle", "OverallStatus", "LocationFacility", "Phase", "StudyType", "ResultsFirstSubmitDate"]
):Promise<StudiesResponse> {
	const url = `https://www.clinicaltrials.gov/api/query/study_fields?` + new URLSearchParams({
		expr: searchExpr,
		fields: fields.join(","),
		fmt: "json",
		min_rnk: minRank.toString(),
		max_rnk: maxRank.toString(),
	}).toString();
	const data = await (await fetch(url)).json() as CTStudyFieldsResponse;
	console.debug(`Fetched url ${url}, has results: ${data.StudyFieldsResponse.StudyFields![0].ResultsFirstSubmitDate}`);
	return {
		studies: data.StudyFieldsResponse.StudyFields?.map(obj => ({
			ID: obj.NCTId[0],
			Condition: obj.Condition[0],
			Status: obj.OverallStatus[0] as CTStatus,
			Title: obj.BriefTitle[0],
			Locations: obj.LocationFacility,
			url: `https://www.clinicaltrials.gov/ct2/show/${obj.NCTId[0]}`,
			Phase: obj.Phase,
			StudyType: obj.StudyType[0] as CTStudyType,
			HasResults: obj.ResultsFirstSubmitDate.length > 0,
			//If there is a results submit date then the study has results, otherwise it doesn't
		})) ?? [],
		totalStudiesAvailable: data.StudyFieldsResponse.NStudiesFound
	};
}
