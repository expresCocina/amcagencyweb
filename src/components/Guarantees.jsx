import './Guarantees.css';

const Guarantees = () => {
    const guarantees = [
        {
            icon: '✅',
            title: 'Garantía de Satisfacción 100%',
            description: 'Si no estás satisfecho en los primeros 30 días, te devolvemos tu inversión sin preguntas.'
        },
        {
            icon: '🔒',
            title: 'Datos Protegidos',
            description: 'Certificado SSL y cumplimiento GDPR. Tu información y la de tus clientes está segura.'
        },
        {
            icon: '📊',
            title: 'Reportes Mensuales Transparentes',
            description: 'Recibes reportes detallados cada mes con todas las métricas y resultados.'
        },
        {
            icon: '💰',
            title: 'Pago Contra Resultados',
            description: 'Estructura de pagos flexible basada en hitos y resultados alcanzados.'
        },
        {
            icon: '🤝',
            title: 'Contratos Flexibles',
            description: 'Sin permanencias forzadas. Puedes cancelar cuando quieras con 30 días de aviso.'
        },
        {
            icon: '⏰',
            title: 'Respuesta en 24 Horas',
            description: 'Respondemos a tus consultas en menos de 24 horas hábiles garantizado.'
        }
    ];

    return (
        <section className="guarantees-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Nuestras Garantías</h2>
                    <p className="mt-3">Trabajamos con total transparencia y compromiso con tus resultados</p>
                </div>

                <div className="guarantees-grid">
                    {guarantees.map((guarantee, index) => (
                        <div key={index} className="guarantee-card">
                            <div className="guarantee-icon">{guarantee.icon}</div>
                            <h3>{guarantee.title}</h3>
                            <p>{guarantee.description}</p>
                        </div>
                    ))}
                </div>

                <div className="guarantees-footer text-center mt-5">
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
                        Nuestra tasa de satisfacción del <strong style={{ color: 'var(--primary)' }}>98%</strong> y
                        retención del <strong style={{ color: 'var(--primary)' }}>95%</strong> hablan por sí solas
                    </p>
                    <a href="#contacto" className="btn btn-primary">Comenzar sin Riesgo</a>
                </div>
            </div>
        </section>
    );
};

export default Guarantees;
