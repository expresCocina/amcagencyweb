import { useEffect } from 'react';
import { trackPageView } from '../../utils/analytics';
import './ResourcePage.css';

const GuiaSEOPage = () => {
    useEffect(() => {
        trackPageView();
    }, []);

    return (
        <div className="resource-page">
            <iframe
                src="/downloads/guia-seo-2024.html"
                title="Guía Completa de SEO 2024"
                className="resource-iframe"
            />
        </div>
    );
};

export default GuiaSEOPage;
