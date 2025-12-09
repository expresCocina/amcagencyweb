import './Certifications.css';

const Certifications = () => {
    const certifications = [
        {
            name: 'Google Partner',
            badge: '🎯',
            description: 'Certificado en Google Ads y Analytics',
            level: 'Premier'
        },
        {
            name: 'Meta Business Partner',
            badge: '👥',
            description: 'Expertos en Facebook e Instagram Ads',
            level: 'Elite'
        },
        {
            name: 'HubSpot Solutions',
            badge: '🚀',
            description: 'Partner certificado en Inbound Marketing',
            level: 'Diamond'
        },
        {
            name: 'Shopify Partner',
            badge: '🛍️',
            description: 'Especialistas en E-commerce',
            level: 'Expert'
        },
        {
            name: 'AWS Partner',
            badge: '☁️',
            description: 'Infraestructura cloud y hosting',
            level: 'Advanced'
        },
        {
            name: 'Semrush Agency',
            badge: '📊',
            description: 'SEO y Marketing Digital',
            level: 'Certified'
        }
    ];

    const techStack = [
        { name: 'Google Analytics', icon: '📈' },
        { name: 'Google Ads', icon: '🎯' },
        { name: 'Meta Ads', icon: '📱' },
        { name: 'Shopify', icon: '🛒' },
        { name: 'WordPress', icon: '📝' },
        { name: 'HubSpot', icon: '🧲' },
        { name: 'Mailchimp', icon: '✉️' },
        { name: 'Hotjar', icon: '🔥' },
        { name: 'Semrush', icon: '🔍' },
        { name: 'Ahrefs', icon: '🔗' }
    ];

    return (
        <section className="certifications-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Certificaciones y Partners</h2>
                    <p className="mt-3">Trabajamos con las mejores plataformas del mundo</p>
                </div>

                <div className="certifications-grid mt-5">
                    {certifications.map((cert, index) => (
                        <div key={index} className="cert-card">
                            <div className="cert-badge">{cert.badge}</div>
                            <div className="cert-level">{cert.level}</div>
                            <h3 className="cert-name">{cert.name}</h3>
                            <p className="cert-description">{cert.description}</p>
                            <div className="cert-verified">
                                ✓ Verificado
                            </div>
                        </div>
                    ))}
                </div>

                <div className="tech-stack mt-5">
                    <h3 className="text-center mb-4">Tecnologías que Dominamos</h3>
                    <div className="tech-grid">
                        {techStack.map((tech, index) => (
                            <div key={index} className="tech-item">
                                <span className="tech-icon">{tech.icon}</span>
                                <span className="tech-name">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
