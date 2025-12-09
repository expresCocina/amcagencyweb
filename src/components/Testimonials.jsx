import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Triplicamos nuestras ventas online en 4 meses",
            author: "María González",
            role: "Fundadora de EcoTienda",
            country: "Colombia",
            text: "AMC nos ayudó a posicionar nuestra tienda en Google. Pasamos de 200 a 2,500 visitas mensuales y nuestras ventas se dispararon.",
            flag: "🇨🇴",
            avatar: "👩‍💼",
            rating: 5,
            linkedin: "#"
        },
        {
            quote: "El embudo automatizado nos ahorra 15 horas semanales",
            author: "Carlos Ramírez",
            role: "CEO de Inmobiliaria Horizonte",
            country: "México",
            text: "Ahora los leads se califican solos y nuestro equipo solo habla con clientes listos para comprar.",
            flag: "🇲🇽",
            avatar: "👨‍💼",
            rating: 5,
            linkedin: "#"
        },
        {
            quote: "Conseguí trabajo remoto gracias al bootcamp",
            author: "Ana Martínez",
            role: "Estudiante AMC Academy",
            country: "Argentina",
            text: "En 2 meses aprendí SEO profesional y conseguí mi primer cliente pagando $800 USD mensuales.",
            flag: "🇦🇷",
            avatar: "👩‍🎓",
            rating: 5,
            linkedin: "#"
        },
        {
            quote: "ROI del 6.2x en solo 4 meses",
            author: "Roberto Silva",
            role: "Director de Marketing",
            country: "Chile",
            text: "La estrategia de Google Ads que implementaron superó todas nuestras expectativas. Vale cada peso invertido.",
            flag: "🇨🇱",
            avatar: "👨‍💻",
            rating: 5,
            linkedin: "#"
        },
        {
            quote: "El mejor sitio web que hemos tenido",
            author: "Laura Fernández",
            role: "Gerente General",
            country: "Perú",
            text: "Diseño hermoso, funcionalidad perfecta y se carga súper rápido. Nuestros clientes están encantados.",
            flag: "🇵🇪",
            avatar: "👩‍💼",
            rating: 5,
            linkedin: "#"
        },
        {
            quote: "Profesionales 100% confiables",
            author: "Diego Torres",
            role: "CEO Tech Startup",
            country: "España",
            text: "Cumplieron todos los plazos, comunicación excelente y resultados medibles. Los recomiendo totalmente.",
            flag: "🇪🇸",
            avatar: "👨‍🚀",
            rating: 5,
            linkedin: "#"
        }
    ];

    const renderStars = (rating) => {
        return '⭐'.repeat(rating);
    };

    return (
        <section className="section testimonials" id="casos">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Lo que dicen nuestros clientes</h2>
                    <p className="mt-3" style={{ color: 'var(--text-secondary)' }}>
                        +100 reseñas verificadas con calificación promedio de 4.9/5
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="card testimonial-card">
                            <div className="testimonial-header">
                                <div className="testimonial-avatar">{testimonial.avatar}</div>
                                <div className="testimonial-info">
                                    <strong>{testimonial.author}</strong>
                                    <div className="author-role">{testimonial.role}</div>
                                    <div className="testimonial-country">
                                        {testimonial.flag} {testimonial.country}
                                    </div>
                                </div>
                            </div>

                            <div className="testimonial-rating">
                                {renderStars(testimonial.rating)}
                            </div>

                            <h3 className="testimonial-quote">"{testimonial.quote}"</h3>
                            <p className="testimonial-text mt-3">{testimonial.text}</p>

                            <div className="testimonial-footer">
                                <div className="verified-badge">
                                    ✓ Cliente verificado
                                </div>
                                <a href={testimonial.linkedin} className="linkedin-link" target="_blank" rel="noopener noreferrer">
                                    in →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="testimonials-cta text-center mt-5">
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                        ¿Quieres ser nuestro próximo caso de éxito?
                    </p>
                    <a href="#contacto" className="btn btn-primary">Comencemos a Trabajar</a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
