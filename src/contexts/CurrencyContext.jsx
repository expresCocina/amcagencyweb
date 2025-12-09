import { createContext, useContext, useState, useEffect } from 'react';

const CurrencyContext = createContext();

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error('useCurrency must be used within CurrencyProvider');
    }
    return context;
};

// Tasas de conversión (base: USD)
const exchangeRates = {
    USD: 1,
    COP: 4200,
    MXN: 17,
    ARS: 800
};

// Símbolos de moneda
const currencySymbols = {
    USD: '$',
    COP: '$',
    MXN: '$',
    ARS: '$'
};

// Nombres de moneda
const currencyNames = {
    USD: 'US Dollar',
    COP: 'Peso Colombiano',
    MXN: 'Peso Mexicano',
    ARS: 'Peso Argentino'
};

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState(() => {
        // Cargar moneda desde localStorage o usar COP por defecto
        return localStorage.getItem('currency') || 'COP';
    });

    useEffect(() => {
        // Guardar moneda en localStorage cuando cambie
        localStorage.setItem('currency', currency);
    }, [currency]);

    // Convertir desde USD a la moneda seleccionada
    const convertPrice = (usdPrice) => {
        return Math.round(usdPrice * exchangeRates[currency]);
    };

    // Formatear precio con símbolo y separadores
    const formatPrice = (amount) => {
        const symbol = currencySymbols[currency];
        const formatted = new Intl.NumberFormat('es-CO').format(amount);

        return `${symbol}${formatted} ${currency}`;
    };

    // Función combinada: convertir y formatear
    const displayPrice = (usdPrice) => {
        const converted = convertPrice(usdPrice);
        return formatPrice(converted);
    };

    const value = {
        currency,
        setCurrency,
        convertPrice,
        formatPrice,
        displayPrice,
        currencySymbol: currencySymbols[currency],
        currencyName: currencyNames[currency]
    };

    return (
        <CurrencyContext.Provider value={value}>
            {children}
        </CurrencyContext.Provider>
    );
};
