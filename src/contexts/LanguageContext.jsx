import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};

// Traducciones básicas
const translations = {
    es: {
        // Navbar
        'nav.home': 'Inicio',
        'nav.services': 'Servicios',
        'nav.cases': 'Casos',
        'nav.about': 'Nosotros',
        'nav.blog': 'Blog',
        'nav.resources': 'Recursos',
        'nav.contact': 'Contacto',
        'nav.portal': 'Portal Clientes',

        // Hero
        'hero.title': 'Agencia de Marketing Digital que Genera Resultados Reales',
        'hero.subtitle': 'Aumentamos tu tráfico, conversiones y ventas con estrategias probadas de SEO, Ads y Desarrollo Web',
        'hero.cta': 'Solicitar Consultoría Gratis',
        'hero.secondary': 'Ver Casos de Éxito',

        // Services
        'services.title': 'Nuestros Servicios',
        'services.seo': 'SEO',
        'services.web': 'Desarrollo Web',
        'services.funnels': 'Embudos de Venta',
        'services.ads': 'Google Ads',
        'services.social': 'Social Media',

        // Common
        'common.learnMore': 'Saber Más',
        'common.getStarted': 'Comenzar',
        'common.contact': 'Contactar',
        'common.readMore': 'Leer Más',

        // Footer
        'footer.rights': 'Todos los derechos reservados',
        'footer.company': 'Empresa',
        'footer.services': 'Servicios',
        'footer.resources': 'Recursos',
        'footer.legal': 'Legal',
    },
    en: {
        // Navbar
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.cases': 'Cases',
        'nav.about': 'About',
        'nav.blog': 'Blog',
        'nav.resources': 'Resources',
        'nav.contact': 'Contact',
        'nav.portal': 'Client Portal',

        // Hero
        'hero.title': 'Digital Marketing Agency that Delivers Real Results',
        'hero.subtitle': 'We increase your traffic, conversions and sales with proven SEO, Ads and Web Development strategies',
        'hero.cta': 'Request Free Consultation',
        'hero.secondary': 'View Success Cases',

        // Services
        'services.title': 'Our Services',
        'services.seo': 'SEO',
        'services.web': 'Web Development',
        'services.funnels': 'Sales Funnels',
        'services.ads': 'Google Ads',
        'services.social': 'Social Media',

        // Common
        'common.learnMore': 'Learn More',
        'common.getStarted': 'Get Started',
        'common.contact': 'Contact Us',
        'common.readMore': 'Read More',

        // Footer
        'footer.rights': 'All rights reserved',
        'footer.company': 'Company',
        'footer.services': 'Services',
        'footer.resources': 'Resources',
        'footer.legal': 'Legal',
    }
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        // Cargar idioma desde localStorage o usar español por defecto
        return localStorage.getItem('language') || 'es';
    });

    useEffect(() => {
        // Guardar idioma en localStorage cuando cambie
        localStorage.setItem('language', language);
    }, [language]);

    // Función para obtener traducción
    const t = (key) => {
        return translations[language][key] || key;
    };

    const value = {
        language,
        setLanguage,
        t
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};
