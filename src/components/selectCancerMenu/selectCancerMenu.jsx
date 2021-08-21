import React, { useState } from "react";
import "../../style.css";

import SelectCancerPrompt from "./selectCancerPrompt";
import ListOfCancerWithLinks from "./listOfCancersWithLinks";

import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

const Accordion = withStyles({
    root: {
        border: "1px solid rgba(0, 0, 0, .125)",
        boxShadow: "none",
        "&:not(:last-child)": {
            borderBottom: 0,
        },
        "&:before": {
            display: "none",
        },
        "&$expanded": {
            margin: "auto",
        },
        borderRadius: 15
    },
    expanded: {},
})(MuiAccordion);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiAccordionDetails);

export default function SelectCancerMenu() {
    const [expanded, setExpanded] = useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    return (
        <div className="selectCancerMenu">
            <Accordion
                className="selectCancerMenu_chooseACancerDropdown"
                square
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <SelectCancerPrompt />
                <AccordionDetails>
                    <ListOfCancerWithLinks />
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
