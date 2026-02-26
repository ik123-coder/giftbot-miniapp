import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Глобальный отлов ошибок React (чтобы увидеть краш в консоли)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('React краш:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          height: '100vh',
          background: '#000',
          color: '#ff6b6b',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '30px',
          textAlign: 'center',
          fontSize: '1.4rem'
        }}>
          <h2>Ошибка в приложении</h2>
          <p style={{ marginTop: '20px' }}>{this.state.error?.message || 'Неизвестная ошибка'}</p>
          <p style={{ marginTop: '20px', fontSize: '1rem', opacity: 0.8 }}>
            Откройте консоль в Safari (Открыть в браузере) и пришлите ошибку
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);