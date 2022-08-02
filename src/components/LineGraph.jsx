import { Line } from 'react-chartjs-2';

export default function LineGraph(xAxisLabels, dataSets, cancerName) {
    return (
        <Line
            data={{
                labels: {xAxisLabels}
                datasets: {dataSets},
            }}
            options={{
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Percent Survival'
                            }
                        }
                    ],
                    xAxes: [
                        {
                            scaleLabel: {
                                display: true,
                                labelString: 'Years Since Diagnosis'
                            }
                        }
                    ]
                },
                title: {
                    display: true,
                    text: `Relative Survival by Time for ${cancerName}`
                }
            }}
        />
    );
}