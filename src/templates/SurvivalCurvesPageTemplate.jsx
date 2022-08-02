import LineGraph from '../components/LineGraph';
import SubHeader from '../components/SubHeader';

export default function SurvivalCurvesPageTemplate(
	xAxisLabels,
	dataSets,
	cancerName
) {
	return (
		<div className="survivalCurvesPageTemplate">
			<SubHeader text={cancerName} />

			<LineGraph
				xAxisLabels={xAxisLabels}
				dataSets={dataSets}
				cancerName={cancerName}
			/>
		</div>
	);
}
