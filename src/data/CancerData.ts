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
		survival_curves_coefficients: Array<any>;
		internalized_survival_curves: Boolean;
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
	survival_curves_coefficients: Array<any>;
	search_link: string;
	clinical_trials_link: string;
	clinical_trials_name: string;
	name: string;
	url: string;
	description: string;
	information_link: string;
	internalized_survival_curves: Boolean;
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
			search_link: `/search#gsc.q=${
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
				fourth_coeff: 0.0000118335,
				third_coeff: -0.0023693959,
				second_coeff: 0.1558377275,
				first_coeff: -4.6702681983,
				y_intercept: 128.6699704984
			},
			{
				fourth_coeff: 0.0000072832,
				third_coeff: -0.0015852162,
				second_coeff: 0.1213552150,
				first_coeff: -4.7078899378,
				y_intercept: 127.9557617593
			},
			{
				fourth_coeff: 0.0000107704,
				third_coeff: -0.0023306052,
				second_coeff: 0.1779995448,
				first_coeff: -6.4302909619,
				y_intercept: 137.3258567320
			},
			{
				fourth_coeff: 0.0000094878,
				third_coeff: -0.0021123833,
				second_coeff: 0.1682002743,
				first_coeff: -6.3794745647,
				y_intercept: 135.2922229912
			},
			{
				fourth_coeff: 0.0000100764,
				third_coeff: -0.0022421681,
				second_coeff: 0.1785359957,
				first_coeff: -6.7017946342,
				y_intercept: 136.2057504479
			},
			{
				fourth_coeff: 0.0000091977,
				third_coeff: -0.0020759103,
				second_coeff: 0.1688053298,
				first_coeff: -6.5106054084,
				y_intercept: 134.0094547631
			},
			{
				fourth_coeff: 0.0000058501,
				third_coeff: -0.0014003737,
				second_coeff: 0.1240239091,
				first_coeff: -5.4384646253,
				y_intercept: 126.5241276268
			},
			{
				fourth_coeff: 0.0000059068,
				third_coeff: -0.0014209958,
				second_coeff: 0.1261694525,
				first_coeff: -5.5034718453,
				y_intercept: 126.2797010581
			},
			{
				fourth_coeff: 0.0000051115,
				third_coeff: -0.0012472945,
				second_coeff: 0.1138730304,
				first_coeff: -5.1946637403,
				y_intercept: 123.6555138006
			},
			{
				fourth_coeff: 0.0000081228,
				third_coeff: -0.0018233412,
				second_coeff: 0.1502791785,
				first_coeff: -6.0456555274,
				y_intercept: 128.7707502947
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
				fourth_coeff: 0.0000174194,
				third_coeff: -0.0035023785,
				second_coeff: 0.2279500837,
				first_coeff: -5.9554417344,
				y_intercept: 110.4875939212
			},
			{
				fourth_coeff: 0.0000160213,
				third_coeff: -0.0031585397,
				second_coeff: 0.2042009895,
				first_coeff: -5.4703934583,
				y_intercept: 95.5821625122
			},
			{
				fourth_coeff: 0.0000151283,
				third_coeff: -0.0030343678,
				second_coeff: 0.2026898097,
				first_coeff: -5.6937020378,
				y_intercept: 95.5511241746
			},
			{
				fourth_coeff: 0.0000162057,
				third_coeff: -0.0032138133,
				second_coeff: 0.2122924492,
				first_coeff: -5.8649542413,
				y_intercept: 93.9720532733
			},
			{
				fourth_coeff: 0.0000163190,
				third_coeff: -0.0031876028,
				second_coeff: 0.2067402836,
				first_coeff: -5.6019395759,
				y_intercept: 89.2697802575
			},
			{
				fourth_coeff: 0.0000151019,
				third_coeff: -0.0029320962,
				second_coeff: 0.1889232249,
				first_coeff: -5.1406913792,
				y_intercept: 85.4956682934
			},
			{
				fourth_coeff: 0.0000136805,
				third_coeff: -0.0026429929,
				second_coeff: 0.1693936919,
				first_coeff: -4.6505276214,
				y_intercept: 81.5720946248
			},
			{
				fourth_coeff: 0.0000155257,
				third_coeff: -0.0029551697,
				second_coeff: 0.1864260325,
				first_coeff: -5.0120853316,
				y_intercept: 83.7781628396
			},
			{
				fourth_coeff: 0.0000137188,
				third_coeff: -0.0025932599,
				second_coeff: 0.1622885270,
				first_coeff: -4.4056241019,
				y_intercept: 78.8834605530
			},
			{
				fourth_coeff: 0.0000124310,
				third_coeff: -0.0023370710,
				second_coeff: 0.1450213901,
				first_coeff: -3.9659040643,
				y_intercept: 75.1696626965
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
				fourth_coeff: 0.0000096110,
				third_coeff: -0.0017762552,
				second_coeff: 0.0990147150,
				first_coeff: -2.4166267103,
				y_intercept: 93.0449405119
			},
			{
				fourth_coeff: 0.0000108990,
				third_coeff: -0.0019679646,
				second_coeff: 0.1092244170,
				first_coeff: -2.6681495869,
				y_intercept: 82.3180289832
			},
			{
				fourth_coeff: 0.0000119028,
				third_coeff: -0.0021204591,
				second_coeff: 0.1165203529,
				first_coeff: -2.7888412194,
				y_intercept:  78.1378082845
			},
			{
				fourth_coeff: 0.0000113278,
				third_coeff:  -0.0019843120,
				second_coeff: 0.1064954131,
				first_coeff:  -2.5323526384,
				y_intercept:   74.0450191971
			},
			{
				fourth_coeff: 0.0000095379,
				third_coeff:  -0.0016097669,
				second_coeff: 0.0804047645,
				first_coeff:   -1.8483717687,
				y_intercept:   67.4576291960
			},
			{
				fourth_coeff: 0.0000098799,
				third_coeff:   -0.0016651865,
				second_coeff: 0.0835631030,
				first_coeff:   -1.9301761872,
				y_intercept:   67.4118387434
			},
			{
				fourth_coeff: 0.0000079272,
				third_coeff:  -0.0012752821,
				second_coeff:  0.0577372662,
				first_coeff:   -1.2982376476,
				y_intercept:   62.7046597146
			},
			{
				fourth_coeff: 0.0000072856,
				third_coeff:  -0.0011463253,
				second_coeff:   0.0495600196,
				first_coeff:   -1.1287953538,
				y_intercept:   61.6054208465
			},
			{
				fourth_coeff:  0.0000063939,
				third_coeff:  -0.0009758274,
				second_coeff:   0.0392981429,
				first_coeff:    -0.9242397164,
				y_intercept:   60.2244713769
			},
			{
				fourth_coeff:  0.0000064083,
				third_coeff:   -0.0009804288,
				second_coeff:   0.0397609031,
				first_coeff:    -0.9340510262,
				y_intercept:    59.6807662141
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
				fourth_coeff: 0,
				third_coeff: -0.0002303350,
				second_coeff: 0.0361696473,
				first_coeff: -1.8740543826,
				y_intercept: 129.3623430251
			},
			{
				fourth_coeff: 0,
				third_coeff: -0.0002339250,
				second_coeff: 0.0347666789,
				first_coeff: -1.7093530379,
				y_intercept: 123.3974466440
			},
			{
				fourth_coeff: 0,
				third_coeff: -0.0001506017,
				second_coeff: 0.0188881407,
				first_coeff: -0.8079925893,
				y_intercept: 106.3783859161
			},
			{
				fourth_coeff: 0,
				third_coeff: -0.0000738378,
				second_coeff: 0.0036847039,
				first_coeff: 0.0869469027,
				y_intercept: 88.3466589340
			},
			{
				fourth_coeff: 0,
				third_coeff: -0.0000334016,
				second_coeff: -0.0043493301,
				first_coeff: 0.5363703043,
				y_intercept: 78.8436044954
			},
			{
				fourth_coeff: 0,
				third_coeff: 0.0000073645,
				second_coeff: -0.0126142607,
				first_coeff: 1.0270295170,
				y_intercept: 67.2791911538
			},
			{
				fourth_coeff: 0,
				third_coeff: 0.0000928166,
				second_coeff: -0.0279720501,
				first_coeff: 1.8848824091,
				y_intercept: 49.3539019487
			},
			{
				fourth_coeff: 0,
				third_coeff: 0.0000485509,
				second_coeff: -0.0199563784,
				first_coeff: 1.4038925476,
				y_intercept: 55.5251103207
			},
			{
				fourth_coeff: 0,
				third_coeff: 0.0001837480,
				second_coeff: -0.0444659607,
				first_coeff: 2.7804808174,
				y_intercept: 29.0536642953
			},
			{
				fourth_coeff: 0,
				third_coeff: 0.0001487439,
				second_coeff: -0.0381699832,
				first_coeff: 2.3975152765,
				y_intercept: 33.6095834622
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
				fourth_coeff: 0.0000117257,
				third_coeff: -0.0022500103,
				second_coeff: 0.1316303633,
				first_coeff: -2.6473841028,
				y_intercept: 103.5435580934
			},
			{
				fourth_coeff: 0.0000150395,
				third_coeff: -0.0029096995,
				second_coeff: 0.1733357286,
				first_coeff: -3.6147837906,
				y_intercept: 101.8735692142
			},
			{
				fourth_coeff: 0.0000226084,
				third_coeff: -0.0043569113,
				second_coeff: 0.2632565673,
				first_coeff: -5.6597911908,
				y_intercept: 109.2030828690
			},
			{
				fourth_coeff: 0.0000253156,
				third_coeff: -0.0048591514,
				second_coeff: 0.2927485954,
				first_coeff: -6.2940950789,
				y_intercept: 109.4720861858
			},
			{
				fourth_coeff: 0.0000233232,
				third_coeff: -0.0044407844,
				second_coeff: 0.2633446273,
				first_coeff: -5.5675985393,
				y_intercept: 102.4490752291
			},
			{
				fourth_coeff: 0.0000237211,
				third_coeff: -0.0044839152,
				second_coeff: 0.2642523924,
				first_coeff: -5.6337804630,
				y_intercept: 103.0592696106
			},
			{
				fourth_coeff: 0.0000216586,
				third_coeff: -0.0040618508,
				second_coeff: 0.2358924417,
				first_coeff: -4.9802553475,
				y_intercept: 98.0585744896
			},
			{
				fourth_coeff: 0.0000208391,
				third_coeff: -0.0038714382,
				second_coeff: 0.2219153211,
				first_coeff: -4.6593288842,
				y_intercept: 95.4648041478
			},
			{
				fourth_coeff: 0.0000177365,
				third_coeff: -0.0032575396,
				second_coeff: 0.1818326886,
				first_coeff: -3.7218017223,
				y_intercept: 88.9149226188
			},
			{
				fourth_coeff: 0.0000201942,
				third_coeff: -0.0036972645,
				second_coeff: 0.2074551805,
				first_coeff: -4.2922147857,
				y_intercept: 91.7719524056
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
				fourth_coeff: 0.0000122306,
				third_coeff: -0.0029032527,
				second_coeff: 0.2383310213,
				first_coeff: -8.1155226209,
				y_intercept: 139.8030706915
			},
			{
				fourth_coeff: 0.0000132736,
				third_coeff: -0.0031035792,
				second_coeff: 0.2532231745,
				first_coeff: -8.6452152677,
				y_intercept: 135.2006789153
			},
			{
				fourth_coeff: 0.0000135817,
				third_coeff: -0.0031615076,
				second_coeff: 0.2581442247,
				first_coeff: -8.8851244021,
				y_intercept: 133.9625124615
			},
			{
				fourth_coeff: 0.0000134826,
				third_coeff: -0.0031240663,
				second_coeff: 0.2551044966,
				first_coeff: -8.8421265177,
				y_intercept: 131.7000562469
			},
			{
				fourth_coeff: 0.0000137556,
				third_coeff: -0.0031705725,
				second_coeff: 0.2581944799,
				first_coeff: -8.9600735603,
				y_intercept: 131.6143043870
			},
			{
				fourth_coeff: 0.0000139903,
				third_coeff: -0.0032165177,
				second_coeff: 0.2616139761,
				first_coeff: -9.0873210089,
				y_intercept: 132.2884271881
			},
			{
				fourth_coeff: 0.0000142592,
				third_coeff: -0.0032627387,
				second_coeff: 0.2641207128,
				first_coeff: -9.1387281115,
				y_intercept: 131.5953563601
			},
			{
				fourth_coeff: 0.0000142562,
				third_coeff: -0.0032554341,
				second_coeff: 0.2633783907,
				first_coeff: -9.1297123724,
				y_intercept: 131.2721565357
			},
			{
				fourth_coeff: 0.0000149479,
				third_coeff: -0.0033916155,
				second_coeff: 0.2726757381,
				first_coeff: -9.3890401437,
				y_intercept: 133.0649638450
			},
			{
				fourth_coeff: 0.0000155643,
				third_coeff: -0.0035090769,
				second_coeff: 0.2802846588,
				first_coeff: -9.5831928790,
				y_intercept: 134.0568968719
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
				fourth_coeff: 0.0000068897,
				third_coeff: -0.0016654702,
				second_coeff: 0.1452897173,
				first_coeff: -6.0150618402,
				y_intercept: 141.5182201105
			},
			{
				fourth_coeff: 0.0000093678,
				third_coeff: -0.0022401166,
				second_coeff: 0.1976839919,
				first_coeff: -8.1124659221,
				y_intercept: 154.8026986833
			},
			{
				fourth_coeff: 0.0000065436,
				third_coeff: -0.0016238911,
				second_coeff: 0.1523299228,
				first_coeff: -6.7805521981,
				y_intercept: 136.0309852051
			},
			{
				fourth_coeff: 0.0000069216,
				third_coeff: -0.0017236357,
				second_coeff: 0.1623714276,
				first_coeff: -7.1962034648,
				y_intercept: 139.2793112000
			},
			{
				fourth_coeff: 0.0000066594,
				third_coeff: -0.0016852112,
				second_coeff: 0.1618141595,
				first_coeff: -7.2804095323,
				y_intercept: 140.1412960553
			},
			{
				fourth_coeff: 0.0000061889,
				third_coeff: -0.0016053175,
				second_coeff: 0.1582466457,
				first_coeff: -7.2701819105,
				y_intercept: 140.3205830946
			},
			{
				fourth_coeff: 0.0000053378,
				third_coeff: -0.0014133734,
				second_coeff: 0.1427508498,
				first_coeff: -6.7272609320,
				y_intercept: 132.4575198621
			},
			{
				fourth_coeff: 0.0000050067,
				third_coeff: -0.0013554572,
				second_coeff: 0.1399368495,
				first_coeff: -6.7063095749,
				y_intercept: 132.4748005621
			},
			{
				fourth_coeff: 0.0000053022,
				third_coeff: -0.0014127364,
				second_coeff: 0.1437320600,
				first_coeff: -6.8066563799,
				y_intercept: 133.1530724386
			},
			{
				fourth_coeff: 0.0000060244,
				third_coeff: -0.0015754357,
				second_coeff: 0.1563301774,
				first_coeff: -7.1794201696,
				y_intercept: 135.7763757074
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
				fourth_coeff: 0.0000096110,
				third_coeff: -0.0017762552,
				second_coeff: 0.0990147150,
				first_coeff: -2.4166267103,
				y_intercept: 93.0449405119
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
				fourth_coeff: 0.0000096110,
				third_coeff: -0.0017762552,
				second_coeff: 0.0990147150,
				first_coeff: -2.4166267103,
				y_intercept: 93.0449405119
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
				fourth_coeff: 0.0000096110,
				third_coeff: -0.0017762552,
				second_coeff: 0.0990147150,
				first_coeff: -2.4166267103,
				y_intercept: 93.0449405119
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
				fourth_coeff: 0.0000096110,
				third_coeff: -0.0017762552,
				second_coeff: 0.0990147150,
				first_coeff: -2.4166267103,
				y_intercept: 93.0449405119
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
				fourth_coeff: 0.0000096110,
				third_coeff: -0.0017762552,
				second_coeff: 0.0990147150,
				first_coeff: -2.4166267103,
				y_intercept: 93.0449405119
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
				fourth_coeff: 0.0000096110,
				third_coeff: -0.0017762552,
				second_coeff: 0.0990147150,
				first_coeff: -2.4166267103,
				y_intercept: 93.0449405119
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
				fourth_coeff: 0.0000096110,
				third_coeff: -0.0017762552,
				second_coeff: 0.0990147150,
				first_coeff: -2.4166267103,
				y_intercept: 93.0449405119
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
				fourth_coeff: 0.0000096110,
				third_coeff: -0.0017762552,
				second_coeff: 0.0990147150,
				first_coeff: -2.4166267103,
				y_intercept: 93.0449405119
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
				fourth_coeff: 0.0000096110,
				third_coeff: -0.0017762552,
				second_coeff: 0.0990147150,
				first_coeff: -2.4166267103,
				y_intercept: 93.0449405119
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
				fourth_coeff: 0.0000096110,
				third_coeff: -0.0017762552,
				second_coeff: 0.0990147150,
				first_coeff: -2.4166267103,
				y_intercept: 93.0449405119
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
				fourth_coeff: 0.0000096110,
				third_coeff: -0.0017762552,
				second_coeff: 0.0990147150,
				first_coeff: -2.4166267103,
				y_intercept: 93.0449405119
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
				fourth_coeff: 0.0000096110,
				third_coeff: -0.0017762552,
				second_coeff: 0.0990147150,
				first_coeff: -2.4166267103,
				y_intercept: 93.0449405119
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
				fourth_coeff: 0.0000096110,
				third_coeff: -0.0017762552,
				second_coeff: 0.0990147150,
				first_coeff: -2.4166267103,
				y_intercept: 93.0449405119
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
				fourth_coeff: 0.0000096110,
				third_coeff: -0.0017762552,
				second_coeff: 0.0990147150,
				first_coeff: -2.4166267103,
				y_intercept: 93.0449405119
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
				fourth_coeff: 0.0000096110,
				third_coeff: -0.0017762552,
				second_coeff: 0.0990147150,
				first_coeff: -2.4166267103,
				y_intercept: 93.0449405119
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
				fourth_coeff: 0.0000096110,
				third_coeff: -0.0017762552,
				second_coeff: 0.0990147150,
				first_coeff: -2.4166267103,
				y_intercept: 93.0449405119
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
				fourth_coeff: 0.0000074450,
				third_coeff: -0.0018923536,
				second_coeff: 0.1693037151,
				first_coeff: -6.5445592150,
				y_intercept: 142.0331240670
			},
			{
				fourth_coeff: 0.0000074477,
				third_coeff: -0.0019247954,
				second_coeff: 0.1770439103,
				first_coeff: -7.0238592410,
				y_intercept: 133.7845193043
			},
			{
				fourth_coeff: 0.0000079482,
				third_coeff: -0.0020621438,
				second_coeff: 0.1912659240,
				first_coeff: -7.6486282731,
				y_intercept: 136.9423522791
			},
			{
				fourth_coeff: 0.0000082119,
				third_coeff: -0.0021200763,
				second_coeff: 0.1964608927,
				first_coeff: -7.8777627110,
				y_intercept: 137.7694951243
			},
			{
				fourth_coeff: 0.0000083555,
				third_coeff: -0.0021423390,
				second_coeff: 0.1977976527,
				first_coeff: -7.9335789157,
				y_intercept: 137.1148077533
			},
			{
				fourth_coeff: 0.0000089314,
				third_coeff: -0.0022535077,
				second_coeff: 0.2053845151,
				first_coeff: -8.1673709518,
				y_intercept: 138.7994513278
			},
			{
				fourth_coeff: 0.0000092325,
				third_coeff: -0.0023008549,
				second_coeff: 0.2075061444,
				first_coeff: -8.1894025462,
				y_intercept: 137.5519404769
			},
			{
				fourth_coeff: 0.0000096440,
				third_coeff: -0.0023859314,
				second_coeff: 0.2138617923,
				first_coeff: -8.3975494563,
				y_intercept: 139.0788064581
			},
			{
				fourth_coeff: 0.0000100891,
				third_coeff: -0.0024724953,
				second_coeff: 0.2197638820,
				first_coeff: -8.5727657563,
				y_intercept: 140.3228734689
			},
			{
				fourth_coeff: 0.0000097419,
				third_coeff: -0.0023830892,
				second_coeff: 0.2117587961,
				first_coeff: -8.2897418869,
				y_intercept: 136.5072097227
			}
		],
		internalized_survival_curves: true
	},
});
