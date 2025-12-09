import { useState, useEffect } from 'react';
import './SocialProof.css';

const SocialProof = () => {
    const [currentNotification, setCurrentNotification] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const notifications = [
        { name: 'María', location: 'México', action: 'solicitó una auditoría SEO', time: 'hace 5 min', icon: '🔍' },
        { name: 'Carlos', location: 'Colombia', action: 'contrató Desarrollo Web', time: 'hace 12 min', icon: '💻' },
        { name: 'Ana', location: 'Argentina', action: 'descargó la guía de SEO', time: 'hace 18 min', icon: '📚' },
        { name: 'Diego', location: 'Chile', action: 'agendó una consultoría', time: 'hace 25 min', icon: '📅' },
        { name: 'Laura', location: 'Perú', action: 'se suscribió al newsletter', time: 'hace 32 min', icon: '✉️' },
        { name: 'Roberto', location: 'España', action: 'solicitó presupuesto', time: 'hace 40 min', icon: '💰' }
    ];

    useEffect(() => {
        const showNotification = () => {
            const randomNotification = notifications[Math.floor(Math.random() * notifications.length)];
            setCurrentNotification(randomNotification);
            setIsVisible(true);

            setTimeout(() => {
                setIsVisible(false);
            }, 5000);
        };

        // Show first notification after 3 seconds
        const initialTimeout = setTimeout(showNotification, 3000);

        // Show random notifications every 15-25 seconds
        const interval = setInterval(() => {
            showNotification();
        }, Math.random() * 10000 + 15000);

        return () => {
            clearTimeout(initialTimeout);
            clearInterval(interval);
        };
    }, []);

    if (!currentNotification) return null;

    return (
        <div className={`social-proof-notification ${isVisible ? 'visible' : ''}`}>
            <div className="notification-icon">{currentNotification.icon}</div>
            <div className="notification-content">
                <div className="notification-text">
                    <strong>{currentNotification.name}</strong> de {currentNotification.location} {currentNotification.action}
                </div>
                <div className="notification-time">{currentNotification.time}</div>
            </div>
            <button
                className="notification-close"
                onClick={() => setIsVisible(false)}
            >
                ×
            </button>
        </div>
    );
};

export default SocialProof;
