import { ChartDataset } from 'chart.js';
import { Line } from 'react-chartjs-2';

export default function LineGraph(xAxisLabels:string[], dataSets:ChartDataset<"line", number[]>[], cancerName:string) {
    return (
        <Line
            data={{
                datasets: dataSets,
                labels: xAxisLabels
            }}
            options={{
                // scales: {
                //     yAxes: {
                //         ticks: {
                //             beginAtZero: true
                //         },
                //         scaleLabel: {
                //             display: true,
                //             labelString: 'Percent Survival'
                //         }
                //     },
                //     xAxes: {
                //         scaleLabel: {
                //             display: true,
                //             labelString: 'Years Since Diagnosis'
                //         }
                //     }
                // },
            }}
            title={`Relative Survival by Time for ${cancerName}`}
        />
    );
}