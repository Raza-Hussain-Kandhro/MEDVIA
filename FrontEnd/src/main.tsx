import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import store from './redux/store'

const el = document.getElementById('root')
if (!el) throw new Error('Root element not found')
createRoot(el).render(<StrictMode><Provider store={store}><App /></Provider></StrictMode>)
