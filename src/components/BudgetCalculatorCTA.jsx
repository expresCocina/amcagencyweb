import { Link } from 'react-router-dom';
import './BudgetCalculatorCTA.css';

const BudgetCalculatorCTA = () => {
    return (
        <section className="calculator-cta-section">
            <div className="container">
                <div className="calculator-cta-content">
                    <div className="calculator-cta-text">
                        <h2>📊 ¿Cuánto cuesta tu proyecto?</h2>
                        <p>Usa nuestra calculadora interactiva y obtén un presupuesto estimado al instante. Gratis, sin compromiso.</p>
                    </div>
                    <div className="calculator-cta-action">
                        <Link to="/calculadora" className="btn btn-primary btn-large">
                            Calcular Presupuesto
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BudgetCalculatorCTA;
