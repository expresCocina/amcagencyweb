import './Integrations.css';

const Integrations = () => {
    const integrations = {
        'Analytics & Tracking': [
            { name: 'Google Analytics', icon: '📊' },
            { name: 'Google Search Console', icon: '🔍' },
            { name: 'Hotjar', icon: '📈' },
            { name: 'Crazy Egg', icon: '🎯' }
        ],
        'Advertising': [
            { name: 'Google Ads', icon: '📱' },
            { name: 'Facebook Ads', icon: '📘' },
            { name: 'Instagram Ads', icon: '📸' },
            { name: 'LinkedIn Ads', icon: '🔗' },
            { name: 'TikTok Ads', icon: '🎵' }
        ],
        'E-commerce': [
            { name: 'Shopify', icon: '🛒' },
            { name: 'WooCommerce', icon: '🛍️' },
            { name: 'PrestaShop', icon: '📦' },
            { name: 'Stripe', icon: '💳' }
        ],
        'Marketing Automation': [
            { name: 'HubSpot', icon: '🧡' },
            { name: 'Mailchimp', icon: '📧' },
            { name: 'ActiveCampaign', icon: '📬' },
            { name: 'Sendinblue', icon: '🔔' }
        ],
        'SEO Tools': [
            { name: 'Semrush', icon: '🔎' },
            { name: 'Ahrefs', icon: '🕷️' },
            { name: 'Moz', icon: '📑' },
            { name: 'Screaming Frog', icon: '🚀' }
        ],
        'Social Media': [
            { name: 'Meta Business Suite', icon: '📱' },
            { name: 'Twitter/X Ads', icon: '🐦' },
            { name: 'Pinterest', icon: '📌' },
            { name: 'YouTube', icon: '📹' }
        ]
    };

    return (
        <section className="integrations-section">
            <div className="container">
                <div className="section-header">
                    <h2>🔌 Plataformas e Integraciones</h2>
                    <p>Trabajamos con las mejores herramientas del mercado para maximizar tus resultados</p>
                </div>

                <div className="integrations-content">
                    {Object.entries(integrations).map(([category, platforms]) => (
                        <div key={category} className="integration-category">
                            <h3>{category}</h3>
                            <div className="integration-grid">
                                {platforms.map((platform, index) => (
                                    <div key={index} className="integration-card">
                                        <div className="integration-icon">{platform.icon}</div>
                                        <div className="integration-name">{platform.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="integrations-footer">
                    <p>¿No ves tu plataforma? Contáctanos para soluciones personalizadas</p>
                    <a href="/#contacto" className="btn btn-primary">Contactar</a>
                </div>
            </div>
        </section>
    );
};

export default Integrations;
