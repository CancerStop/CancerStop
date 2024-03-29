import { CancerID } from "./CancerData";

export const CancerMenuListData: ({
	name: string,
	items: CancerID[]
} | CancerID)[] = [
	{
		name: 'Colon and Rectum',
		items: ['colon_cancer', 'rectal_cancer'],
	},
	{
		name: 'Esophagus',
		items: [
			'adenocarcinoma_in_esophagus',
			'squamous_cell_carcinoma',
		],
	},
	{
		name: 'Leukemia',
		items: [
			'acute_lymphocytic_leukemia',
			'acute_monocytic_leukemia',
			'acute_myeloid_leukemia',
			'chronic_lymphocytic_leukemia',
			'chronic_myeloid_leukemia',
		],
	},
	{
		name: 'Breast',
		items: [
			'breast_cancer_and_luminal_a',
			'breast_cancer_and_triple_negative_or_luminal_a',
			'breast_cancer_and_luminal_b',
			'breast_cancer_and_HER2_enriched',
		],
	},
	'lung_adenocarcinoma',
	'glioblastoma',
	'liver_lymphatic_bile_and_duct',
	'skin_melanoma',
	'multiple_myeloma',
	'ovarian_cancer',
	'pancreatic_cancer',
	'prostate_cancer',
	'small_intestine_cancer',
	'stomach_cancer',
	'testicular_cancer',
];
