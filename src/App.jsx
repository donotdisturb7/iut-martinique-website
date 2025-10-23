import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/config';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import FormationsIntro from './pages/FormationsIntro';
import CatalogueFormations from './pages/CatalogueFormations';
import FormationDetail from './pages/FormationDetail';
import NewsDetail from './pages/NewsDetail';
import Recherche from './pages/Recherche';
import Entreprises from './pages/Entreprises';
import VieEtudiante from './pages/VieEtudiante';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

/**
 * Composant principal de l'application
 * Configure le routing et l'internationalisation
 */
function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/iut" element={<About />} />
            <Route path="/formations" element={<FormationsIntro />} />
            <Route path="/catalogue-formations" element={<CatalogueFormations />} />
            <Route path="/formations/:id" element={<FormationDetail />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/recherche" element={<Recherche />} />
            <Route path="/entreprises" element={<Entreprises />} />
            <Route path="/vie-etudiante" element={<VieEtudiante />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </I18nextProvider>
  );
}

export default App;
