import SubHeader from './components/SubHeader';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'

  import { Line } from 'react-chartjs-2';

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

  const Input = styled(MuiInput)`
  width: 42px;
`;

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

const years_since_diagnosis = [0,1,2,3,4,5,6,7,8,9,10];

const coefficients = [
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
];

export default function Survivalcurvetrial() {
    const [age, setAge] = React.useState<any>(
        0,
      );

      const [data, setData] = React.useState<Array<number>>(
        [100]
      );

      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        let curr_age = Number(event.target.value);

        setAge(event.target.value === '' ? '' : curr_age);

        let tempData = [100];
        for (let i = 1; i < 11; i++) {
          tempData[i] = (coefficients[i - 1].fourth_coeff * (curr_age ** 4)) + (coefficients[i - 1].third_coeff * (curr_age ** 3)) + (coefficients[i - 1].second_coeff * (curr_age ** 2)) + (coefficients[i - 1].first_coeff * curr_age) + coefficients[i - 1].y_intercept;
        }
        setData(tempData);
      };
    
      const handleSliderChange = (event: Event, newValue: number | number[] | any) => {
        let curr_age = newValue;
        setAge(curr_age);
        let tempData = [100];
        for (let i = 1; i < 11; i++) {
          tempData[i] = (coefficients[i - 1].fourth_coeff * (curr_age ** 4)) + (coefficients[i - 1].third_coeff * (curr_age ** 3)) + (coefficients[i - 1].second_coeff * (curr_age ** 2)) + (coefficients[i - 1].first_coeff * curr_age) + coefficients[i - 1].y_intercept;
        }
        setData(tempData);
      };
    
      const handleBlur = () => {
        if (age < 0) {
          setAge(0);
        } else if (age > 100) {
          setAge(100);
        }
      };

  return (
    <div>
        <SubHeader>Survival Curve</SubHeader>
        <Line options={options} data={{
          labels: years_since_diagnosis,
          datasets: [
            {
              label: 'Percent Survival',
              data: data,
              borderColor: 'rgb(255, 99, 132)',
              backgroundColor: 'rgba(255, 99, 132, 0.5)',
            }
          ]
        }} />

        <Box>
        <Typography id="input-slider" gutterBottom>
          Age
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              value={typeof age === 'number' ? age : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
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
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
        </Grid>
      </Box>
    </div>
  )
}
