import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import ProductSearch from './components/products/ProductSearch'
import ProductsIndex from './components/products/ProductsIndex'

class Dashboard extends React.Component {
  constructor(){
    super()

    this.state = {

      data: {
        supplier: '',
        product: '',
        price: 0
      },
      editing: ''

    }
    this.handleChange = this.handleChange.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
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

  handleEdit(e){
    console.dir(e.currentTarget.parentElement.parentElement)


    const data = this.state.products.find(product => product._id === e.target.value)
    const editing = e.target.value
    this.setState({ data, editing })
  }

  handleDelete({target: { value } }){
    axios
      .delete(`/api/products/${value}`)
      .then(res => this.setState({ products: res.data }))
      .catch(err => this.setState({ errors: err.response }))
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state.data)
    axios
      .post('/api/products', this.state.data)
      .then(res => this.setState({
        products: res.data,
        data: {
          supplier: '',
          product: '',
          price: 0
        }
      })
      )
      .catch((err) => console.log(err))
  }

  editSubmit(e) {
    e.preventDefault()

    axios
      .put(`/api/products/${this.state.data._id}`, this.state.data)
      .then(res => this.setState({ products: res.data, data: {
        supplier: '',
        product: '',
        price: 0
      },
      editing: ''
      }))
      .catch((err) => console.log(err))
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
          handleDelete={this.handleDelete}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          editSubmit={this.editSubmit}
        />
      </main>
    )
  }
}

export default Dashboard
