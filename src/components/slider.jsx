import React, { useState } from 'react';
import '../style.css';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

export default function SliderComponent() {
    const [age, setAge] = useState(0);

    const handleSliderChange = (event, newValue) => {
        setAge(newValue);
    }

    const handleInputChange = (event) => {
        setAge(event.target.value === '' ? '' : Number(event.target.value));
    }

    const handleBlur = () => {
        if (age < 0) {
            setAge(0);
        } else if (age > 100) {
            setAge(100);
        }
    }

    return (
        <div className="sliderComponent">
            <div className="sliderComponent_changeAgeText">
                <Typography id="input-slider" glutterBottom>
                    Change the age
                </Typography>
            </div>

            <div className="sliderComponent_mainGrid">
                <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                        <Slider
                            className="sliderComponent_ageSlider"
                            value={typeof age === 'number' ? age : 0}
                            valueLabelDisplay="auto"
                            marks
                            step={1}
                            min={0}
                            max={100}
                            onChange={handleSliderChange}
                            aria-labelled="input-slider"
                        />
                    </Grid>

                    <Grid item>
                        <Input
                            className="sliderComponent_ageInput"
                            value={age}
                            margin="dense"
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            inputProps={{
                                step: 1,
                                min: 0,
                                max: 100,
                                type: 'number',
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}