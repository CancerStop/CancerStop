import { useState } from "react";
import { Button } from "@mui/material";
import "../styles/pageStyles/GenesAndMorePageStyles.css";
import SubHeader from "../components/SubHeader";
import ControlledInput from "../components/ControlledInput";

export default function GenesAndMore() {
  const [geneInfoTerm, setGeneInfoTerm] = useState("");
  const [variantInfoTerm, setVariantInfoTerm] = useState("");

  const searchVariantInfo = () => {
    if (variantInfoTerm)
      window.open(
        `https://www.ncbi.nlm.nih.gov/clinvar/?term=` +
          variantInfoTerm +
          (geneInfoTerm ? `%20${geneInfoTerm}` : "")
      );
  };

  const searchGeneInfo = () => {
    if (geneInfoTerm)
      window.open(`https://www.ncbi.nlm.nih.gov/gene/?term=${geneInfoTerm}`);
  };

  return (
    <div className="genesAndMore page">
      <SubHeader>Genes & More</SubHeader>

      <div className="genesAndMore_formArea">
        <div className="genesAndMore_geneInfoForm">
          <div className="genesAndMore_termInputWrapper">
            <ControlledInput
              className="genesAndMore_termInput"
              value={geneInfoTerm}
              setValue={setGeneInfoTerm}
              placeholder="Enter gene info like BCOR or NPM1"
              onEnter={searchGeneInfo}
            />
          </div>

          <div className="genesAndMore_searchButtonContainer">
            <Button
              className="genesAndMore_searchButton"
              variant="contained"
              onClick={searchGeneInfo}
              disabled={geneInfoTerm === ""}
            >
              Search Gene Info
            </Button>
          </div>
        </div>

        <div className="genesAndMore_geneInfoForm">
          <div>
            <ControlledInput
              className="genesAndMore_termInput"
              value={variantInfoTerm}
              setValue={setVariantInfoTerm}
              placeholder="Enter variant info like c.4009C>T"
              onEnter={searchVariantInfo}
            />
          </div>

          <div className="genesAndMore_searchButtonContainer">
            <Button
              className="genesAndMore_searchButton"
              variant="contained"
              onClick={searchVariantInfo}
              disabled={variantInfoTerm === ""}
            >
              Search Variant Info
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
