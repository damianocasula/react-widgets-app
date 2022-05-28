import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Use new React rendering API createRoot
const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(<App />)
