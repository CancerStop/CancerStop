import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import '../../style.css';

export default function GenesAndMoreForm() {
    const [geneInfoTerm, setGeneInfoTerm] = useState("");
    const [variantInfoTerm, setVariantInfoTerm] = useState("");

    return (
        <div className="genesAndMorePage">
            <h1 style={{ textAlign: "center", padding: 30 }}>Genes & More</h1>

            <div className="genesAndMorePage_geneInfoForm">
                <div className="genesAndMorePage_termInputWrapper">
                    <input
                        placeholder="Enter gene info like BCOR or NPM1"
                        value={geneInfoTerm}
                        onChange={e => setGeneInfoTerm(e.target.value)}
                        className="genesAndMorePage_termInput"
                    />
                </div>

                <div className="genesAndMorePage_searchButtonContainer">
                    <Button
                        className="genesAndMorePage_searchButton"
                        variant="contained"
                    >
                        <a
                            href={`https://www.ncbi.nlm.nih.gov/gene/?term=${geneInfoTerm}%20AND%20HOMO%20SAPIENS[porgn:__txid9606]`}
                            className="genesAndMorePage_searchButton"
                        >
                            Search Gene Info
                        </a>
                    </Button>
                </div>
            </div>

            <div className="genesAndMorePage_geneInfoForm">
                <div>
                    <input
                        placeHolder="Enter variant info like c.4009C>T"
                        value={variantInfoTerm}
                        onChange={e => setVariantInfoTerm(e.target.value)}
                        className="genesAndMorePage_termInput"
                    />
                </div>

                <div className="genesAndMorePage_searchButtonContainer">
                    <Button
                        className="genesAndMorePage_searchButton"
                        variant="contained"
                    >
                        <a
                            href={`https://www.ncbi.nlm.nih.gov/clinvar/?term=${variantInfoTerm}`}
                            className="genesAndMorePage_searchButton"
                        >
                            Search Variant Info
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
}