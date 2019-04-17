import React from 'react'
import axios from 'axios'

import ProductSearch from './ProductSearch'
import ProductsIndex from './ProductsIndex'

class Dashboard extends React.Component {
  constructor(){
    super()

    this.state = {
      data: {
        supplier: '',
        product: '',
        price: 0
      },
      filter: {
        supplier: '',
        product: ''
      },
      editing: ''
    }

    this.filteredProducts = this.filteredProducts.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleEdit = this.handleEdit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.editSubmit = this.editSubmit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSearch({ target: { name, value } }){
    const filter = {...this.state.filter, [name]: value }
    this.setState({ filter })
  }

  filteredProducts() {
    return this.state.products.filter(product => {
      return (this.state.filter.supplier === '' || product.supplier === this.state.filter.supplier) && (this.state.filter.product === '' || product.product === this.state.filter.product)
    })
  }

  handleChange({ target: { name, value } }) {
    const data = {...this.state.data, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })
  }

  handleEdit(e){
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

  componentDidMount(){
    axios.get('/api/products')
      .then(res => this.setState({ products: res.data }))
  }

  render() {
    if(!this.state.products) return null

    return (
      <main>
        <h1 className="title is-1 has-text-dark">Welcome to Product Datastore</h1>
        <ProductSearch
          {...this.state}
          queryProducts = {this.queryProducts}
          handleSearch = {this.handleSearch}
        />
        {this.state.products && (
          <ProductsIndex
            {...this.state}
            filteredProducts={this.filteredProducts}
            handleEdit={this.handleEdit}
            handleDelete={this.handleDelete}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            editSubmit={this.editSubmit}
          />
        )}
      </main>
    )
  }
}

export default Dashboard
