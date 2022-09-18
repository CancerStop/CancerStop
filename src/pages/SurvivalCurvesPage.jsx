import SubHeader from '../components/SubHeader';
import '../styles/pageStyles/SurvivalCurvesStyles.css';
// import LineGraph from '../components/LineGraph.tsx';

export default function SurvivalCurvesPage(cancer) {
	return () => (
		<div className="survivalCurvesPage page">
			<SubHeader text={cancer.name + "- Survival Curves"} />
			<div className="NYI">NYI</div>
			{/* <LineGraph></LineGraph> */}
		</div>
	);
}
