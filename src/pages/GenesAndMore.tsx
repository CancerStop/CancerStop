import { useState } from 'react';
import { Button } from '@mui/material';
import '../styles/pageStyles/GenesAndMorePageStyles.css';
import SubHeader from '../components/SubHeader';

export default function GenesAndMore() {

	const [geneInfoTerm, setGeneInfoTerm] = useState('');
	const [variantInfoTerm, setVariantInfoTerm] = useState('');

	const searchVariantInfo = () => {
		if(variantInfoTerm)
			window.open(`https://www.ncbi.nlm.nih.gov/clinvar/?term=` + variantInfoTerm + (geneInfoTerm ? `%20${geneInfoTerm}` : ""));
	}

	const searchGeneInfo = () => {
		if(geneInfoTerm)
			window.open(`https://www.ncbi.nlm.nih.gov/gene/?term=${geneInfoTerm}`);
	}

	return (
		<div className="genesAndMore page">
			<SubHeader>Genes & More</SubHeader>

			<div className="genesAndMore_formArea">
				<div className="genesAndMore_geneInfoForm">
					<div className="genesAndMore_termInputWrapper">
						<form onSubmit={e => {e.preventDefault(); searchGeneInfo();}}>
							<input
								placeholder="Enter gene info like BCOR or NPM1"
								value={geneInfoTerm}
								onChange={e => setGeneInfoTerm(e.target.value)}
								className="genesAndMore_termInput"
							/>
						</form>
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
						<form onSubmit={e => {e.preventDefault(); searchVariantInfo();}}>
							<input
								placeholder="Enter variant info like c.4009C>T"
								value={variantInfoTerm}
								onChange={e => setVariantInfoTerm(e.target.value)}
								className="genesAndMore_termInput"
							/>
						</form>
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
