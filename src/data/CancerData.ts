/* eslint-disable no-unused-vars */
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
/*
Script to grab this data
Usage instructions: Paste into dev console and run, wait 2.5 seconds, then switch to the page and press Enter to copy the data.
```
function delay(timeMs){
	return new Promise((res, rej) => {
		setTimeout(() => {
			res();
		}, timeMs);
	});
}
function scrapeFromTable(){
	arr = [...document.querySelector("#first-table tbody").children].slice(1).map(tr =>
		[...tr.children].slice(1).filter((_, i) => i % 3 == 0).map(td => +td.innerText)
	);
	return (
			`{
				localized: [${arr.map(r => r[0])}],
				regional: [${arr.map(r => r[1])}],
				distant: [${arr.map(r => r[2])}],
				unstaged: [${arr.map(r => r[3])}],
			}`
	);
}
out = `
		survival_curves_stagewise: {
			_15: ${document.querySelector("#set_age_range label:nth-child(5)").click(), await delay(500), scrapeFromTable()},
			_15_39: ${document.querySelector("#set_age_range label:nth-child(6)").click(), await delay(500), scrapeFromTable()},
			_40_64: ${document.querySelector("#set_age_range label:nth-child(7)").click(), await delay(500), scrapeFromTable()},
			_65_74: ${document.querySelector("#set_age_range label:nth-child(8)").click(), await delay(500), scrapeFromTable()},
			_75: ${document.querySelector("#set_age_range label:nth-child(9)").click(), await delay(500), scrapeFromTable()}
		},`;
onkeydown = () => {
	navigator.clipboard.writeText(out);
	alert("copied to clipboard");
	onkeydown = undefined;
}
```
*/
		survival_curves_stagewise?: {
			[_ in "_15" | "_15_39" | "_40_64" | "_65_74" | "_75"]: StagewiseSurvivalData;
		};
		internalized_survival_curves: boolean;
	};
};

export type StagewiseSurvivalData = {
	[_ in "localized" | "regional" | "distant" | "unstaged"]: number[];
}

export type CancersData<T extends string> = {
	// eslint-disable-next-line no-unused-vars
	[ID in T]: CancerData;
};

