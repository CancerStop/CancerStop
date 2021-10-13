import { useState } from 'react';
import Button from "@material-ui/core/Button";
import '../../style.css';
import SubHeader from '../../components/SubHeader';

export default function GenesAndMore() {
    const geneInfoLinkTemplate = 'https://www.ncbi.nlm.nih.gov/gene/?term=';
    const variantInfoLinkTemplate = 'https://www.ncbi.nlm.nih.gov/clinvar/?term=';

    const [geneInfoTerm, setGeneInfoTerm] = useState('');
    const [variantInfoTerm, setVariantInfoTerm] = useState('');

    return (
        <div className='genesAndMore page'>
            <SubHeader text='Genes & More' />

            <div className='genesAndMore_formArea'>
                <div className="genesAndMore_geneInfoForm">
                    <div className="genesAndMore_termInputWrapper">
                        <input
                            placeholder="Enter gene info like BCOR or NPM1"
                            value={geneInfoTerm}
                            onChange={e => setGeneInfoTerm(e.target.value)}
                            className="genesAndMore_termInput"
                        />
                    </div>

                    <div className="genesAndMore_searchButtonContainer">
                        <Button
                            className="genesAndMore_searchButton"
                            variant="contained"
                        >
                            <a
                                href={`https://www.ncbi.nlm.nih.gov/gene/?term=${geneInfoTerm}`}
                                target="_blank"
                                className="genesAndMore_searchButton"
                            >
                                Search Gene Info
                            </a>
                        </Button>
                    </div>
                </div>

                <div className="genesAndMore_geneInfoForm">
                    <div>
                        <input
                            placeHolder="Enter variant info like c.4009C>T"
                            value={variantInfoTerm}
                            onChange={e => setVariantInfoTerm(e.target.value)}
                            className="genesAndMore_termInput"
                        />
                    </div>

                    <div className="genesAndMore_searchButtonContainer">
                        <Button
                            className="genesAndMore_searchButton"
                            variant="contained"
                        >
                            <a
                                target="_blank"
                                href={`https://www.ncbi.nlm.nih.gov/clinvar/?term=${variantInfoTerm}`}
                                className="genesAndMore_searchButton"
                            >
                                Search Variant Info
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}