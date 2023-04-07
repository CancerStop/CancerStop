
type CTStatus = "Unknown status" | "Recruiting" | "Completed" | "Not yet recruiting" | "Withdrawn" | "Terminated" | "Active, not recruiting" | "Enrolling by invitation";

export interface CTStudy {
	id: string;
	condition: string;
	title: string;
	status: CTStatus;
	url: string;
}

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
		}>;
	}
}

export type StudiesResponse = {
	studies: CTStudy[];
	totalStudiesAvailable: number;
};

export function encodeUrlParameters(options:Record<string, string>){
	return Object.entries(options)
		.reduce((acc, item, index) => {
			acc += `${index === 0 ? "?" : "&"}${encodeURIComponent(item[0])}=${encodeURIComponent(item[1])}`;
			return acc;
		}, "");
}

export async function findStudies(searchExpr:string, minRank:number = 1, maxRank:number = 20):Promise<StudiesResponse> {
	const url = `https://www.clinicaltrials.gov/api/query/study_fields?expr=${searchExpr}&fields=NCTId,Condition,BriefTitle,OverallStatus,LocationFacility&fmt=json&min_rnk=${minRank}&max_rnk=${maxRank}`;
	const data = await (await fetch(url)).json() as CTStudyFieldsResponse;
	return {
		studies: data.StudyFieldsResponse.StudyFields?.map(obj => ({
			id: obj.NCTId[0],
			condition: obj.Condition[0],
			status: obj.OverallStatus[0] as CTStatus,
			title: obj.BriefTitle[0],
			locations: obj.LocationFacility,
			url: `https://www.clinicaltrials.gov/ct2/show/${obj.NCTId[0]}`,
		})) ?? [],
		totalStudiesAvailable: data.StudyFieldsResponse.NStudiesFound
	};
}
