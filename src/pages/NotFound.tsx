import '../styles/pageStyles/NotFoundPageStyles.css';
import SubHeader from '../components/SubHeader';

export default function NotFoundPage() {
	return (
		<div className="notFoundPage page">
			<SubHeader>404 Not Found</SubHeader>
			<a href="/" id="returnLink">Return to the home page</a>
		</div>
	);
}
