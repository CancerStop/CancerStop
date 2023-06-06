import { capitalizeText } from "../util/util";

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
		survival_curves_coefficients: SurvivalCurvesPoint[];
		internalized_survival_curves: boolean;
	};
};

export type CancersData<T extends string> = {
	// eslint-disable-next-line no-unused-vars
	[ID in T]: CancerData;
};

export interface CancerData {
	approved_drugs_link: string;
	survival_curves_link_external: string;
	survival_curves_link_internal: string;
	survival_curves_coefficients: SurvivalCurvesPoint[];
	search_link: string;
	clinical_trials_link: string;
	clinical_trials_name: string;
	name: string;
	url: string;
	description: string;
	information_link: string;
	internalized_survival_curves: boolean;
}

export interface SurvivalCurvesPoint {
	a0: number;
	a1: number;
	a2: number;
	a3: number;
	a4: number;
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
			clinical_trials_name: cancer.clinical_trials_name ?? capitalizeText(id, '_', '+'),
			// clinical_trials_link: `https://www.clinicaltrials.gov/ct2/results?cond=${
			// 	cancer.clinical_trials_name ??
			// 	capitalizeText(id, '_', '+')
			// }&recrs=b&recrs=a&recrs=f&recrs=d`,
			clinical_trials_link: `/clinical-trials?cond=${cancer.clinical_trials_name ?? capitalizeText(id, '_', '+')}`,
			survival_curves_link_external: `https://seer.cancer.gov/explorer/application.html?site=${cancer.survival_curves_id}&data_type=4&graph_type=6&compareBy=age_range&chk_age_range_16=16&chk_age_range_62=62&chk_age_range_122=122&chk_age_range_160=160&chk_age_range_166=166&sex=1&race=1&hdn_stage=101&advopt_precision=1&advopt_show_ci=on&advopt_display=2#label_graphArea`,
			survival_curves_link_internal: `/${cancer.url ?? id.replaceAll('_', '-')}/survival-curves`,
			search_link: `/presciqure#gsc.q=${
				cancer.search_name ??
				capitalizeText(id, '_', '%20')
			}`,
			description: cancer.description ?? '',
			information_link: `https://www.cancer.gov/types/${cancer.information_name ?? cancer.approved_drugs_name.split("#")[0]}/patient/${cancer.information_subtype !== "" ? `${cancer.information_subtype}-treatment-pdq` : ""}`,
			survival_curves_coefficients: cancer.survival_curves_coefficients,
			internalized_survival_curves: cancer.internalized_survival_curves,
		},
	])
)) as (<T extends string>(preprocessedCancerData: PreprocessedCancerData<T>) => CancersData<T>))({
	acute_lymphocytic_leukemia: {
		approved_drugs_name: 'leukemia#1',
		survival_curves_id: '92',
		description: "Acute lymphocytic leukemia is a cancer of the blood and bone marrow. Unlike chronic lymphocytic leukemia, the disease progresses rapidly and creates immature blood cells.",
		information_subtype: "adult-all",
		survival_curves_coefficients: [
			{
				a4: 0.0000118335,
				a3: -0.0023693959,
				a2: 0.1558377275,
				a1: -4.6702681983,
				a0: 128.6699704984
			},
			{
				a4: 0.0000072832,
				a3: -0.0015852162,
				a2: 0.1213552150,
				a1: -4.7078899378,
				a0: 127.9557617593
			},
			{
				a4: 0.0000107704,
				a3: -0.0023306052,
				a2: 0.1779995448,
				a1: -6.4302909619,
				a0: 137.3258567320
			},
			{
				a4: 0.0000094878,
				a3: -0.0021123833,
				a2: 0.1682002743,
				a1: -6.3794745647,
				a0: 135.2922229912
			},
			{
				a4: 0.0000100764,
				a3: -0.0022421681,
				a2: 0.1785359957,
				a1: -6.7017946342,
				a0: 136.2057504479
			},
			{
				a4: 0.0000091977,
				a3: -0.0020759103,
				a2: 0.1688053298,
				a1: -6.5106054084,
				a0: 134.0094547631
			},
			{
				a4: 0.0000058501,
				a3: -0.0014003737,
				a2: 0.1240239091,
				a1: -5.4384646253,
				a0: 126.5241276268
			},
			{
				a4: 0.0000059068,
				a3: -0.0014209958,
				a2: 0.1261694525,
				a1: -5.5034718453,
				a0: 126.2797010581
			},
			{
				a4: 0.0000051115,
				a3: -0.0012472945,
				a2: 0.1138730304,
				a1: -5.1946637403,
				a0: 123.6555138006
			},
			{
				a4: 0.0000081228,
				a3: -0.0018233412,
				a2: 0.1502791785,
				a1: -6.0456555274,
				a0: 128.7707502947
			}
		],
		internalized_survival_curves: true
	},
	acute_monocytic_leukemia: {
		approved_drugs_name: 'leukemia',
		survival_curves_id: '100',
		description: "Acute monocyctic leukemia is a cancer of the blood and bone marrow. It, and progresses rapidly.",
		information_subtype: "adult-aml",
		survival_curves_coefficients: [
			{
				a4: 0.0000174194,
				a3: -0.0035023785,
				a2: 0.2279500837,
				a1: -5.9554417344,
				a0: 110.4875939212
			},
			{
				a4: 0.0000160213,
				a3: -0.0031585397,
				a2: 0.2042009895,
				a1: -5.4703934583,
				a0: 95.5821625122
			},
			{
				a4: 0.0000151283,
				a3: -0.0030343678,
				a2: 0.2026898097,
				a1: -5.6937020378,
				a0: 95.5511241746
			},
			{
				a4: 0.0000162057,
				a3: -0.0032138133,
				a2: 0.2122924492,
				a1: -5.8649542413,
				a0: 93.9720532733
			},
			{
				a4: 0.0000163190,
				a3: -0.0031876028,
				a2: 0.2067402836,
				a1: -5.6019395759,
				a0: 89.2697802575
			},
			{
				a4: 0.0000151019,
				a3: -0.0029320962,
				a2: 0.1889232249,
				a1: -5.1406913792,
				a0: 85.4956682934
			},
			{
				a4: 0.0000136805,
				a3: -0.0026429929,
				a2: 0.1693936919,
				a1: -4.6505276214,
				a0: 81.5720946248
			},
			{
				a4: 0.0000155257,
				a3: -0.0029551697,
				a2: 0.1864260325,
				a1: -5.0120853316,
				a0: 83.7781628396
			},
			{
				a4: 0.0000137188,
				a3: -0.0025932599,
				a2: 0.1622885270,
				a1: -4.4056241019,
				a0: 78.8834605530
			},
			{
				a4: 0.0000124310,
				a3: -0.0023370710,
				a2: 0.1450213901,
				a1: -3.9659040643,
				a0: 75.1696626965
			}
		],
		internalized_survival_curves: true
	},
	acute_myeloid_leukemia: {
		approved_drugs_name: 'leukemia#3',
		survival_curves_id: '96',
		description: "Acute myeloid leukemia is a cancer of the blood and bone marrow. It affects myeloid cells, and progresses rapidly.",
		information_subtype: "adult-aml",
		survival_curves_coefficients: [
			{
				a4: 0.0000096110,
				a3: -0.0017762552,
				a2: 0.0990147150,
				a1: -2.4166267103,
				a0: 93.0449405119
			},
			{
				a4: 0.0000108990,
				a3: -0.0019679646,
				a2: 0.1092244170,
				a1: -2.6681495869,
				a0: 82.3180289832
			},
			{
				a4: 0.0000119028,
				a3: -0.0021204591,
				a2: 0.1165203529,
				a1: -2.7888412194,
				a0:  78.1378082845
			},
			{
				a4: 0.0000113278,
				a3:  -0.0019843120,
				a2: 0.1064954131,
				a1:  -2.5323526384,
				a0:   74.0450191971
			},
			{
				a4: 0.0000095379,
				a3:  -0.0016097669,
				a2: 0.0804047645,
				a1:   -1.8483717687,
				a0:   67.4576291960
			},
			{
				a4: 0.0000098799,
				a3:   -0.0016651865,
				a2: 0.0835631030,
				a1:   -1.9301761872,
				a0:   67.4118387434
			},
			{
				a4: 0.0000079272,
				a3:  -0.0012752821,
				a2:  0.0577372662,
				a1:   -1.2982376476,
				a0:   62.7046597146
			},
			{
				a4: 0.0000072856,
				a3:  -0.0011463253,
				a2:   0.0495600196,
				a1:   -1.1287953538,
				a0:   61.6054208465
			},
			{
				a4:  0.0000063939,
				a3:  -0.0009758274,
				a2:   0.0392981429,
				a1:    -0.9242397164,
				a0:   60.2244713769
			},
			{
				a4:  0.0000064083,
				a3:   -0.0009804288,
				a2:   0.0397609031,
				a1:    -0.9340510262,
				a0:    59.6807662141
			}
		],
		internalized_survival_curves: true
	},
	chronic_lymphocytic_leukemia: {
		approved_drugs_name: 'leukemia#6',
		survival_curves_id: '93',
		description: "Chronic lymphocytic leukemia is a cancer of the blood and bone marrow. It affects lymphocytes, and progresses more slowly than acute leukemias.",
		information_subtype: "cll",
		survival_curves_coefficients: [
			{
				a4: 0,
				a3: -0.0002303350,
				a2: 0.0361696473,
				a1: -1.8740543826,
				a0: 129.3623430251
			},
			{
				a4: 0,
				a3: -0.0002339250,
				a2: 0.0347666789,
				a1: -1.7093530379,
				a0: 123.3974466440
			},
			{
				a4: 0,
				a3: -0.0001506017,
				a2: 0.0188881407,
				a1: -0.8079925893,
				a0: 106.3783859161
			},
			{
				a4: 0,
				a3: -0.0000738378,
				a2: 0.0036847039,
				a1: 0.0869469027,
				a0: 88.3466589340
			},
			{
				a4: 0,
				a3: -0.0000334016,
				a2: -0.0043493301,
				a1: 0.5363703043,
				a0: 78.8436044954
			},
			{
				a4: 0,
				a3: 0.0000073645,
				a2: -0.0126142607,
				a1: 1.0270295170,
				a0: 67.2791911538
			},
			{
				a4: 0,
				a3: 0.0000928166,
				a2: -0.0279720501,
				a1: 1.8848824091,
				a0: 49.3539019487
			},
			{
				a4: 0,
				a3: 0.0000485509,
				a2: -0.0199563784,
				a1: 1.4038925476,
				a0: 55.5251103207
			},
			{
				a4: 0,
				a3: 0.0001837480,
				a2: -0.0444659607,
				a1: 2.7804808174,
				a0: 29.0536642953
			},
			{
				a4: 0,
				a3: 0.0001487439,
				a2: -0.0381699832,
				a1: 2.3975152765,
				a0: 33.6095834622
			}
		],
		internalized_survival_curves: true
	},
	chronic_myeloid_leukemia: {
		approved_drugs_name: 'leukemia#8',
		survival_curves_id: '97',
		description: "Chronic myeloid leukemia is a cancer of the blood and bone marrow. It affects myeloid cells, and progresses more slowly than acute leukemias.",
		information_subtype: "cml",
		survival_curves_coefficients: [
			{
				a4: 0.0000117257,
				a3: -0.0022500103,
				a2: 0.1316303633,
				a1: -2.6473841028,
				a0: 103.5435580934
			},
			{
				a4: 0.0000150395,
				a3: -0.0029096995,
				a2: 0.1733357286,
				a1: -3.6147837906,
				a0: 101.8735692142
			},
			{
				a4: 0.0000226084,
				a3: -0.0043569113,
				a2: 0.2632565673,
				a1: -5.6597911908,
				a0: 109.2030828690
			},
			{
				a4: 0.0000253156,
				a3: -0.0048591514,
				a2: 0.2927485954,
				a1: -6.2940950789,
				a0: 109.4720861858
			},
			{
				a4: 0.0000233232,
				a3: -0.0044407844,
				a2: 0.2633446273,
				a1: -5.5675985393,
				a0: 102.4490752291
			},
			{
				a4: 0.0000237211,
				a3: -0.0044839152,
				a2: 0.2642523924,
				a1: -5.6337804630,
				a0: 103.0592696106
			},
			{
				a4: 0.0000216586,
				a3: -0.0040618508,
				a2: 0.2358924417,
				a1: -4.9802553475,
				a0: 98.0585744896
			},
			{
				a4: 0.0000208391,
				a3: -0.0038714382,
				a2: 0.2219153211,
				a1: -4.6593288842,
				a0: 95.4648041478
			},
			{
				a4: 0.0000177365,
				a3: -0.0032575396,
				a2: 0.1818326886,
				a1: -3.7218017223,
				a0: 88.9149226188
			},
			{
				a4: 0.0000201942,
				a3: -0.0036972645,
				a2: 0.2074551805,
				a1: -4.2922147857,
				a0: 91.7719524056
			}
		],
		internalized_survival_curves: true
	},
	liver_lymphatic_bile_and_duct: {
		approved_drugs_name: 'liver',
		survival_curves_id: '35',
		description: "",
		information_subtype: "",
		survival_curves_coefficients: [
			{
				a4: 0.0000122306,
				a3: -0.0029032527,
				a2: 0.2383310213,
				a1: -8.1155226209,
				a0: 139.8030706915
			},
			{
				a4: 0.0000132736,
				a3: -0.0031035792,
				a2: 0.2532231745,
				a1: -8.6452152677,
				a0: 135.2006789153
			},
			{
				a4: 0.0000135817,
				a3: -0.0031615076,
				a2: 0.2581442247,
				a1: -8.8851244021,
				a0: 133.9625124615
			},
			{
				a4: 0.0000134826,
				a3: -0.0031240663,
				a2: 0.2551044966,
				a1: -8.8421265177,
				a0: 131.7000562469
			},
			{
				a4: 0.0000137556,
				a3: -0.0031705725,
				a2: 0.2581944799,
				a1: -8.9600735603,
				a0: 131.6143043870
			},
			{
				a4: 0.0000139903,
				a3: -0.0032165177,
				a2: 0.2616139761,
				a1: -9.0873210089,
				a0: 132.2884271881
			},
			{
				a4: 0.0000142592,
				a3: -0.0032627387,
				a2: 0.2641207128,
				a1: -9.1387281115,
				a0: 131.5953563601
			},
			{
				a4: 0.0000142562,
				a3: -0.0032554341,
				a2: 0.2633783907,
				a1: -9.1297123724,
				a0: 131.2721565357
			},
			{
				a4: 0.0000149479,
				a3: -0.0033916155,
				a2: 0.2726757381,
				a1: -9.3890401437,
				a0: 133.0649638450
			},
			{
				a4: 0.0000155643,
				a3: -0.0035090769,
				a2: 0.2802846588,
				a1: -9.5831928790,
				a0: 134.0568968719
			}
		],
		internalized_survival_curves: true
	},
	pancreatic_cancer: {
		approved_drugs_name: 'pancreatic',
		survival_curves_id: '40',
		description: "",
		information_subtype: "pancreatic",
		survival_curves_coefficients: [
			{
				a4: 0.0000068897,
				a3: -0.0016654702,
				a2: 0.1452897173,
				a1: -6.0150618402,
				a0: 141.5182201105
			},
			{
				a4: 0.0000093678,
				a3: -0.0022401166,
				a2: 0.1976839919,
				a1: -8.1124659221,
				a0: 154.8026986833
			},
			{
				a4: 0.0000065436,
				a3: -0.0016238911,
				a2: 0.1523299228,
				a1: -6.7805521981,
				a0: 136.0309852051
			},
			{
				a4: 0.0000069216,
				a3: -0.0017236357,
				a2: 0.1623714276,
				a1: -7.1962034648,
				a0: 139.2793112000
			},
			{
				a4: 0.0000066594,
				a3: -0.0016852112,
				a2: 0.1618141595,
				a1: -7.2804095323,
				a0: 140.1412960553
			},
			{
				a4: 0.0000061889,
				a3: -0.0016053175,
				a2: 0.1582466457,
				a1: -7.2701819105,
				a0: 140.3205830946
			},
			{
				a4: 0.0000053378,
				a3: -0.0014133734,
				a2: 0.1427508498,
				a1: -6.7272609320,
				a0: 132.4575198621
			},
			{
				a4: 0.0000050067,
				a3: -0.0013554572,
				a2: 0.1399368495,
				a1: -6.7063095749,
				a0: 132.4748005621
			},
			{
				a4: 0.0000053022,
				a3: -0.0014127364,
				a2: 0.1437320600,
				a1: -6.8066563799,
				a0: 133.1530724386
			},
			{
				a4: 0.0000060244,
				a3: -0.0015754357,
				a2: 0.1563301774,
				a1: -7.1794201696,
				a0: 135.7763757074
			}
		],
		internalized_survival_curves: true
	},
	glioblastoma: {
		approved_drugs_name: 'brain',
		survival_curves_id: '661',
		search_name:
			'%22Glioblastoma%22%20OR%20%22Glioma%22%20OR%20%22Glioblastoma%20Multiforme%22',
		description: "Glioblastoma is an aggressive cancer that affects the brain and spinal cord. It is difficult to treat.",
		information_subtype: "child-glioma",
		survival_curves_coefficients: [
			{	
				a4: 0.0000096110,
				a3: -0.0017762552,
				a2: 0.0990147150,
				a1: -2.4166267103,
				a0: 93.0449405119
			}
		],
		internalized_survival_curves: false
	},
	breast_cancer_and_luminal_a: {
		approved_drugs_name: 'breast',
		clinical_trials_name: 'Breast+Cancer+Luminal+A',
		survival_curves_id: '622',
		description: "",
		information_subtype: "breast",
		survival_curves_coefficients: [
			{	
				a4: 0.0000096110,
				a3: -0.0017762552,
				a2: 0.0990147150,
				a1: -2.4166267103,
				a0: 93.0449405119
			}
		],
		internalized_survival_curves: false
	},
	breast_cancer_and_triple_negative_or_luminal_a: {
		approved_drugs_name: 'breast',
		clinical_trials_name: 'Breast+Cancer+Triple+Negative',
		survival_curves_id: '623',
		description: "",
		information_subtype: "breast",
		survival_curves_coefficients: [
			{	
				a4: 0.0000096110,
				a3: -0.0017762552,
				a2: 0.0990147150,
				a1: -2.4166267103,
				a0: 93.0449405119
			}
		],
		internalized_survival_curves: false
	},
	breast_cancer_and_luminal_b: {
		approved_drugs_name: 'breast',
		clinical_trials_name: 'Breast+Cancer+Luminal+B',
		survival_curves_id: '620',
		description: "",
		information_subtype: "breast",
		survival_curves_coefficients: [
			{	
				a4: 0.0000096110,
				a3: -0.0017762552,
				a2: 0.0990147150,
				a1: -2.4166267103,
				a0: 93.0449405119
			}
		],
		internalized_survival_curves: false
	},
	breast_cancer_and_HER2_enriched: {
		approved_drugs_name: 'breast',
		clinical_trials_name: 'Breast+Cancer+HER2+Enriched',
		survival_curves_id: '621',
		description: "",
		information_subtype: "breast",
		survival_curves_coefficients: [
			{	
				a4: 0.0000096110,
				a3: -0.0017762552,
				a2: 0.0990147150,
				a1: -2.4166267103,
				a0: 93.0449405119
			}
		],
		internalized_survival_curves: false
	},
	colon_cancer: {
		approved_drugs_name: 'colorectal',
		survival_curves_id: '21',
		description: "",
		information_subtype: "colon",
		survival_curves_coefficients: [
			{	
				a4: 0.0000096110,
				a3: -0.0017762552,
				a2: 0.0990147150,
				a1: -2.4166267103,
				a0: 93.0449405119
			}
		],
		internalized_survival_curves: false
	},
	rectal_cancer: {
		approved_drugs_name: 'colorectal',
		survival_curves_id: '31',
		description: "",
		information_subtype: "rectal",
		survival_curves_coefficients: [
			{	
				a4: 0.0000096110,
				a3: -0.0017762552,
				a2: 0.0990147150,
				a1: -2.4166267103,
				a0: 93.0449405119
			}
		],
		internalized_survival_curves: false
	},
	adenocarcinoma_in_esophagus: {
		name: 'Adenocarcinoma (Esophagus)',
		approved_drugs_name: 'esophageal',
		clinical_trials_name:
			'Esophageal+Cancer+Adenocarcinoma',
		survival_curves_id: '600',
		search_name: 'Esophageal%20Cancer%20Adenocarcinoma',
		information_subtype: "esophageal",
		survival_curves_coefficients: [
			{	
				a4: 0.0000096110,
				a3: -0.0017762552,
				a2: 0.0990147150,
				a1: -2.4166267103,
				a0: 93.0449405119
			}
		],
		internalized_survival_curves: false
	},
	squamous_cell_carcinoma: {
		approved_drugs_name: 'esophageal',
		clinical_trials_name:
			'Esophageal+Cancer+Squamous+Cell+Carcinoma',
		survival_curves_id: '601',
		search_name:
			'Esophageal%20Cancer%20Squamous%20Cell%20Carcinoma',
		description: "Squamous cell carcinoma is a type of cancer that begins in squamous cells, which make up layers of the skin and hollow organs such as the esophagus.",
		information_subtype: "esophageal",
		survival_curves_coefficients: [
			{	
				a4: 0.0000096110,
				a3: -0.0017762552,
				a2: 0.0990147150,
				a1: -2.4166267103,
				a0: 93.0449405119
			}
		],
		internalized_survival_curves: false
	},
	skin_melanoma: {
		name: 'Melanoma of the Skin',
		approved_drugs_name: 'melanoma',
		survival_curves_id: '53',
		description: "",
		information_name: "skin",
		information_subtype: "melanoma",
		survival_curves_coefficients: [
			{	
				a4: 0.0000096110,
				a3: -0.0017762552,
				a2: 0.0990147150,
				a1: -2.4166267103,
				a0: 93.0449405119
			}
		],
		internalized_survival_curves: false
	},
	multiple_myeloma: {
		approved_drugs_name: 'multiple-myeloma',
		survival_curves_id: '89',
		description: "Multiple myeloma affects a type of white blood cells called plasma cells, and decreases the body's ability to fight infections.",
		information_name: "myeloma",
		information_subtype: "myeloma",
		survival_curves_coefficients: [
			{	
				a4: 0.0000096110,
				a3: -0.0017762552,
				a2: 0.0990147150,
				a1: -2.4166267103,
				a0: 93.0449405119
			}
		],
		internalized_survival_curves: false
	},
	ovarian_cancer: {
		approved_drugs_name: 'ovarian',
		survival_curves_id: '61',
		description: "",
		information_subtype: "",
		survival_curves_coefficients: [
			{	
				a4: 0.0000096110,
				a3: -0.0017762552,
				a2: 0.0990147150,
				a1: -2.4166267103,
				a0: 93.0449405119
			}
		],
		internalized_survival_curves: false
	},
	prostate_cancer: {
		approved_drugs_name: 'prostate',
		survival_curves_id: '66',
		description: "",
		information_subtype: "prostate",
		survival_curves_coefficients: [
			{	
				a4: 0.0000096110,
				a3: -0.0017762552,
				a2: 0.0990147150,
				a1: -2.4166267103,
				a0: 93.0449405119
			}
		],
		internalized_survival_curves: false
	},
	small_intestine_cancer: {
		approved_drugs_name: 'gist',
		survival_curves_id: '19',
		description: "",
		information_name: "small-intestine",
		information_subtype: "small-intestine",
		survival_curves_coefficients: [
			{	
				a4: 0.0000096110,
				a3: -0.0017762552,
				a2: 0.0990147150,
				a1: -2.4166267103,
				a0: 93.0449405119
			}
		],
		internalized_survival_curves: false
	},
	stomach_cancer: {
		approved_drugs_name: 'stomach',
		survival_curves_id: '18',
		description: "",
		information_subtype: "stomach",
		survival_curves_coefficients: [
			{	
				a4: 0.0000096110,
				a3: -0.0017762552,
				a2: 0.0990147150,
				a1: -2.4166267103,
				a0: 93.0449405119
			}
		],
		internalized_survival_curves: false
	},
	testicular_cancer: {
		approved_drugs_name: 'testicular',
		clinical_trials_name: 'Testicular+Cancer',
		survival_curves_id: '67',
		search_name: 'Testicular%20Cancer',
		description: "",
		information_subtype: "testicular",
		survival_curves_coefficients: [
			{	
				a4: 0.0000096110,
				a3: -0.0017762552,
				a2: 0.0990147150,
				a1: -2.4166267103,
				a0: 93.0449405119
			}
		],
		internalized_survival_curves: false
	},
	lung_adenocarcinoma: {
		name: 'Adenocarcinoma (Lungs)',
		approved_drugs_name: 'lung',
		survival_curves_id: '612',
		search_name: 'Lung%20Cancer%20and%20Adenocarcinoma',
		description: "Lung adenocarcinoma is a non-small-cell lung cancer that is strongly associated with smoking. It usually starts from the mucosal glands.",
		information_subtype: "",
		survival_curves_coefficients: [
			{
				a4: 0.0000074450,
				a3: -0.0018923536,
				a2: 0.1693037151,
				a1: -6.5445592150,
				a0: 142.0331240670
			},
			{
				a4: 0.0000074477,
				a3: -0.0019247954,
				a2: 0.1770439103,
				a1: -7.0238592410,
				a0: 133.7845193043
			},
			{
				a4: 0.0000079482,
				a3: -0.0020621438,
				a2: 0.1912659240,
				a1: -7.6486282731,
				a0: 136.9423522791
			},
			{
				a4: 0.0000082119,
				a3: -0.0021200763,
				a2: 0.1964608927,
				a1: -7.8777627110,
				a0: 137.7694951243
			},
			{
				a4: 0.0000083555,
				a3: -0.0021423390,
				a2: 0.1977976527,
				a1: -7.9335789157,
				a0: 137.1148077533
			},
			{
				a4: 0.0000089314,
				a3: -0.0022535077,
				a2: 0.2053845151,
				a1: -8.1673709518,
				a0: 138.7994513278
			},
			{
				a4: 0.0000092325,
				a3: -0.0023008549,
				a2: 0.2075061444,
				a1: -8.1894025462,
				a0: 137.5519404769
			},
			{
				a4: 0.0000096440,
				a3: -0.0023859314,
				a2: 0.2138617923,
				a1: -8.3975494563,
				a0: 139.0788064581
			},
			{
				a4: 0.0000100891,
				a3: -0.0024724953,
				a2: 0.2197638820,
				a1: -8.5727657563,
				a0: 140.3228734689
			},
			{
				a4: 0.0000097419,
				a3: -0.0023830892,
				a2: 0.2117587961,
				a1: -8.2897418869,
				a0: 136.5072097227
			}
		],
		internalized_survival_curves: true
	},
});
