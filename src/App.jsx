import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ChatWidget from './components/ChatWidget';
import ScrollToTop from './components/ScrollToTop';
import { initAnalytics, trackPageView } from './utils/analytics';

// Contexts
import { LanguageProvider } from './contexts/LanguageContext';
import { CurrencyProvider } from './contexts/CurrencyContext';

// Pages
import HomePage from './pages/HomePage';
import SEOPage from './pages/SEOPage';
import WebDevPage from './pages/WebDevPage';
import FunnelsPage from './pages/FunnelsPage';
import AcademyPage from './pages/AcademyPage';
import CreditPage from './pages/CreditPage';
import CasesPage from './pages/CasesPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ResourcesPage from './pages/ResourcesPage';
import BudgetCalculatorPage from './pages/BudgetCalculatorPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import BookingPage from './pages/BookingPage';
import LoginPage from './pages/LoginPage';
import ClientDashboard from './pages/ClientDashboard';

// Demo Pages
import EcoTiendaDemo from './pages/demos/EcoTiendaDemo';
import InmobiliariaDemo from './pages/demos/InmobiliariaDemo';
import ClinicaDentalDemo from './pages/demos/ClinicaDentalDemo';
import TechStartDemo from './pages/demos/TechStartDemo';
import RestauranteDemo from './pages/demos/RestauranteDemo';
import AcademiaDemo from './pages/demos/AcademiaDemo';
import BoutiqueDemo from './pages/demos/BoutiqueDemo';
import ConsultoraDemo from './pages/demos/ConsultoraDemo';

function App() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <LanguageProvider>
      <CurrencyProvider>
        <Router>
          <ScrollToTop />
          <AnalyticsTracker />
          <div className="App">
            <div className="bg-grid"></div>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/seo" element={<SEOPage />} />
              <Route path="/desarrollo-web" element={<WebDevPage />} />
              <Route path="/embudos" element={<FunnelsPage />} />
              <Route path="/cursos" element={<AcademyPage />} />
              <Route path="/credito" element={<CreditPage />} />
              <Route path="/casos" element={<CasesPage />} />
              <Route path="/sobre-nosotros" element={<AboutPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/recursos" element={<ResourcesPage />} />
              <Route path="/calculadora" element={<BudgetCalculatorPage />} />
              <Route path="/privacidad" element={<PrivacyPolicyPage />} />
              <Route path="/terminos" element={<TermsPage />} />
              <Route path="/agendar" element={<BookingPage />} />

              {/* Demo Pages */}
              <Route path="/demo/ecotienda" element={<EcoTiendaDemo />} />
              <Route path="/demo/inmobiliaria" element={<InmobiliariaDemo />} />
              <Route path="/demo/clinica-dental" element={<ClinicaDentalDemo />} />
              <Route path="/demo/techstart" element={<TechStartDemo />} />
              <Route path="/demo/restaurante" element={<RestauranteDemo />} />
              <Route path="/demo/academia" element={<AcademiaDemo />} />
              <Route path="/demo/boutique" element={<BoutiqueDemo />} />
              <Route path="/demo/consultora" element={<ConsultoraDemo />} />

              {/* Portal Routes */}
              <Route path="/login" element={<LoginPage />} />
              <Route path="/dashboard" element={<ClientDashboard />} />

            </Routes>
            <Footer />
            <WhatsAppButton />
            <ChatWidget />
          </div>
        </Router>
      </CurrencyProvider>
    </LanguageProvider>
  );
}

// Helper component to track page views on route change
const AnalyticsTracker = () => {
  const location = useLocation();
  useEffect(() => {
    trackPageView();
  }, [location]);
  return null;
};

export default App;
