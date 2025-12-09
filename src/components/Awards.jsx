import './Awards.css';

const Awards = () => {
    const awards = [
        {
            icon: '🏆',
            title: 'Top 10 Agencias LATAM 2024',
            organization: 'Digital Marketing Awards',
            year: '2024',
            description: 'Reconocidos entre las mejores agencias digitales de Latinoamérica'
        },
        {
            icon: '🥇',
            title: 'Best SEO Campaign',
            organization: 'Marketing Excellence Awards',
            year: '2023',
            description: 'Premio a la mejor campaña de SEO por resultados excepcionales'
        },
        {
            icon: '⭐',
            title: '4.9/5 en Google Business',
            organization: 'Google Reviews',
            year: '2024',
            description: 'Calificación promedio basada en +100 reseñas verificadas'
        },
        {
            icon: '🎖️',
            title: 'HubSpot Diamond Partner',
            organization: 'HubSpot',
            year: '2024',
            description: 'Máxima certificación por excelencia en inbound marketing'
        },
        {
            icon: '💎',
            title: 'Meta Business Elite',
            organization: 'Meta',
            year: '2023',
            description: 'Certificación elite por resultados sobresalientes en advertising'
        },
        {
            icon: '📰',
            title: 'Featured in Forbes LATAM',
            organization: 'Forbes',
            year: '2023',
            description: 'Artículo destacado sobre nuestro crecimiento y metodología'
        }
    ];

    const press = [
        { name: 'Forbes LATAM', logo: '📰' },
        { name: 'Entrepreneur', logo: '💼' },
        { name: 'TechCrunch', logo: '💻' },
        { name: 'Marketing Week', logo: '📊' }
    ];

    return (
        <section className="awards-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Premios y Reconocimientos</h2>
                    <p className="mt-3">Orgullosos de nuestros logros y el reconocimiento de la industria</p>
                </div>

                <div className="awards-grid">
                    {awards.map((award, index) => (
                        <div key={index} className="award-card">
                            <div className="award-icon">{award.icon}</div>
                            <div className="award-year">{award.year}</div>
                            <h3 className="award-title">{award.title}</h3>
                            <div className="award-org">{award.organization}</div>
                            <p className="award-description">{award.description}</p>
                        </div>
                    ))}
                </div>

                <div className="press-section mt-5">
                    <h3 className="text-center mb-4">Mencionados en</h3>
                    <div className="press-grid">
                        {press.map((outlet, index) => (
                            <div key={index} className="press-item">
                                <div className="press-logo">{outlet.logo}</div>
                                <div className="press-name">{outlet.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Awards;
