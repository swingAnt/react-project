import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import './App.scss'
const Home = React.lazy(() => import('@/pages/Home'))

export default function App() {
  return (
    <Router>
      <div className="app">
        <Suspense fallback={<div>loading...</div>}>
          <Routes>
            <Route path="/" component={Home}></Route>
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}
