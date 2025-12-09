import { useState } from 'react';
import './FAQ.css';

const FAQ = ({ category = 'general' }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = {
        seo: [
            {
                question: '¿Cuánto tiempo toma ver resultados de SEO?',
                answer: 'Los resultados de SEO típicamente comienzan a ser visibles entre 3-6 meses. Sin embargo, esto depende de varios factores como la competencia en tu industria, el estado actual de tu sitio web, y la intensidad de la estrategia implementada.'
            },
            {
                question: '¿Qué incluye el servicio de SEO?',
                answer: 'Nuestro servicio de SEO incluye: auditoría técnica completa, investigación de palabras clave, optimización on-page, creación de contenido, linkbuilding, SEO local (si aplica), y reportes mensuales detallados con métricas de progreso.'
            },
            {
                question: '¿Garantizan primera posición en Google?',
                answer: 'No ofrecemos garantías de posiciones específicas ya que Google cambia constantemente sus algoritmos. Lo que sí garantizamos es un incremento medible en tráfico orgánico, mejora en rankings para palabras clave estratégicas, y un ROI comprobable.'
            },
            {
                question: '¿Cómo miden el éxito del SEO?',
                answer: 'Medimos el éxito través de KPIs claros: aumento en tráfico orgánico, mejora en posiciones de palabras clave, tasa de conversión, tiempo en sitio, y principalmente ROI. Todos nuestros clientes reciben reportes mensuales con estas métricas.'
            },
            {
                question: '¿Necesito contratar SEO continuamente?',
                answer: 'SEO es una estrategia a largo plazo. Aunque puedes ver resultados iniciales, mantener y mejorar posiciones requiere trabajo continuo debido a la competencia y cambios de algoritmos. Recomendamos al menos 6-12 meses para resultados sostenibles.'
            }
        ],
        desarrollo: [
            {
                question: '¿Qué tecnologías utilizan para desarrollo web?',
                answer: 'Trabajamos con las tecnologías más modernas: React.js y Next.js para frontend, Node.js para backend, y opciones de hosting en AWS o Vercel. También trabajamos con WordPress y Shopify según las necesidades del proyecto.'
            },
            {
                question: '¿El sitio web será responsive?',
                answer: 'Absolutamente. Todos nuestros sitios web son 100% responsive y se adaptan perfectamente a cualquier dispositivo (móvil, tablet, desktop). Además optimizamos la velocidad de carga y accesibilidad.'
            },
            {
                question: '¿Cuánto tiempo toma desarrollar un sitio web?',
                answer: 'Depende de la complejidad: un sitio web básico (5-10 páginas) toma 3-4 semanas, un sitio corporativo completo 6-8 semanas, y un e-commerce personalizado 10-12 semanas. Siempre entregamos en fases para que veas el progreso.'
            },
            {
                question: '¿Incluye hosting y dominio?',
                answer: 'El dominio y hosting son servicios separados, pero te asesoramos en la compra y configuración. Podemos incluirlo en paquetes especiales o puedes contratarlos directamente. Te ayudamos con todo el proceso técnico.'
            },
            {
                question: '¿Puedo actualizar el contenido yo mismo?',
                answer: 'Sí, todos nuestros sitios incluyen un panel de administración intuitivo (CMS) donde podrás actualizar contenido, imágenes, y blog sin necesidad de conocimientos técnicos. También ofrecemos capacitación.'
            }
        ],
        embudos: [
            {
                question: '¿Qué es un embudo de ventas exactamente?',
                answer: 'Un embudo de ventas es un sistema automatizado que guía a tus potenciales clientes desde el primer contacto hasta la compra. Incluye landing pages, emails automáticos, seguimiento, y todo lo necesario para convertir prospectos en clientes.'
            },
            {
                question: '¿Cuánto puede aumentar mis ventas un embudo?',
                answer: 'Nuestros clientes típicamente ven incrementos de 150-300% en conversiones. Un embudo bien diseñado captura leads que de otra forma se perderían, los nutre con contenido relevante y los convierte cuando están listos para comprar.'
            },
            {
                question: '¿Qué herramientas usan para los embudos?',
                answer: 'Utilizamos herramientas líderes como ClickFunnels, HubSpot, Active Campaign, y Zapier para automatización. Elegimos la stack tecnológico según tus necesidades específicas y presupuesto.'
            },
            {
                question: '¿Necesito tener una lista de emails existente?',
                answer: 'No es necesario. Creamos la estrategia completa desde cero, incluyendo la generación de tráfico hacia tu embudo mediante ads, SEO, y redes sociales. Construimos tu lista desde cero de forma orgánica y pagada.'
            },
            {
                question: '¿Cuánto toma implementar un embudo?',
                answer: 'Un embudo básico se puede implementar en 2-3 semanas. Embudos más complejos con múltiples etapas y automatizaciones avanzadas pueden tomar 4-6 semanas. Luego optimizamos basados en datos reales.'
            }
        ],
        general: [
            {
                question: '¿Cómo funcionan los pagos?',
                answer: 'Trabajamos con pagos flexibles: 50% al inicio del proyecto y 50% al finalizar. Para servicios mensuales como SEO o mantenimiento, facturamos mensualmente. Aceptamos transferencias bancarias y tarjetas de crédito.'
            },
            {
                question: '¿Ofrecen garantía de satisfacción?',
                answer: 'Sí, ofrecemos garantía de satisfacción del 100%. Si no estás satisfecho con nuestro trabajo en los primeros 30 días, reembolsamos tu inversión sin preguntas. Nuestra tasa de satisfacción del 98% habla por sí sola.'
            },
            {
                question: '¿Trabajan con empresas fuera de Colombia?',
                answer: 'Sí, trabajamos con clientes en 12 países de LATAM y Estados Unidos. Toda nuestra comunicación es remota mediante videoconferencias, y hemos perfeccionado nuestro proceso para trabajar efectivamente a distancia.'
            },
            {
                question: '¿Qué pasa después de entregar el proyecto?',
                answer: 'Ofrecemos 30 días de soporte gratuito post-lanzamiento para cualquier ajuste. Luego puedes contratar planes de mantenimiento mensuales o llamarnos cuando necesites actualizaciones. Siempre estamos disponibles para nuestros clientes.'
            },
            {
                question: '¿Puedo ver ejemplos de su trabajo?',
                answer: 'Por supuesto. Visita nuestra página de Casos de Éxito donde mostramos proyectos reales con métricas comprobables. También podemos conectarte con clientes actuales para referencias si lo deseas.'
            }
        ]
    };

    const faqs = faqData[category] || faqData.general;

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faq-component">
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-item ${openIndex === index ? 'active' : ''}`}
                    >
                        <button
                            className="faq-question"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span>{faq.question}</span>
                            <span className="faq-icon">
                                {openIndex === index ? '−' : '+'}
                            </span>
                        </button>
                        <div className="faq-answer">
                            <div className="faq-answer-content">
                                {faq.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
