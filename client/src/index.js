import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"; /* code change */
import store from './Redux/store.js'
import { BrowserRouter } from "react-router-dom"
import App from './App'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
)




