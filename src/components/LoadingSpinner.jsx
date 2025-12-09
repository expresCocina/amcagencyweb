import './LoadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <div className="loading-container">
            <div className="loading-content">
                <div className="spinner"></div>
                <p>Cargando experiencia...</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;
