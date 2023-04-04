
type CTStatus = "Unknown status" | "Recruiting" | "Completed" | "Not yet recruiting"

interface CTStudy {
	id: string;
	condition: string;
	title: string;
	status: CTStatus;
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
		StudyFields: Array<{
			Rank: number;
			NCTId: string[];
			Condition: string[];
			BriefTitle: string[];
			OverallStatus: string[];
		}>;
	}
}

function encodeUrlParameters(options:Record<string, string>){
	return Object.entries(options)
		.reduce((acc, item, index) =>
			(acc += `${index === 0 ? "?" : "&"}${encodeURIComponent(item[0])}=${encodeURIComponent(item[1])}`, acc)
		, "");
}

async function findStudies(condition:string, minRank:number = 1, maxRank:number = 20):Promise<CTStudy[]> {
	const url = `https://www.clinicaltrials.gov/api/query/study_fields?expr=${condition}&fields=NCTId,Condition,BriefTitle,OverallStatus&fmt=json&minRank=${minRank}&maxRank=${maxRank}`;
	const data = await (await fetch(url)).json() as CTStudyFieldsResponse;
	return data.StudyFieldsResponse.StudyFields.map(obj => ({
		id: obj.NCTId[0],
		condition: obj.Condition[0],
		status: obj.OverallStatus[0] as CTStatus,
		title: obj.BriefTitle[0]
	}));
}
