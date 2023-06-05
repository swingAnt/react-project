import React, { Suspense } from 'react'
import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import './App.scss'
const Home = React.lazy(() => import('@/pages/Home/index.js'))

export default function App() {
  return (
      <div className="app">
        <Router>
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />

          </Routes>
        </Suspense>
        </Router>
      </div>

  )
}
