import React from 'react'
import {
  HashRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import styles from './App.module.scss'

const MainView = React.lazy(() => import('@/router/index'))
export default function App() {

  console.log('process.env.T_EVN', process.env.T_EVN)

  return (
      <div className={styles.app}>
        <Router >
            <MainView />
        </Router>
      </div>

  )
}
