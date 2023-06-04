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
// import DonatePage from "./pages/DonatePage";
import GenesAndMore from "./pages/GenesAndMore";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFound";
import ClinicalTrialsPage from "./pages/ClinicalTrialsPage";

import { cancerData } from "./data/CancerData";
import SurvivalCurvesPage from "./pages/SurvivalCurvesPage";
import React from "react";

import Survivalcurvetrial from "./survivalcurvetrial";

export default function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/faq" component={FaqPage} />
          <Route path="/sct" component={Survivalcurvetrial} />
          <Route path="/contact-us" component={ContactUsPage} />
          <Route path="/genes-and-more" component={GenesAndMore} />
          <Route path="/search" component={SearchPage} />
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
              component={SurvivalCurvesPage(cancer)}
            />
          ))}

          <Route component={NotFoundPage} />
        </Switch>
      </Router>

      <Router>
        <Footer />
      </Router>
    </div>
  );
}
