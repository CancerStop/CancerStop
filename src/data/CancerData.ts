function capitalizeText(
	text: string,
	delimiter: string,
	joinCharacter: string
): string {
	return text
		.split(delimiter)
		.map((word, index) =>
			['a', 'an', 'the', 'in', 'and', 'of'].includes(word) &&
			index !== 0
				? word
				: word[0].toUpperCase() + word.substring(1)
		)
		.join(joinCharacter);
}

type PreprocessedCancerData<T extends string> = {
	// eslint-disable-next-line no-unused-vars
	[ID in T]: {
		url?: string;
		approved_drugs_name: string;
		clinical_trials_name?: string;
		search_name?: string;
		survival_curves_id: string;
		name?: string;
		description?: string;
		information_name?: string;
		information_subtype: string;
	};
};

export type CancersData<T extends string> = {
	// eslint-disable-next-line no-unused-vars
	[ID in T]: CancerData;
};

export interface CancerData {
	approved_drugs_link: string;
	survival_curves_link: string;
	search_link: string;
	clinical_trials_link: string;
	name: string;
	url: string;
	description: string;
	information_link: string;
}

export type CancerID = keyof typeof cancerData;
export const cancerData = ((<T extends string>(preprocessedCancerData:PreprocessedCancerData<T>) => Object.fromEntries(
	//Typescript shenanigans, not important
	Object.entries<PreprocessedCancerData<T>[T]>(
		preprocessedCancerData
	).map(([id, cancer]) => [
		id as T,
		{
			url: '/' + (cancer.url ?? id.replaceAll('_', '-')),
			name: cancer.name ?? capitalizeText(id, '_', ' '),
			approved_drugs_link: `https://www.cancer.gov/about-cancer/treatment/drugs/${cancer.approved_drugs_name}`,
			clinical_trials_link: `https://www.clinicaltrials.gov/ct2/results?cond=${
				cancer.clinical_trials_name ??
				capitalizeText(id, '_', '+')
			}&recrs=b&recrs=a&recrs=f&recrs=d`,
			survival_curves_link: `https://seer.cancer.gov/explorer/application.html?site=${cancer.survival_curves_id}&data_type=4&graph_type=6&compareBy=age_range&chk_age_range_16=16&chk_age_range_62=62&chk_age_range_122=122&chk_age_range_160=160&chk_age_range_166=166&sex=1&race=1&hdn_stage=101&advopt_precision=1&advopt_show_ci=on&advopt_display=2#label_graphArea`,
			search_link: `/search#gsc.q=${
				cancer.search_name ??
				capitalizeText(id, '_', '%20')
			}`,
			description: cancer.description ?? '',
			information_link: `https://www.cancer.gov/types/${cancer.information_name ?? cancer.approved_drugs_name.split("#")[0]}/patient/${cancer.information_subtype !== "" ? `${cancer.information_subtype}-treatment-pdq` : ""}`
		},
	])
)) as (<T extends string>(preprocessedCancerData: PreprocessedCancerData<T>) => CancersData<T>))({
	acute_lymphocytic_leukemia: {
		approved_drugs_name: 'leukemia#1',
		survival_curves_id: '92',
		description: "Acute lymphocytic leukemia is a cancer of the blood and bone marrow. Unlike chronic lymphocytic leukemia, the disease progresses rapidly and creates immature blood cells.",
		information_subtype: "adult-all",
	},
	acute_monocytic_leukemia: {
		approved_drugs_name: 'leukemia',
		survival_curves_id: '100',
		description: "Acute monocyctic leukemia is a cancer of the blood and bone marrow. It, and progresses rapidly.",
		information_subtype: "adult-aml",
	},
	acute_myeloid_leukemia: {
		approved_drugs_name: 'leukemia#3',
		survival_curves_id: '96',
		description: "Acute myeloid leukemia is a cancer of the blood and bone marrow. It affects myeloid cells, and progresses rapidly.",
		information_subtype: "adult-aml",
	},
	chronic_lymphocytic_leukemia: {
		approved_drugs_name: 'leukemia#6',
		survival_curves_id: '93',
		description: "Chronic lymphocytic leukemia is a cancer of the blood and bone marrow. It affects lymphocytes, and progresses more slowly than acute leukemias.",
		information_subtype: "cll",
	},
	chronic_myeloid_leukemia: {
		approved_drugs_name: 'leukemia#8',
		survival_curves_id: '97',
		description: "Chronic myeloid leukemia is a cancer of the blood and bone marrow. It affects myeloid cells, and progresses more slowly than acute leukemias.",
		information_subtype: "cml",
	},
	liver_lymphatic_bile_and_duct: {
		approved_drugs_name: 'liver',
		survival_curves_id: '35',
		description: "",
		information_subtype: "",
	},
	pancreatic_cancer: {
		approved_drugs_name: 'pancreatic',
		survival_curves_id: '40',
		description: "",
		information_subtype: "pancreatic"
	},
	glioblastoma: {
		approved_drugs_name: 'brain',
		survival_curves_id: '661',
		search_name:
			'%22Glioblastoma%22%20OR%20%22Glioma%22%20OR%20%22Glioblastoma%20Multiforme%22',
		description: "Glioblastoma is an aggressive cancer that affects the brain and spinal cord. It is difficult to treat.",
		information_subtype: "child-glioma",
	},
	breast_cancer_and_luminal_a: {
		approved_drugs_name: 'breast',
		clinical_trials_name: 'Breast+Cancer&term=Luminal+A',
		survival_curves_id: '622',
		description: "",
		information_subtype: "breast",
	},
	breast_cancer_and_triple_negative_or_luminal_a: {
		approved_drugs_name: 'breast',
		clinical_trials_name:
			'Breast+Cancer&term=%22Triple+Negative%22',
		survival_curves_id: '623',
		description: "",
		information_subtype: "breast",
	},
	breast_cancer_and_luminal_b: {
		approved_drugs_name: 'breast',
		clinical_trials_name: 'Breast+Cancer&term=%22Luminal+B%22',
		survival_curves_id: '620',
		description: "",
		information_subtype: "breast",
	},
	breast_cancer_and_HER2_enriched: {
		approved_drugs_name: 'breast',
		clinical_trials_name:
			'Breast+Cancer&term=%22HER2+Enriched%22',
		survival_curves_id: '621',
		description: "",
		information_subtype: "breast",
	},
	colon_cancer: {
		approved_drugs_name: 'colorectal',
		survival_curves_id: '21',
		description: "",
		information_subtype: "colon",
	},
	rectal_cancer: {
		approved_drugs_name: 'colorectal',
		survival_curves_id: '31',
		description: "",
		information_subtype: "rectal",
	},
	adenocarcinoma_in_esophagus: {
		name: 'Adenocarcinoma (Esophagus)',
		approved_drugs_name: 'esophageal',
		clinical_trials_name:
			'Esophageal+Cancer&term=Adenocarcinoma',
		survival_curves_id: '600',
		search_name: 'Esophageal%20Cancer%20Adenocarcinoma',
		information_subtype: "esophageal",
	},
	squamous_cell_carcinoma: {
		approved_drugs_name: 'esophageal',
		clinical_trials_name:
			'Esophageal+Cancer&term=%22Squamous+Cell+Carcinoma%22',
		survival_curves_id: '601',
		search_name:
			'Esophageal%20Cancer%20Squamous%20Cell%20Carcinoma',
		description: "Squamous cell carcinoma is a type of cancer that begins in squamous cells, which make up layers of the skin and hollow organs such as the esophagus.",
		information_subtype: "esophageal",
	},
	skin_melanoma: {
		name: 'Melanoma of the Skin',
		approved_drugs_name: 'melanoma',
		survival_curves_id: '53',
		description: "",
		information_name: "skin",
		information_subtype: "melanoma",
	},
	multiple_myeloma: {
		approved_drugs_name: 'multiple-myeloma',
		survival_curves_id: '89',
		description: "Multiple myeloma affects a type of white blood cells called plasma cells, and decreases the body's ability to fight infections.",
		information_name: "myeloma",
		information_subtype: "myeloma",
	},
	ovarian_cancer: {
		approved_drugs_name: 'ovarian',
		survival_curves_id: '61',
		description: "",
		information_subtype: "",
	},
	prostate_cancer: {
		approved_drugs_name: 'prostate',
		survival_curves_id: '66',
		description: "",
		information_subtype: "prostate",
	},
	small_intestine_cancer: {
		approved_drugs_name: 'gist',
		survival_curves_id: '19',
		description: "",
		information_name: "small-intestine",
		information_subtype: "small-intestine",
	},
	stomach_cancer: {
		approved_drugs_name: 'stomach',
		survival_curves_id: '18',
		description: "",
		information_subtype: "stomach",
	},
	testicular_cancer: {
		approved_drugs_name: 'testicular',
		clinical_trials_name: 'Testicular+Cancer',
		survival_curves_id: '67',
		search_name: 'Testicular%20Cancer',
		description: "",
		information_subtype: "testicular",
	},
	lung_adenocarcinoma: {
		name: 'Adenocarcinoma (Lungs)',
		approved_drugs_name: 'lung',
		survival_curves_id: '612',
		search_name: 'Lung%20Cancer%20and%20Adenocarcinoma',
		description: "Lung adenocarcinoma is a non-small-cell lung cancer that is strongly associated with smoking. It usually starts from the mucosal glands.",
		information_subtype: "",
	},
});
