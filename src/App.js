import './styles/GlobalStyles.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import CancerPageTemplate from './templates/CancerPageTemplate';

import HomePage from './pages/generalPages/HomePage';
import FaqPage from './pages/generalPages/FaqPage';
import ContactUsPage from './pages/generalPages/ContactUsPage';
import DonatePage from './pages/generalPages/DonatePage';
import GenesAndMore from './pages/generalPages/GenesAndMore';
import SearchPage from './pages/generalPages/SearchPage';
import NotFoundPage from './pages/generalPages/NotFound';

import { CancerData } from './data/CancerData';

export default function App() {
    return (
        <div className='app'>
            <Router>
                <Header />

                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/faq' component={FaqPage} />
                    <Route path='/contact-us' component={ContactUsPage} />
                    <Route path='/donate' component={DonatePage} />
                    <Route path='/genes-and-more' component={GenesAndMore} />
                    <Route path='/search' component={SearchPage} />

                    {
                        Object.entries(CancerData).map(([name, cancer]) =>
                            <Route key={name} path={cancer.url} component={CancerPageTemplate(cancer)} />
                        )
                    }

                    <Route component={NotFoundPage} />

                </Switch>
            </Router>

            <Router>
                <Footer />
            </Router>
        </div>
    )
}
