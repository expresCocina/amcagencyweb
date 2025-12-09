import { useEffect, useState } from 'react';
import './Stats.css';

const Stats = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const element = document.getElementById('stats-section');
        if (element) {
            observer.observe(element);
        }

        return () => {
            if (element) {
                observer.unobserve(element);
            }
        };
    }, []);

    const stats = [
        { number: 500, suffix: '+', label: 'Proyectos Completados', icon: '🚀' },
        { number: 200, suffix: '+', label: 'Clientes Satisfechos', icon: '🤝' },
        { number: 15, suffix: '', label: 'Años de Experiencia', icon: '⭐' },
        { number: 12, suffix: '', label: 'Países Atendidos', icon: '🌎' },
        { number: 98, suffix: '%', label: 'Tasa de Satisfacción', icon: '💯' }
    ];

    const CountUp = ({ end, suffix, duration = 2000 }) => {
        const [count, setCount] = useState(0);

        useEffect(() => {
            if (!isVisible) return;

            let startTime;
            const animate = (currentTime) => {
                if (!startTime) startTime = currentTime;
                const progress = Math.min((currentTime - startTime) / duration, 1);

                setCount(Math.floor(progress * end));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }, [end, duration, isVisible]);

        return <span>{count}{suffix}</span>;
    };

    return (
        <section className="stats-section" id="stats-section">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="stat-item"
                            style={{
                                animationDelay: `${index * 0.1}s`,
                                opacity: isVisible ? 1 : 0
                            }}
                        >
                            <div className="stat-icon">{stat.icon}</div>
                            <div className="stat-number gradient-text">
                                {isVisible ? (
                                    <CountUp end={stat.number} suffix={stat.suffix} />
                                ) : (
                                    <span>0{stat.suffix}</span>
                                )}
                            </div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
