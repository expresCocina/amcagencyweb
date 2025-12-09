import './ClientLogos.css';

const ClientLogos = () => {
    const clients = [
        { name: 'TechCorp', logo: '🚀', industry: 'Tecnología' },
        { name: 'GreenLife', logo: '🌿', industry: 'E-commerce' },
        { name: 'HealthPlus', logo: '💊', industry: 'Salud' },
        { name: 'EduLearn', logo: '📚', industry: 'Educación' },
        { name: 'FoodHub', logo: '🍔', industry: 'Restaurantes' },
        { name: 'FitGym', logo: '💪', industry: 'Fitness' },
        { name: 'HomeStyle', logo: '🏡', industry: 'Inmobiliaria' },
        { name: 'AutoMax', logo: '🚗', industry: 'Automotriz' },
        { name: 'FashionCo', logo: '👔', industry: 'Moda' },
        { name: 'PetCare', logo: '🐾', industry: 'Mascotas' },
        { name: 'TravelGo', logo: '✈️', industry: 'Turismo' },
        { name: 'FinanceEx', logo: '💰', industry: 'Finanzas' },
        { name: 'BeautyLine', logo: '💄', industry: 'Belleza' },
        { name: 'SportsZone', logo: '⚽', industry: 'Deportes' },
        { name: 'MusicPro', logo: '🎵', industry: 'Música' },
        { name: 'ArtGallery', logo: '🎨', industry: 'Arte' },
        { name: 'LegalAdv', logo: '⚖️', industry: 'Legal' },
        { name: 'CloudTech', logo: '☁️', industry: 'Cloud' },
        { name: 'DataAnalytics', logo: '📊', industry: 'Analytics' },
        { name: 'CyberSec', logo: '🔒', industry: 'Seguridad' }
    ];

    return (
        <section className="client-logos-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Clientes que Confían en Nosotros</h2>
                    <p className="mt-3">Empresas líderes en LATAM que han transformado su presencia digital con AMC</p>
                </div>

                <div className="logos-wrapper">
                    <div className="logos-scroll">
                        {clients.concat(clients).map((client, index) => (
                            <div key={index} className="logo-item">
                                <div className="logo-emoji">{client.logo}</div>
                                <div className="logo-name">{client.name}</div>
                                <div className="logo-industry">{client.industry}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="client-stats mt-5">
                    <div className="client-stat">
                        <div className="client-stat-number">+200</div>
                        <div className="client-stat-label">Clientes Activos</div>
                    </div>
                    <div className="client-stat">
                        <div className="client-stat-number">98%</div>
                        <div className="client-stat-label">Retención</div>
                    </div>
                    <div className="client-stat">
                        <div className="client-stat-number">4.9/5</div>
                        <div className="client-stat-label">Rating Promedio</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
