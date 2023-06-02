

interface NestedStringObject {
	[name:string]: string | NestedStringObject;
}

export const FAQData: NestedStringObject = {
	"Survival curves": {
		"What is this feature?": "This feature is an interactive tool that presents the survival curve for a given cancer and age of diagnosis.\nActual results from graphs may vary based on health of the individual like tissue grading and staging(in case of solid tumors), ECOG score, success of the proposed treatment in clinical trials, besides other factors. These represent typically observed survival rates as culled from the NCI's SEER program.\nAs medical research and technology advances further and the standard of living improves these are very likely to change. Numbers for these curves are for information purposes only. NO RESPONSIBILITY IS CLAIMED WHATSOEVER.",
		"How are survival curves computed?": "Currently, the values for a given age are projected from the survival rates presented for specified age ranges in the SEER Registry. Survival rates are presented up to 10 years from the time of diagnosis.",
		"What is the source of data for these survival curves?": "The source for these data is from the website of NCI's SEER program.",
		"What type of survival curve is presented here?": "Curves presented here are 'Relative Survival by Survival Time'."

	}
};
export default FAQData;