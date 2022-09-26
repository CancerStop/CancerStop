import SubHeader from '../components/SubHeader';
import { CancerData } from '../data/CancerData';
import '../styles/pageStyles/SurvivalCurvesStyles.css';
// import LineGraph from '../components/LineGraph';

export default function SurvivalCurvesPage(cancer:CancerData) {
	return () => (
		<div className="survivalCurvesPage page">
			<SubHeader text={cancer.name + "- Survival Curves"} />
			<div className="NYI">NYI</div>
			{/* <LineGraph></LineGraph> */}
		</div>
	);
}
