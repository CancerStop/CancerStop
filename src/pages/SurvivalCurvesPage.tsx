import * as React from 'react';
import SubHeader from '../components/SubHeader';
import { CancerData } from '../data/CancerData';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import '../styles/pageStyles/SurvivalCurvesStyles.css'; 

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const Input = styled(MuiInput)`
width:42px;
`;

export const options = {
	plugins: {
		legend: {
			position: 'top' as const,
		}
	},
    scales: {
        y: {
            suggestedMin: 0,
            suggestedMax: 100
        }
    }
};

const years_since_diagnosis = [0,1,2,3,4,5,6,7,8,9,10];

export default function SurvivalCurvesPage(cancer: CancerData) {
    const [age, setAge] = React.useState<any>(
        0,
    );
    const [percentages, setPercentages] = React.useState<Array<number>>(
        [100]
    );

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let curr_age = Number(event.target.value);
        setAge(event.target.value === '' ? '' : curr_age);

        let tempData = [100];
        for (let i = 1; i < 11; i++) {
            tempData[i] = (cancer.survival_curves_coefficients[i - 1].fourth_coeff * (curr_age ** 4)) + (cancer.survival_curves_coefficients[i - 1].third_coeff * (curr_age ** 3)) + (cancer.survival_curves_coefficients[i - 1].second_coeff * (curr_age ** 2)) + (cancer.survival_curves_coefficients[i - 1].first_coeff * curr_age) + cancer.survival_curves_coefficients[i - 1].y_intercept;
        }
        setPercentages(tempData);
    };

    const handleSliderChange = (event: Event, newValue: number | number[] | any) => {
        let curr_age = newValue;
        setAge(curr_age);
        let tempData = [100];
        for (let i = 1; i < 11; i++) {
            tempData[i] = (cancer.survival_curves_coefficients[i - 1].fourth_coeff * (curr_age ** 4)) + (cancer.survival_curves_coefficients[i - 1].third_coeff * (curr_age ** 3)) + (cancer.survival_curves_coefficients[i - 1].second_coeff * (curr_age ** 2)) + (cancer.survival_curves_coefficients[i - 1].first_coeff * curr_age) + cancer.survival_curves_coefficients[i - 1].y_intercept;
        }
        setPercentages(tempData);
    };

    const handleBlur = () => {
        if (age < 0) {
            setAge(0);
        } else if (age > 100) {
            setAge(100);
        }
    };

    if (cancer.internalized_survival_curves) {
        return () => (
            <div>
                <SubHeader>{cancer.name + ' - Survival Curves'}</SubHeader>

                <div className="survivalcurves_line">
                    <Line options={options} data={{
                        labels: years_since_diagnosis,
                        datasets: [
                            {
                                label: 'Percent Survival',
                                data: percentages,
                                borderColor: 'rgb(255, 99, 132)',
                                backgroundColor: 'rgba(255, 99, 132, 0.5)'
                            }
                        ]
                    }} />
                </div>

                <Box>
                    <Typography id="input-slider" gutterBottom>
                        Age
                    </Typography>

                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs>
                            <Slider
                                value = {typeof age == 'number' ? age : 0}
                                onChange={handleSliderChange}
                                aria-labelledby='input-slider'
                                valueLabelDisplay='on'
                            />
                        </Grid>

                        <Grid item>
                            <Input
                                value={age}
                                size="small"
                                onChange={handleInputChange}
                                onBlur={handleBlur}
                                inputProps={{
                                    step: 10,
                                    min: 10,
                                    max: 100,
                                    type: 'number',
                                    'aria-labelledby': 'input-slider',
                                }}
                            />
                        </Grid>
                    </Grid>
                </Box>
            </div>
        );
    } else {
        return () => (
            <div>NOT YET IMPLEMENTED</div>
        );
    }
}
