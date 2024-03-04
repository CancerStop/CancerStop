import "./styles/GlobalStyles.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import CancerPageTemplate from "./templates/CancerPageTemplate";

import HomePage from "./pages/HomePage";
import FaqPage from "./pages/FaqPage";
import ContactUsPage from "./pages/ContactUsPage";
import GenesAndMore from "./pages/GenesAndMore";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFound";
import ClinicalTrialsPage from "./pages/ClinicalTrialsPage";

import { cancerData } from "./data/CancerData";
import SurvivalCurvesTemplate from "./pages/SurvivalCurvesPage";


export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/contact-us" component={ContactUsPage} />
          <Route path="/genes-and-more" component={GenesAndMore} />
					<Redirect from="/search" to="/presciqure" />
          <Route path="/presciqure" component={SearchPage} />
          <Route path="/clinical-trials" component={ClinicalTrialsPage} exact />

          {Object.entries(cancerData).map(([name, cancer]) => (
            <Route
              key={name}
              path={cancer.url}
              component={CancerPageTemplate(cancer)}
              exact
            />
          ))}

          {Object.entries(cancerData).map(([name, cancer]) => (
            <Redirect
              key={name}
              from={`${cancer.url}/clinical-trials`}
              to={cancer.clinical_trials_link}
            />
          ))}

          {Object.entries(cancerData).map(([name, cancer]) => (
            <Route
              key={name}
              path={`${cancer.url}/survival-curves`}
              component={SurvivalCurvesTemplate(cancer)}
            />
          ))}

          <Route component={NotFoundPage} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}
