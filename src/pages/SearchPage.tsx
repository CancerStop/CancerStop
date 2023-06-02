import '../styles/pageStyles/SearchPageStyles.css';
import SubHeader from '../components/SubHeader';
import { useEffect } from 'react';

export default function SearchPage() {
	useEffect(() => {
		//Add CSE script on first load
		const script = document.createElement('script');
		script.src =
			'https://cse.google.com/cse.js?cx=004715292727045167679:c87ei5ji6we';
		script.async = true;

		document.body.appendChild(script);
	}, []);
	return (
		<div className="searchPage">
			<SubHeader>PresciQure</SubHeader>
			<div className="searchPageContent">
				<div className="gcse-search">Loading...</div>
			</div>
		</div>
	);
}
