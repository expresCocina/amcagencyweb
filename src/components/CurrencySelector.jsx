import { useCurrency } from '../contexts/CurrencyContext';
import './CurrencySelector.css';

const CurrencySelector = () => {
    const { currency, setCurrency } = useCurrency();

    const currencies = [
        { code: 'COP', name: 'Peso Colombiano', flag: '🇨🇴' },
        { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
        { code: 'MXN', name: 'Peso Mexicano', flag: '🇲🇽' },
        { code: 'ARS', name: 'Peso Argentino', flag: '🇦🇷' }
    ];

    return (
        <div className="currency-selector">
            <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="currency-select"
            >
                {currencies.map(curr => (
                    <option key={curr.code} value={curr.code}>
                        {curr.flag} {curr.code}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CurrencySelector;
