import './WorkProcess.css';

const WorkProcess = () => {
    const steps = [
        {
            number: 1,
            icon: '🔍',
            title: 'Descubrimiento',
            description: 'Auditoría completa y análisis de tu negocio, competencia y mercado objetivo.',
            deliverables: ['Auditoría técnica', 'Análisis de competencia', 'Workshop inicial'],
            duration: '1 semana'
        },
        {
            number: 2,
            icon: '📋',
            title: 'Estrategia',
            description: 'Creamos un plan personalizado con objetivos claros, KPIs y roadmap detallado.',
            deliverables: ['Plan estratégico', 'Calendario de implementación', 'Propuesta creativa'],
            duration: '1-2 semanas'
        },
        {
            number: 3,
            icon: '🎨',
            title: 'Diseño',
            description: 'Diseño de experiencia de usuario (UX/UI), wireframes y prototipos interactivos.',
            deliverables: ['Wireframes', 'Diseños UI', 'Prototipos interactivos'],
            duration: '2-3 semanas'
        },
        {
            number: 4,
            icon: '⚙️',
            title: 'Desarrollo',
            description: 'Implementación técnica con las mejores prácticas de código y optimización.',
            deliverables: ['Código limpio', 'Integraciones', 'Testing QA'],
            duration: '3-6 semanas'
        },
        {
            number: 5,
            icon: '🚀',
            title: 'Lanzamiento',
            description: 'Testing exhaustivo, capacitación del equipo y lanzamiento estratégico.',
            deliverables: ['Testing completo', 'Capacitación', 'Go-live'],
            duration: '1 semana'
        },
        {
            number: 6,
            icon: '📊',
            title: 'Optimización',
            description: 'Monitoreo continuo, análisis de datos y optimización basada en resultados reales.',
            deliverables: ['Reportes mensuales', 'A/B testing', 'Mejora continua'],
            duration: 'Continuo'
        }
    ];

    const tools = [
        { name: 'Google Analytics', icon: '📈' },
        { name: 'Figma', icon: '🎨' },
        { name: 'React', icon: '⚛️' },
        { name: 'HubSpot', icon: '🧲' },
        { name: 'Slack', icon: '💬' },
        { name: 'Jira', icon: '📋' }
    ];

    return (
        <section className="work-process-section">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Nuestro Proceso de Trabajo</h2>
                    <p className="mt-3">Un proceso probado que garantiza resultados</p>
                </div>

                <div className="process-timeline">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="process-step"
                            style={{ '--index': index }}
                        >
                            <div className="step-connector"></div>
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <div className="step-icon">{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                                <div className="step-duration">⏱️ {step.duration}</div>
                                <div className="step-deliverables">
                                    <strong>Entregables:</strong>
                                    <ul>
                                        {step.deliverables.map((item, idx) => (
                                            <li key={idx}>✓ {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="process-tools mt-5">
                    <h3 className="text-center mb-4">Herramientas que Utilizamos</h3>
                    <div className="tools-grid">
                        {tools.map((tool, index) => (
                            <div key={index} className="tool-item">
                                <span className="tool-icon">{tool.icon}</span>
                                <span className="tool-name">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="process-cta text-center mt-5">
                    <p className="mb-4" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                        ¿Listo para comenzar tu proyecto?
                    </p>
                    <a href="#contacto" className="btn btn-primary">Solicitar Consultoría Gratuita</a>
                </div>
            </div>
        </section>
    );
};

export default WorkProcess;
