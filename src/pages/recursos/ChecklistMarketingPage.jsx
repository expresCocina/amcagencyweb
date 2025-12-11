import { useEffect } from 'react';
import { trackPageView } from '../utils/analytics';
import './ResourcePage.css';

const ChecklistMarketingPage = () => {
    useEffect(() => {
        trackPageView();
    }, []);

    return (
        <div className="resource-page">
            <iframe
                src="/downloads/checklist-marketing.html"
                title="Checklist de Marketing Digital"
                className="resource-iframe"
            />
        </div>
    );
};

export default ChecklistMarketingPage;
