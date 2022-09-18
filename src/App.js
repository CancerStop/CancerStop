import './styles/GlobalStyles.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import CancerPageTemplate from './templates/CancerPageTemplate';
import CancerSpecificClinicalTrialsTemplate from './templates/CancerSpecificClinicalTrialsTemplate.jsx';

import HomePage from './pages/HomePage';
import FaqPage from './pages/FaqPage';
import ContactUsPage from './pages/ContactUsPage';
import DonatePage from './pages/DonatePage';
import GenesAndMore from './pages/GenesAndMore';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFound';
import ClinicalTrialsPage from './pages/ClinicalTrialsPage.jsx';

import { cancerData } from './data/CancerData.ts';
import SurvivalCurvesPage from './pages/SurvivalCurvesPage';

export default function App() {
	return (
		<div className="app">
			<Router>
				<Header />

				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/faq" component={FaqPage} />
					<Route
						path="/contact-us"
						component={ContactUsPage}
					/>
					<Route path="/donate" component={DonatePage} />
					<Route
						path="/genes-and-more"
						component={GenesAndMore}
					/>
					<Route path="/search" component={SearchPage} />
					<Route
						path="/clinical-trials"
						component={ClinicalTrialsPage}
						exact
					/>

					{Object.entries(cancerData).map(
						([name, cancer]) => (
							<Route
								key={name}
								path={cancer.url}
								component={CancerPageTemplate(
									cancer
								)}
								exact
							/>
						)
					)}

					{Object.entries(cancerData).map(
						([name, cancer]) => (
							<Route
								key={name}
								path={`${cancer.url}/clinical-trials`}
								component={CancerSpecificClinicalTrialsTemplate(
									cancer
								)}
							/>
						)
					)}

					{Object.entries(cancerData).map(
						([name, cancer]) => (
							<Route
								key={name}
								path={`${cancer.url}/survival-curves`}
								component={SurvivalCurvesPage(
									cancer
								)}
							/>
						)
					)}

					<Route component={NotFoundPage} />
				</Switch>
			</Router>

			<Router>
				<Footer />
			</Router>
		</div>
	);
}