export interface CancerData {
	approved_drugs_link: string;
	survival_curves_link_external: string;
	survival_curves_link_internal: string;
	survival_curves_coefficients: SurvivalCurvesPoint[];
	survival_curves_stagewise?: {
		[_ in "_15" | "_15_39" | "_40_64" | "_65_74" | "_75"]: StagewiseSurvivalData;
	};
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
			survival_curves_stagewise: cancer.survival_curves_stagewise ?
				//Add 100 to the beginning
				Object.fromEntries(Object.entries(cancer.survival_curves_stagewise).map(([age, stagewiseData]) =>
					[age, Object.fromEntries(Object.entries(stagewiseData).map(([stage, data]) =>
						[stage, [100].concat(data)]
					))]
				)) : undefined,
			internalized_survival_curves: cancer.internalized_survival_curves,
		},
	])
)))({
	acute_lymphocytic_leukemia: {
		approved_drugs_name: 'leukemia#1',
		survival_curves_id: '92',
		description: "Acute lymphocytic leukemia is a cancer of the blood and bone marrow. Unlike chronic lymphocytic leukemia, the disease progresses rapidly and creates immature blood cells.",
		information_subtype: "adult-all",
		survival_curves_coefficients: [
			{
				a4: 0,
				a3: 0,
				a2: -0.0079,
				a1: -0.0899,
				a0: 99.573
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0007,
				a1: -0.9394,
				a0: 108.4386
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.0028,
				a1: -1.3309,
				a0: 111.6826
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.0039,
				a1: -1.4744,
				a0: 112.1249
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.0056,
				a1: -1.6248,
				a0: 112.9981
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.0064,
				a1: -1.704,
				a0: 113.1834
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.0070,
				a1: -1.7712,
				a0: 113.6112
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.0077,
				a1: -1.8237,
				a0: 113.8142
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.007,
				a1: -1.8314,
				a0: 113.6294
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.0075,
				a1: -1.8254,
				a0: 113.3014
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
				a4: 0,
				a3: 0,
				a2: -0.0143,
				a1: 0.5793,
				a0: 67.8505
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0102,
				a1: 0.2011,
				a0: 61.271
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0072,
				a1: -0.058,
				a0: 61.0649
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0067,
				a1: -0.1078,
				a0: 59.8723
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0081,
				a1: -0.0315,
				a0: 58.2237
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0069,
				a1: -0.1225,
				a0: 59.2376
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0068,
				a1: -0.1378,
				a0: 59.0666
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0063,
				a1: -0.1885,
				a0: 59.6619
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0061,
				a1: -0.2083,
				a0: 59.8935
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0058,
				a1: -0.2491,
				a0: 60.5582
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
				a4: 0,
				a3: 0,
				a2: -0.0187,
				a1: 0.9386,
				a0: 72.7471
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0192,
				a1: 0.9208,
				a0: 62.6676
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0197,
				a1: 0.9287,
				a0: 58.6199
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0195,
				a1: 0.9032,
				a0: 56.8887
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.019,
				a1: 0.8585,
				a0: 56.1545
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0189,
				a1: 0.8349,
				a0: 55.9632
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0185,
				a1: 0.7938,
				a0: 56.2122
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0185,
				a1: 0.7953,
				a0: 55.6244
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0183,
				a1: 0.7662,
				a0: 55.9179
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.018,
				a1: 0.7398,
				a0: 55.079
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
				a3: 0,
				a2: -0.0038346249367040564,
				a1: 0.39614665505539004,
				a0: 88.43503181574542
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.005598645015400638,
				a1: 0.5812158380527178,
				a0: 82.44300584454565
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.011043200552470989,
				a1: 1.1820398557566572,
				a0: 65.33382288689711
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.014037479043347512,
				a1: 1.483193630037666,
				a0: 56.82575271134383
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.013800532031884138,
				a1: 1.4194156910046978,
				a0: 57.64165221599067
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.013469439256384996,
				a1: 1.3477946309296822,
				a0: 58.5926360913166
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.013247524477401962,
				a1: 1.2770747275593237,
				a0: 59.55928358596131
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.013197165671738453,
				a1: 1.2256442212889513,
				a0: 60.33545764631428
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.011792010790132812,
				a1: 1.0584795583135944,
				a0: 62.40847573162826
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.012174805184581583,
				a1: 1.0417360889007983,
				a0: 62.74527900253526
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
				a4: 0,
				a3: 0,
				a2: -0.01330259966667735,
				a1: 1.0579443446888679,
				a0: 77.1333772117979
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.018672103186270217,
				a1: 1.4620416417644544,
				a0: 67.25471716085778
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.021755986350930456,
				a1: 1.6850498279643549,
				a0: 61.25117163766868
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.023651149014900064,
				a1: 1.8022299399073491,
				a0: 58.21388902210697
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.024799095618557976,
				a1: 1.8777457009302376,
				a0: 55.58724740805839
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.025690707103646293,
				a1: 1.9101202214780901,
				a0: 54.781085118818865
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.026646257668669904,
				a1: 1.9582148620324358,
				a0: 53.501272695944564
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.027235716319777614,
				a1: 1.9820063449580345,
				a0: 52.452154768825096
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.026952296723369074,
				a1: 1.9414058626697759,
				a0: 52.19904217062356
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.026940495842073586,
				a1: 1.911575043914182,
				a0: 52.39753087726646
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
				a4: 0,
				a3: 0,
				a2: 0.013844504205881902,
				a1: -1.8755117491200481,
				a0: 110.00153930721947
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.0169286817310903,
				a1: -2.266766836348319,
				a0: 108.50510318659931
			},	
			{
				a4: 0,
				a3: 0,
				a2: 0.01872254798490225,
				a1: -2.500825175301504,
				a0: 108.96415889119127
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.019584716800345348,
				a1: -2.6210208986065524,
				a0: 108.91904694653736
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.019719963896181802,
				a1: -2.6648667059366553,
				a0: 108.44096404071306
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.020067322572524304,
				a1: -2.7211873082314093,
				a0: 108.66150157615014
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.0204961198980107,
				a1: -2.769569079309524,
				a0: 108.44554455543589
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.020717816387149757,
				a1: -2.8031620673105264,
				a0: 108.58071776346503
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.02057276609283898,
				a1: -2.8010711515747064,
				a0: 108.19077361589801
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.021035547178222203,
				a1: -2.847620429018782,
				a0: 108.4656998521218
			}
		],
		survival_curves_stagewise: {
			_15: {
				localized: [93.1,90.1,88.6,87.3,86.6,86.4,86.1,85.8,85.4,84.9],
				regional: [88.6,85.2,82.2,80.9,79.1,78.3,77.9,76.9,76.3,76.3],
				distant: [75,61.5,57.2,53.2,52.8,52.3,51.2,51.2,50.5,50.5],
				unstaged: [78,69.3,65.4,65.4,63.1,63.1,60.5,60.5,60.5,60.5],
			},
			_15_39: {
				localized: [81.4,72.1,65.7,62,59.1,57.7,54.3,53.2,52.2,50.5],
				regional: [52.6,38.3,32.5,27.5,25.8,22.9,21.7,20.6,20.6,20.3],
				distant: [36.3,20.4,13.9,10.9,9.7,9.3,8.5,7.7,7.7,6.9],
				unstaged: [61.1,52.4,47.9,44.4,41.4,39.8,38.6,38,38,37.2],
			},
			_40_64: {
				localized: [70.7,56.2,47.1,41.4,37.2,34.4,32.4,30.7,29.3,28.2],
				regional: [41.9,26.1,19.1,15.5,13.4,12.2,11.2,10.5,9.9,9.4],
				distant: [17.9,8,4.9,3.4,2.7,2.4,2.2,2,1.8,1.6],
				unstaged: [37,25.2,19.2,15.5,13.3,11.9,10.9,10.2,9.5,8.9],
			},
			_65_74: {
				localized: [69.5,54.4,44.8,38.4,33.4,29.5,27,24.7,22.9,21.4],
				regional: [41.4,25.7,18.3,13.8,11.4,9.9,8.7,7.9,7.4,6.7],
				distant: [18.5,7.9,4.8,3.3,2.5,2.1,1.8,1.7,1.3,1.1],
				unstaged: [33,20.9,14.9,11.5,9.7,7.9,6.9,6.2,5.7,5.7],
			},
			_75: {
				localized: [53.6,38.6,28.8,22.9,18.7,15.9,13.5,11.8,10.1,8.7],
				regional: [29.3,16.5,10.6,7.7,5.8,4.5,3.5,2.9,2.3,2],
				distant: [12.9,5.4,3.1,2.2,1.5,1.1,1.1,1.1,1.1,0.9],
				unstaged: [21.6,12.4,7.9,5.3,3.6,2.7,2.3,2.1,2.1,2.1],
			}
		},
		internalized_survival_curves: true
	},
	pancreatic_cancer: {
		approved_drugs_name: 'pancreatic',
		survival_curves_id: '40',
		description: "",
		information_subtype: "pancreatic",
		survival_curves_coefficients: [
			{
				a4: 0,
				a3: 0,
				a2: 0.002101205125312644,
				a1: -1.2837777901989098,
				a0: 115.47597402747554
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.00561580722757582,
				a1: -1.7956334721677774,
				a0: 117.72548011362753
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.006434549593632433,
				a1: -1.9025504257808472,
				a0: 115.5158623622977
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.006574589143783616,
				a1: -1.9069553296291306,
				a0: 112.55605583986252
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.008324341004456226,
				a1: -2.0789106807566076,
				a0: 114.70898980420829
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.008259277401079679,
				a1: -2.040112511877662,
				a0: 111.43077516377282
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.00717918917229321,
				a1: -1.8923683059020184,
				a0: 105.77016292029325
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.00811132319035135,
				a1: -1.9804847522888713,
				a0: 106.83727914276668
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.009176924911269424,
				a1: -2.077988211025306,
				a0: 108.02732509277786
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.010141481586093182,
				a1: -2.1669402841669525,
				a0: 109.11781149216307
			}
		],
		survival_curves_stagewise: {
			_15: {
				localized: [93.1,90.1,88.6,87.3,86.6,86.4,86.1,85.8,85.4,84.9],
				regional: [88.6,85.2,82.2,80.9,79.1,78.3,77.9,76.9,76.3,76.3],
				distant: [75,61.5,57.2,53.2,52.8,52.3,51.2,51.2,50.5,50.5],
				unstaged: [78,69.3,65.4,65.4,63.1,63.1,60.5,60.5,60.5,60.5],
			},
			_15_39: {
				localized: [81.4,72.1,65.7,62,59.1,57.7,54.3,53.2,52.2,50.5],
				regional: [52.6,38.3,32.5,27.5,25.8,22.9,21.7,20.6,20.6,20.3],
				distant: [36.3,20.4,13.9,10.9,9.7,9.3,8.5,7.7,7.7,6.9],
				unstaged: [61.1,52.4,47.9,44.4,41.4,39.8,38.6,38,38,37.2],
			},
			_40_64: {
				localized: [70.7,56.2,47.1,41.4,37.2,34.4,32.4,30.7,29.3,28.2],
				regional: [41.9,26.1,19.1,15.5,13.4,12.2,11.2,10.5,9.9,9.4],
				distant: [17.9,8,4.9,3.4,2.7,2.4,2.2,2,1.8,1.6],
				unstaged: [37,25.2,19.2,15.5,13.3,11.9,10.9,10.2,9.5,8.9],
			},
			_65_74: {
				localized: [69.5,54.4,44.8,38.4,33.4,29.5,27,24.7,22.9,21.4],
				regional: [41.4,25.7,18.3,13.8,11.4,9.9,8.7,7.9,7.4,6.7],
				distant: [18.5,7.9,4.8,3.3,2.5,2.1,1.8,1.7,1.3,1.1],
				unstaged: [33,20.9,14.9,11.5,9.7,7.9,6.9,6.2,5.7,5.7],
			},
			_75: {
				localized: [53.6,38.6,28.8,22.9,18.7,15.9,13.5,11.8,10.1,8.7],
				regional: [29.3,16.5,10.6,7.7,5.8,4.5,3.5,2.9,2.3,2],
				distant: [12.9,5.4,3.1,2.2,1.5,1.1,1.1,1.1,1.1,0.9],
				unstaged: [21.6,12.4,7.9,5.3,3.6,2.7,2.3,2.1,2.1,2.1],
			}
		},
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
				a4: 0,
				a3: 0,
				a2: -0.035387700954818246,
				a1: 2.755495605593772,
				a0: 21.315710783157186
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.02876177070106989,
				a1: 2.180038650532081,
				a0: 4.98957497313738
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.02142862434732118,
				a1: 1.557052412383845,
				a0: 5.018776796320715
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.015956220317955294,
				a1: 1.0788249490739281,
				a0: 8.66452783410595
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.012575370356834092,
				a1: 0.7883701388753073,
				a0: 10.865243758647317
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.010916532909012844,
				a1: 0.6610306918828673,
				a0: 10.733856655674208
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.009634136298194318,
				a1: 0.5590567993482853,
				a0: 11.025062287023129
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.008946427372487853,
				a1: 0.5156873169961946,
				a0: 10.285925034637039
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.00784495335377533,
				a1: 0.41699409922859604,
				a0: 11.481578751534686
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.00700417032825823,
				a1: 0.3477473877154969,
				a0: 12.001425333462809
			}
		],
		internalized_survival_curves: true
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
				a4: 0,
				a3: 0,
				a2: 0.00035346086972617985,
				a1: -0.23964119102907094,
				a0: 100.32765963850517
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.005244320908561639,
				a1: -0.7493000271538988,
				a0: 104.67759529261198
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.008294078094183588,
				a1: -1.0681337772774968,
				a0: 106.82732734182738
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.010511185204710616,
				a1: -1.3100705869978653,
				a0: 109.24198963916885
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.011615672284763123,
				a1: -1.4348641063031145,
				a0: 109.85693237281222
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.012747898712188288,
				a1: -1.5684976135296604,
				a0: 111.59270604328694
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.013658756085241919,
				a1: -1.6742285058092394,
				a0: 112.94051793565149
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.014237177869509843,
				a1: -1.7481333737719926,
				a0: 113.90130715927756
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.01455490866058251,
				a1: -1.7925917354802474,
				a0: 114.48628924793366
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.014841777898020325,
				a1: -1.8335463500448754,
				a0: 115.01541423970552
			}
		],
		internalized_survival_curves: true
	},
	rectal_cancer: {
		approved_drugs_name: 'colorectal',
		survival_curves_id: '31',
		description: "",
		information_subtype: "rectal",
		survival_curves_coefficients: [
			{
				a4: 0,
				a3: 0,
				a2: -0.00722548195767081,
				a1: 0.6432368025488855,
				a0: 79.13120350934504
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.008355072161968513,
				a1: 0.824229689712751,
				a0: 64.96289887102304
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.008900261894904338,
				a1: 0.8884206312123056,
				a0: 57.56796140232783
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.007832691049760365,
				a1: 0.7757147654372186,
				a0: 55.92632736094095
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.006453222728264096,
				a1: 0.6218788621388696,
				a0: 56.66418824364549
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.00645765705732082,
				a1: 0.6080147714099112,
				a0: 55.13473564800893
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.005335232826774838,
				a1: 0.46599080220978006,
				a0: 57.429410710699145
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.007373970733428603,
				a1: 0.6911740547229933,
				a0: 50.09693921471631
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.006867232268196299,
				a1: 0.6193662297077469,
				a0: 51.30248830148848
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.008011068673302923,
				a1: 0.731841857582643,
				a0: 47.94959157962246
			}
		],
		internalized_survival_curves: true
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
				a4: 0,
				a3: 0,
				a2: 0.0003428571428570337,
				a1: -0.1873142857142763,
				a0: 66.88377142857128
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.0001714285714285585,
				a1: -0.05365714285714161,
				a0: 40.031885714285686
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0003428571428571378,
				a1: 0.027314285714285135,
				a0: 29.256228571428593
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.0009142857142856453,
				a1: -0.12617142857142108,
				a0: 29.930057142856953
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.0014857142857141736,
				a1: -0.22502857142855925,
				a0: 31.616342857142552
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.0020571428571427575,
				a1: -0.3038857142856976,
				a0: 32.92262857142795
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.002285714285714169,
				a1: -0.33542857142855287,
				a0: 32.905142857142195
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.00217142857142838,
				a1: -0.3396571428571242,
				a0: 32.84388571428532
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.0021714285714284354,
				a1: -0.35965714285712214,
				a0: 33.42388571428499
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.0010285714285713232,
				a1: -0.22194285714284437,
				a0: 28.791314285713923
			}
		],
		internalized_survival_curves: true
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
				a4: 0,
				a3: 0,
				a2: 0.021542857142855976,
				a1: -2.8029142857141305,
				a0: 135.6469714285666
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.02497142857142709,
				a1: -3.2160571428569638,
				a0: 131.54468571428063
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.021199999999998553,
				a1: -2.8155999999998427,
				a0: 115.86319999999608
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.019485714285712774,
				a1: -2.5790285714284273,
				a0: 104.44434285713994
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.019771428571427663,
				a1: -2.688457142856992,
				a0: 108.27748571428017
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.02045714285714162,
				a1: -2.7830857142855585,
				a0: 110.12502857142397
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.019942857142855708,
				a1: -2.742114285714132,
				a0: 108.40937142856765
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.020057142857141663,
				a1: -2.75788571428556,
				a0: 107.95062857142388
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.01611428571428508,
				a1: -2.263771428571301,
				a0: 91.67725714285196
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.01645714285714206,
				a1: -2.331085714285584,
				a0: 93.7810285714238
			}
		],
		internalized_survival_curves: true
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
				a4: 0,
				a3: 0,
				a2: -0.001417752851576401,
				a1: 0.11438315754936661,
				a0: 96.07114013116583
			},	
			{
				a4: 0,
				a3: 0,
				a2: -0.0015416356458055058,
				a1: 0.10265197686259576,
				a0: 95.48476317040209
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0012663489998190683,
				a1: 0.054401265684206494,
				a0: 95.94687374214615
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0012093092019422325,
				a1: 0.039389410230449146,
				a0: 95.65604869583399
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0012501922438972121,
				a1: 0.03826518114914901,
				a0: 95.20069025894801
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0011507083009343715,
				a1: 0.027045675165527576,
				a0: 94.93273672954848
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0010203628043365578,
				a1: 0.012322422038278035,
				a0: 94.92064029703295
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.000984490506541591,
				a1: 0.011132663007115155,
				a0: 94.62624806391791
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0012093092019422533,
				a1: 0.03938941023045073,
				a0: 93.55604869583398
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0015301621992767772,
				a1: 0.07851153116103783,
				a0: 92.33604044712382
			}
		],
		internalized_survival_curves: true
	},
	multiple_myeloma: {
		approved_drugs_name: 'multiple-myeloma',
		survival_curves_id: '89',
		description: "Multiple myeloma affects a type of white blood cells called plasma cells, and decreases the body's ability to fight infections.",
		information_name: "myeloma",
		information_subtype: "myeloma",
		survival_curves_coefficients: [
			{
				a4: 0,
				a3: 0,
				a2: -0.006944869775270368,
				a1: 0.45552096354619165,
				a0: 85.89493962714565
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.007530789188076925,
				a1: 0.3927786845713882,
				a0: 84.64348981950117
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.008076799639374077,
				a1: 0.35481322215720174,
				a0: 82.85711337258938
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0072662728851803915,
				a1: 0.15391929048032715,
				a0: 86.47229351118844
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.008366402975165388,
				a1: 0.19003229651360068,
				a0: 83.42967674509912
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.006589082240879604,
				a1: -0.07481882103617572,
				a0: 87.89190748463898
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.008305596319261942,
				a1: 0.054122508456614676,
				a0: 82.8735210828311
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.006599469840437605,
				a1: -0.18209122713320236,
				a0: 86.85491965534757
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.005351181711944875,
				a1: -0.36922355650088007,
				a0: 90.05954301151395
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.004314075442391374,
				a1: -0.5263588198416598,
				a0: 92.79358914205275
			}
		],
		internalized_survival_curves: true
	},
	ovarian_cancer: {
		approved_drugs_name: 'ovarian',
		survival_curves_id: '61',
		description: "",
		information_subtype: "",
		survival_curves_coefficients: [
			{
				a4: 0,
				a3: 0,
				a2: -0.00574844476754266,
				a1: 0.1501893366733752,
				a0: 97.35613630943995
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.008073605351143875,
				a1: 0.169949254225963,
				a0: 95.46170213821537
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.009625371630191781,
				a1: 0.13653671254831623,
				a0: 95.53122682530847
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.010416450719579202,
				a1: 0.06573366389912282,
				a0: 96.69313144389146
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.010464887913125956,
				a1: -0.023301554521359714,
				a0: 97.67887496721517
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.01045083798494667,
				a1: -0.09928847102185037,
				a0: 98.88649268745542
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.010373067266677194,
				a1: -0.1538685921594807,
				a0: 99.53628625471819
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.010054211952162911,
				a1: -0.22140500274018318,
				a0: 100.52583285017377
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.009458399743608903,
				a1: -0.3030874617951228,
				a0: 101.6607402407073
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.009085517692557554,
				a1: -0.35953542629192975,
				a0: 102.44017277310422
			}
		],
		internalized_survival_curves: true
	},
	prostate_cancer: {
		approved_drugs_name: 'prostate',
		survival_curves_id: '66',
		description: "",
		information_subtype: "prostate",
		survival_curves_coefficients: [
			{
				a4: 0,
				a3: 0,
				a2: -0.0006349158575333913,
				a1: 0.1460994349931107,
				a0: 92.80872153922142
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.007705667895814283,
				a1: 1.0363003575653278,
				a0: 65.18577014807079
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.010344782194692037,
				a1: 1.3944741314957463,
				a0: 52.93580290808529
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.009575743764764777,
				a1: 1.3276069380449738,
				a0: 53.74443395624319
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.00890430073990256,
				a1: 1.2689369979126202,
				a0: 54.43574304374853
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.009469578829588654,
				a1: 1.3528060828779698,
				a0: 51.30948132017855
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.00825703827646218,
				a1: 1.2501894557405115,
				a0: 52.5041959277052
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.009120440760269632,
				a1: 1.3620266856026875,
				a0: 48.82900622225394
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.008514170483706396,
				a1: 1.3107183720339588,
				a0: 49.42636352601723
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.008209146807526935,
				a1: 1.2820419625843906,
				a0: 49.7397666878467
			}
		],
		internalized_survival_curves: true
	},
	small_intestine_cancer: {
		approved_drugs_name: 'gist',
		survival_curves_id: '19',
		description: "",
		information_name: "small-intestine",
		information_subtype: "small-intestine",
		survival_curves_coefficients: [
			{
				a4: 0,
				a3: 0,
				a2: -0.012342857142856545,
				a1: 1.1233142857142209,
				a0: 66.4642285714302
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.013314285714285168,
				a1: 1.1873714285713608,
				a0: 60.64354285714484
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.015714285714285126,
				a1: 1.458571428571345,
				a0: 49.6171428571456
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.01662857142857055,
				a1: 1.564742857142775,
				a0: 43.867085714287306
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.015657142857142148,
				a1: 1.4206857142856368,
				a0: 46.607771428573386
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.016228571428570815,
				a1: 1.4395428571427789,
				a0: 45.741485714288075
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.016685714285713527,
				a1: 1.48262857142849,
				a0: 43.356457142859135
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.016914285714284993,
				a1: 1.4741714285713439,
				a0: 43.233942857145195
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.016571428571428015,
				a1: 1.4068571428570655,
				a0: 44.23771428571679
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.017885714285713394,
				a1: 1.538228571428483,
				a0: 39.91325714285908
			}
		],
		internalized_survival_curves: true
	},
	stomach_cancer: {
		approved_drugs_name: 'stomach',
		survival_curves_id: '18',
		description: "",
		information_subtype: "stomach",
		survival_curves_coefficients: [
			{
				a4: 0,
				a3: 0,
				a2: 0.0169553395515063,
				a1: -1.9462052890305466,
				a0: 112.54272061247917
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.02305753954932266,
				a1: -2.604282717761359,
				a0: 114.41426229773674
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.024623137466705636,
				a1: -2.8097301772148366,
				a0: 114.72088104426857
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.02663848191981133,
				a1: -3.040254588799666,
				a0: 117.68363567027781
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.026175700834428106,
				a1: -2.9937053113555896,
				a0: 114.50870943405394
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.027052247012818054,
				a1: -3.0955783242151718,
				a0: 115.81842663955956
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.0274675732089551,
				a1: -3.1482339392418455,
				a0: 116.52073068887015
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.027858937133515393,
				a1: -3.198094071677631,
				a0: 117.1316528212445
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.02794371627876524,
				a1: -3.2219459150526815,
				a0: 117.46165871176245
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.02592023887523709,
				a1: -2.9990717323579847,
				a0: 111.11412725569993
			}
		],
		internalized_survival_curves: true
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
				a4: 0,
				a3: 0,
				a2: -0.003387487956849927,
				a1: 0.16035964574864423,
				a0: 97.78763417797194
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0026939711983086367,
				a1: 0.1019164756906065,
				a0: 97.65560067246517
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0032833207044939416,
				a1: 0.15714450093152352,
				a0: 95.8222198886525
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0036934178666267192,
				a1: 0.1749871887013046,
				a0: 95.60114079595768
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0038917308830186403,
				a1: 0.1860454545604734,
				a0: 95.43147071459853
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.00403522007419857,
				a1: 0.19080449068512856,
				a0: 95.30903964705868
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.004062959421571449,
				a1: 0.19964447860642204,
				a0: 94.78820871022816
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.0041624433645342795,
				a1: 0.21086398459004455,
				a0: 94.4561622396276
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.004030536764805442,
				a1: 0.19880885185162905,
				a0: 94.61157888713879
			},
			{
				a4: 0,
				a3: 0,
				a2: -0.004227616112833232,
				a1: 0.2182256111536689,
				a0: 94.06221045588552
			}
		],
		internalized_survival_curves: true
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
				a4: 0,
				a3: 0,
				a2: 0.01141011664000402,
				a1: -1.4122536309501865,
				a0: 100.36937368840515
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.015748433897873726,
				a1: -1.7755715084770598,
				a0: 90.72270909542951
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.019323728070283597,
				a1: -2.11549751457092,
				a0: 89.71635091467547
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.021604810634550997,
				a1: -2.348860614819968,
				a0: 90.23036312415978
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.024151107724798226,
				a1: -2.6436952884346945,
				a0: 94.95982268513221
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.026297335237727815,
				a1: -2.884446793162475,
				a0: 98.80018609145043
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.02451418372821834,
				a1: -2.6882354077924053,
				a0: 91.9352154366726
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.025226150781888723,
				a1: -2.783448614202612,
				a0: 93.50380651541687
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.02570102822536313,
				a1: -2.8544614782342945,
				a0: 94.7117484545144
			},
			{
				a4: 0,
				a3: 0,
				a2: 0.026075190051424446,
				a1: -2.9143413707696113,
				a0: 95.71077269514805
			}
		],
		internalized_survival_curves: true
	},
});
