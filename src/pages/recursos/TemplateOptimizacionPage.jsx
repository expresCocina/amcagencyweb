import { useEffect } from 'react';
import { trackPageView } from '../../utils/analytics';
import './ResourcePage.css';

const TemplateOptimizacionPage = () => {
    useEffect(() => {
        trackPageView();
    }, []);

    return (
        <div className="resource-page">
            <iframe
                src="/downloads/template-optimizacion.html"
                title="Template de Optimización Web"
                className="resource-iframe"
            />
        </div>
    );
};

export default TemplateOptimizacionPage;
