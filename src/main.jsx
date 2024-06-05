import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartContext,CartProvider} from './neogPractice/CartContext.jsx'
export {CartContext};
import {BrowserRouter as Router} from "react-router-dom"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <CartProvider>
            <App />
            </CartProvider>

    </Router>
  </React.StrictMode>,
)
