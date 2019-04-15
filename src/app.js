import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import 'bulma'
import './style.scss'

import ProductSearch from './components/products/ProductSearch'
import ProductsIndex from './components/products/ProductsIndex'
import ProductNew from './components/products/ProductNew'
// import ProductEdit from './components/products/ProductEdit'

class App extends React.Component {
  constructor(){
    super()

    this.state = {

    }
  }

  componentDidMount(){
    axios.get('/api/products')
      .then(res => this.setState({ products: res.data }))

  }
  render() {

    if(!this.state.products) return null


    return (
      <main>
        <h1 className="title is-1">Welcome to Price Finder</h1>
        <ProductSearch
          {...this.state}
        />
        <ProductsIndex />
        <ProductNew />

      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
