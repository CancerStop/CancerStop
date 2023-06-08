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

//This isn't a component, it is called with cancerdata and retuns a component, which is different based on the cancerdata (if isinternal, component with graph and state, otherwise component that is just a div with NYI)
//so it should be a template
export default function SurvivalCurvesTemplate(cancer: CancerData) {
    if (cancer.internalized_survival_curves) return function SurvivalCurvesPage(){

        const [age, setAge] = React.useState(0);

        //Percentage array is derived state, and comes from evaluating the polynomial
        const percentages = [100];
        for (let i = 1; i < 11; i++) {
            percentages[i] = (cancer.survival_curves_coefficients[i - 1].a4 * (age ** 4)) + (cancer.survival_curves_coefficients[i - 1].a3 * (age ** 3)) + (cancer.survival_curves_coefficients[i - 1].a2 * (age ** 2)) + (cancer.survival_curves_coefficients[i - 1].a1 * age) + cancer.survival_curves_coefficients[i - 1].a0;
        }

        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            let newAge:number;
            //Validate input
            if(event.target.value === "" || isNaN(Number(event.target.value))){
                event.target.value = "0";
                newAge = 0;
            } else {
                newAge = Math.min(Math.max(Math.round(Number(event.target.value)), 0), 100);
                event.target.value = newAge.toString();
            }
            setAge(newAge);
        };

        const handleSliderChange = (event: Event, newValue:number | number[]) => {
            if(typeof newValue === "number"){
                //No validation necessary
                setAge(newValue);
            } else {
                //not sure when this can happen, just add an error to watch for it
                console.error(newValue);
                throw new Error(`slider change returned number[]`);
            }
        };

        return (
            <div className="survivalCurvesPage">
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

                    <Grid container spacing={2} alignItems="center">
                        <Grid item>
                            <Typography id="input-slider" gutterBottom>
                                Age
                            </Typography>
                        </Grid>

                        <Grid item xs>
                            <Slider
                                value={age}
                                onChange={handleSliderChange}
                                aria-labelledby='input-slider'
                                valueLabelDisplay='off'
                            />
                        </Grid>

                        <Grid item>
                            <Input
                                value={age}
                                size="small"
                                onChange={handleInputChange}
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

                <h3 style={{fontSize: "100%"}}>Survival curves presented are an extrapolation from the data presented online at <a href="https://seer.cancer.gov/statistics-network/explorer/application.html">NCI SEER</a>. These are only indicators for research use. No claim or responsibility is made whatsoever.</h3>
                <p style={{fontSize: "80%"}}>Relative survival is defined as the ratio of the proportion of observed survivors in a cohort of cancer patients to the proportion of expected survivors in a comparable set of cancer free individuals. <a href="https://seer.cancer.gov/seerstat/508_WebHelp/Relative_Survival.htm">More Information</a></p>
            </div>
        );
    }
    else return function SurvivalCurvesPage(){
        return (
            <div>NOT YET IMPLEMENTED</div>
        );
    }
}
