import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'
import './style.scss'

// import ProductSearch from './components/products/ProductSearch'
// import ProductIndex from './components/products/ProductIndex'
// import ProductNew from './components/products/ProductNew'
// import ProductEdit from './components/products/ProductEdit'

class App extends React.Component {
  render() {

    return (
      <main>
        <h1 className="title is-1">Welcome to Price Finder</h1>
      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
