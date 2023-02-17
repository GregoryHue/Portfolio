import ReactDOM from 'react-dom'
import './css/index.scss'
import App from './App'
import React, { Suspense } from 'react'


ReactDOM.render(
  <React.StrictMode>
      <Suspense fallback={null}>
        <App />
      </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
)
