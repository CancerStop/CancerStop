import * as React from "react";
import SubHeader from "../components/SubHeader";
import { CancerData, SurvivalCurvesPoint } from "../data/CancerData";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import "../styles/pageStyles/SurvivalCurvesStyles.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

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
  width: 42px;
`;

const years_since_diagnosis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function SurvivalCurvesTemplate(cancer: CancerData) {
  if (cancer.internalized_survival_curves)
    return function SurvivalCurvesPage() {
      const [age, setAge] = React.useState(50);

      //Percentage array is derived state, and comes from evaluating the polynomial
      const all_stages = [100];
      const distant_data = [100];
      const localized_data = [100];
      const regional_data = [100];
      const unstaged_data = [100];

      const compute_data = (
        data: Array<number>,
        coefficients?: SurvivalCurvesPoint[]
      ) => {
        if (coefficients) {
          for (let i = 1; i < 11; i++) {
            data[i] =
              coefficients[i - 1].a2 * age ** 2 +
              coefficients[i - 1].a1 * age +
              coefficients[i - 1].a0;

            if (data[i] > 100) {
              data[i] = 100;
            }

            if (data[i] < 0) {
              data[i] = 0;
            }
          }
        }
      };

      compute_data(all_stages, cancer.survival_curves_coefficients);
      compute_data(localized_data, cancer.localized_curves_coefficients);
      compute_data(regional_data, cancer.regional_curves_coefficients);
      compute_data(unstaged_data, cancer.unstaged_curves_coefficients);
      compute_data(distant_data, cancer.distant_curves_coefficients);

      const handleInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
      ) => {
        let newAge: number;
        //Validate input
        if (event.target.value === "" || isNaN(Number(event.target.value))) {
          event.target.value = "0";
          newAge = 0;
        } else {
          newAge = Math.min(
            Math.max(Math.round(Number(event.target.value)), 0),
            100
          );
          event.target.value = newAge.toString();
        }
        setAge(newAge);
      };

      const handleSliderChange = (
        event: Event,
        newValue: number | number[]
      ) => {
        if (typeof newValue === "number") {
          setAge(newValue);
        } else {
          //not sure when this can happen, just add an error to watch for it
          console.error(newValue);
          throw new Error(`slider change returned number[]`);
        }
      };

      return (
        <div className="survivalCurvesPage">
          <SubHeader>{cancer.name + " - Survival Curves"}</SubHeader>

          <div className="survivalcurves_line">
            <Line
              options={{
                plugins: {
                  legend: {
                    position: "top",
                  },
                },
                scales: {
                  y: {
                    min: 0,
                    max: 100,
                  },
                },
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                  line: {
                    tension: 0.4,
                  },
                },
              }}
              data={{
                labels: years_since_diagnosis,
                datasets: [
                  {
                    label: "All Stages",
                    data: all_stages,
                    borderColor: "#8dd3c7",
                    backgroundColor: "#8dd3c7"
                  },
                  {
                    label: "Distant",
                    data: distant_data,
                    borderColor: "#fb9a99",
                    backgroundColor: '#fb9a99'
                  },
                  {
                    label: "Regional",
                    data: regional_data,
                    borderColor: "#8856a7",
                    backgroundColor: "#8856a7"
                  },
                  {
                    label: "Unstaged",
                    data: unstaged_data,
                    borderColor: "#80b1d3",
                    backgroundColor: "#80b1d3"
                  },
                  {
                    label: "Localized",
                    data: localized_data,
                    borderColor: "#7E6363",
                    backgroundColor: "#7E6363"
                  },
                ],
              }}
            />
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
                  aria-labelledby="input-slider"
                  valueLabelDisplay="off"
                  min={15}
                  max={75}
                />
              </Grid>

              <Grid item>
                <Input
                  value={age}
                  size="small"
                  onChange={handleInputChange}
                  inputProps={{
                    step: 10,
                    min: 15,
                    max: 75,
                    type: "number",
                    "aria-labelledby": "input-slider",
                  }}
                />
              </Grid>
            </Grid>
          </Box>

          <p style={{ fontSize: "80%", margin: "1% 8%" }}>
            The extrapolated line for each age can vary, and widely so, based on
            factors like the staging of cancer, race, and gender. Recent
            advances in genetic testing add additional complexity to these
            curves. These can influence the survival curves greatly. Data
            presented here is for Research Use Only, based on the NCI SEER data,
            and can change as new information emerges. Users are requested to
            visit the <a href="https://seer.cancer.gov/">NCI SEER</a> for full
            details. Relative survival is defined as the ratio of the proportion
            of observed survivors in a cohort of cancer patients to the
            proportion of expected survivors in a comparable set of cancer-free
            individuals.{" "}
            <a href="https://seer.cancer.gov/seerstat/508_WebHelp/Relative_Survival.htm">
              More Information.
            </a>{" "}
          </p>
        </div>
      );
    };
  else
    return function SurvivalCurvesPage() {
      return <div>NOT YET IMPLEMENTED</div>;
    };
}
