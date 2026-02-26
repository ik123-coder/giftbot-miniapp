import React from 'react'
import ReactDOM from 'react-dom/client'

console.log('Тест: приложение запустилось');

ReactDOM.createRoot(document.getElementById('root')).render(
  <div style={{ 
    background: 'black', 
    color: 'lime', 
    height: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    fontSize: '3rem',
    fontFamily: 'system-ui'
  }}>
    Тест с iPhone — всё работает!
  </div>
)