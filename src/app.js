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

      data: {
        supplier: '',
        product: '',
        price: 0
      }

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.editSubmit = this.editSubmit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  filteredProducts() {
    const re = new RegExp(this.state.products, 'i')
    if(!this.state.filter.supplier && !this.state.filter.supplier) return this.state.products
    return this.state.products.filter(product => {
      return re.test(product.location) && (this.state.filter.supplier === 'All' || product.product === this.state.filter.product)
    })
  }

  componentDidMount(){
    axios.get('/api/products')
      .then(res => this.setState({ products: res.data }))

  }

  handleChange({ target: { name, value } }) {
    const data = {...this.state.data, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })
  }

  handleEdit({target: { value } }){
    const data = this.state.products.find(product => product._id === value)
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data)
    axios
      .post('/api/products', this.state.data)
      .then(res => this.setState({ products: res.data }))
      .catch((err) => console.log(err))

  }

  editSubmit(e) {
    e.preventDefault()
    console.log(this.state.data._id)
    axios
      .put(`/api/products/${this.state.data._id}`, this.state.data)
      // .then(res => this.setState({ products: res.data }))
      // .then(() => this.props.history.push('/'))
      .catch((err) => console.log(err))
    // return this.setState({errors: err.response.data})

  }

  render() {

    if(!this.state.products) return null


    return (
      <main>
        <h1 className="title is-1">Welcome to Price Finder</h1>
        <ProductSearch
          {...this.state}
        />
        <ProductsIndex
          {...this.state}
          handleEdit={this.handleEdit}
        />
        <ProductNew
          {...this.state}
          handleChange={this.handleChange}
          editSubmit={this.editSubmit}
          handleSubmit={this.handleSubmit}
        />

      </main>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
