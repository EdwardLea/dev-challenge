import React from 'react'

const ProductSearch = ({products, handleSearch }) => {

  return (
    <div className="search-area">
      <label className="label has-text-dark">
        <strong>Find by Supplier</strong>
      </label>
      <select
        className="select"
        name="supplier"
        onChange={handleSearch}
      >
        <option value=''> All </option>
        {products
          .map(product => product.supplier)
          .filter((product,i) => products.map(product => product.supplier).indexOf(product) === i)
          .map((product, i) => {
            return <option key={i}> {product} </option>
          })}
      </select>
      <label className="label has-text-dark">Find by Product</label>
      <select
        className="select"
        name="product"
        onChange={handleSearch}
      >
        <option value=''> All </option>
        {products
          .map(product => product.product)
          .filter((product,i) => products.map(product => product.product).indexOf(product) === i)
          .map((product, i) => {
            return <option key={i}> {product} </option>
          })}
      </select>
    </div>
  )
}

export default ProductSearch
