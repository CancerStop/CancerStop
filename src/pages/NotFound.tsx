import '../styles/pageStyles/NotFoundPageStyles.css';
import SubHeader from '../components/SubHeader';

export default function NotFoundPage() {
	return (
		<div className="notFoundPage page">
			<SubHeader text="404 Not Found" />
			<a href="/">Return to the home page</a>
		</div>
	);
}
