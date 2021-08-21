import React, {useState} from 'react';

import '../../style.css';

import { withStyles } from "@material-ui/core/styles";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";

const AccordionSummary = withStyles({
    root: {
      backgroundColor: "rgba(0, 0, 0, .03)",
      borderBottom: "1px solid rgba(0, 0, 0, .125)",
      marginBottom: -1,
      minHeight: 56,
      "&$expanded": {
        minHeight: 56,
      },
    },
    content: {
      "&$expanded": {
        margin: "12px 0",
      },
    },
    expanded: {},
})(MuiAccordionSummary);

export default function SelectCancerPrompt() {
    return (
        <AccordionSummary
            style={{ overflow: "hidden" }}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography>Select a Cancer</Typography>
        </AccordionSummary>
    );
}