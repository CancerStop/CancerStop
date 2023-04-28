import { useState } from 'react';
import { Button } from '@mui/material';
import '../styles/pageStyles/GenesAndMorePageStyles.css';
import SubHeader from '../components/SubHeader';

export default function GenesAndMore() {
	const geneInfoLinkTemplate =
		'https://www.ncbi.nlm.nih.gov/gene/?term=';
	const variantInfoLinkTemplate =
		'https://www.ncbi.nlm.nih.gov/clinvar/?term=';

	const [geneInfoTerm, setGeneInfoTerm] = useState('');
	const [variantInfoTerm, setVariantInfoTerm] = useState('');

	const [variantInfoLink, setVariantInfoLink] = useState('');

	const handleVariantInfoSubmit = () => {
		if (geneInfoTerm !== '') {
			setVariantInfoLink(
				variantInfoLinkTemplate.concat(
					variantInfoTerm,
					'%20',
					geneInfoTerm
				)
			);
		} else {
			setVariantInfoLink(
				variantInfoLinkTemplate.concat(variantInfoTerm)
			);
		}
	};

	return (
		<div className="genesAndMore page">
			<SubHeader>Genes & More</SubHeader>

			<div className="genesAndMore_formArea">
				<div className="genesAndMore_geneInfoForm">
					<div className="genesAndMore_termInputWrapper">
						<input
							placeholder="Enter gene info like BCOR or NPM1"
							value={geneInfoTerm}
							onChange={(e) =>
								setGeneInfoTerm(e.target.value)
							}
							className="genesAndMore_termInput"
						/>
					</div>

					<div className="genesAndMore_searchButtonContainer">
						<Button
							className="genesAndMore_searchButton"
							variant="contained"
						>
							<a
								href={geneInfoLinkTemplate.concat(
									geneInfoTerm
								)}
								target="_blank"
								rel="noreferrer"
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
							placeholder="Enter variant info like c.4009C>T"
							value={variantInfoTerm}
							onChange={(e) =>
								setVariantInfoTerm(e.target.value)
							}
							className="genesAndMore_termInput"
						/>
					</div>

					<div className="genesAndMore_searchButtonContainer">
						<Button
							className="genesAndMore_searchButton"
							variant="contained"
							onClick={handleVariantInfoSubmit}
						>
							<a
								target="_blank"
								href={variantInfoLink}
								rel="noreferrer"
								className="genesAndMore_searchButton"
							>
								Search Variant Info
							</a>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
