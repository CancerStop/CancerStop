function capitalizeText(text:string, delimiter:string, joinCharacter:string):string {
	return text
		.split(delimiter)
		.map((word, index) =>
			['a', 'an', 'the', 'in', 'and', 'of'].includes(
				word
			) && index !== 0
				? word
				: word[0].toUpperCase() + word.substring(1)
		)
		.join(joinCharacter);
}

export interface CancerData {
	[cancerID:string]: {
		approved_drugs_link: string;
		survival_curves_link: string;
		search_link: string;
		clinical_trials_link: string;
		name: string;
		url: string;
	}
}
export type CancerID = keyof typeof preprocessedCancerData;
export const preprocessedCancerData = {
	acute_lymphocytic_leukemia: {
		approved_drugs_name: 'leukemia#1',
		survival_curves_id: '92',
	},
	acute_monocytic_leukemia: {
		approved_drugs_name: 'leukemia',
		survival_curves_id: '100',
	},
	acute_myeloid_leukemia: {
		approved_drugs_name: 'leukemia#3',
		survival_curves_id: '96',
	},
	chronic_lymphocytic_leukemia: {
		approved_drugs_name: 'leukemia#6',
		survival_curves_id: '93',
	},
	chronic_myeloid_leukemia: {
		approved_drugs_name: 'leukemia#8',
		survival_curves_id: '97',
	},
	liver_lymphatic_bile_and_duct: {
		approved_drugs_name: 'liver',
		survival_curves_id: '35',
	},
	pancreatic_cancer: {
		approved_drugs_name: 'pancreatic',
		survival_curves_id: '40',
	},
	glioblastoma: {
		approved_drugs_name: 'brain',
		survival_curves_id: '661',
		search_name:
			'%22Glioblastoma%22%20OR%20%22Glioma%22%20OR%20%22Glioblastoma%20Multiforme%22',
	},
	breast_cancer_and_luminal_a: {
		approved_drugs_name: 'breast',
		clinical_trials_name: 'Breast+Cancer&term=Luminal+A',
		survival_curves_id: '622',
	},
	breast_cancer_and_triple_negative_or_luminal_a: {
		approved_drugs_name: 'breast',
		clinical_trials_name:
			'Breast+Cancer&term=%22Triple+Negative%22',
		survival_curves_id: '623',
	},
	breast_cancer_and_luminal_b: {
		approved_drugs_name: 'breast',
		clinical_trials_name: 'Breast+Cancer&term=%22Luminal+B%22',
		survival_curves_id: '620',
	},
	breast_cancer_and_HER2_enriched: {
		approved_drugs_name: 'breast',
		clinical_trials_name:
			'Breast+Cancer&term=%22HER2+Enriched%22',
		survival_curves_id: '621',
	},
	colon_cancer: {
		approved_drugs_name: 'colorectal',
		survival_curves_id: '21',
	},
	rectal_cancer: {
		approved_drugs_name: 'colorectal',
		survival_curves_id: '31',
	},
	adenocarcinoma_in_esophagus: {
		name: 'Adenocarcinoma (Esophagus)',
		approved_drugs_name: 'esophageal',
		clinical_trials_name:
			'Esophageal+Cancer&term=Adenosarcoma',
		survival_curves_id: '600',
		search_name: 'Esophageal%20Cancer%20Adenocarcinoma',
	},
	squamous_cell_carcinoma: {
		approved_drugs_name: 'esophageal',
		clinical_trials_name:
			'Esophageal+Cancer&term=%22Squamous+Cell+Carcinoma%22',
		survival_curves_id: '601',
		search_name:
			'Esophageal%20Cancer%20Squamous%20Cell%20Carcinoma',
	},
	skin_melanoma: {
		name: 'Melanoma of the Skin',
		approved_drugs_name: 'melanoma',
		survival_curves_id: '53',
	},
	multiple_myeloma: {
		approved_drugs_name: 'multiple-myeloma',
		survival_curves_id: '89',
	},
	ovarian_cancer: {
		approved_drugs_name: 'ovarian',
		survival_curves_id: '61',
	},
	prostate_cancer: {
		approved_drugs_name: 'prostate',
		survival_curves_id: '66',
	},
	small_intestine_cancer: {
		approved_drugs_name: 'gist',
		survival_curves_id: '19',
	},
	stomach_cancer: {
		approved_drugs_name: 'stomach',
		survival_curves_id: '18',
	},
	testicular_cancer: {
		approved_drugs_name: 'testicular',
		clinical_trials_name: 'Testicular+Cancer',
		survival_curves_id: '67',
		search_name: 'Testicular%20Cancer',
	},
	lung_adenocarcinoma: {
		name: 'Adenocarcinoma (Lungs)',
		approved_drugs_name: 'lung',
		survival_curves_id: '612',
		search_name: 'Lung%20Cancer%20and%20Adenosarcoma',
	},
};

export const cancerData =
	Object.fromEntries(
		Object.entries(preprocessedCancerData as {
			[ID in CancerID]: { // eslint-disable-line no-unused-vars
				url?: string;
				approved_drugs_name: string;
				clinical_trials_name?: string;
				search_name?: string;
				survival_curves_id: string;
				name?: string;
			}
		}).map(([id, cancer]) => [
			id,
			{
				url: '/' + (cancer.url ?? id.replaceAll('_', '-')),
				name: cancer.name ?? capitalizeText(id, '_', ' '),
				approved_drugs_link: `https://www.cancer.gov/about-cancer/treatment/drugs/${cancer.approved_drugs_name}`,
				clinical_trials_link: `/${
					cancer.url ?? id.replaceAll('_', '-')
				}/clinical-trials`,
				clinical_trials_link_ref: `https://www.clinicaltrials.gov/ct2/results?cond=${
					cancer.clinical_trials_name ??
					capitalizeText(id, '_', '+')
				}&recrs=b&recrs=a&recrs=f&recrs=d`,
				survival_curves_link: `https://seer.cancer.gov/explorer/application.html?site=${cancer.survival_curves_id}&data_type=4&graph_type=6&compareBy=age_range&chk_age_range_16=16&chk_age_range_62=62&chk_age_range_122=122&chk_age_range_160=160&chk_age_range_166=166&sex=1&race=1&hdn_stage=101&advopt_precision=1&advopt_show_ci=on&advopt_display=2#label_graphArea`,
				search_link: `/search#gsc.q=${
					cancer.search_name ??
					capitalizeText(id, '_', '%20')
				}`,
			},
		])
	);
