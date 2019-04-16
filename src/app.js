import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

import Dashboard from './components/products/Dashboard'

class App extends React.Component {

  render() {
    return (
      <Dashboard />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
