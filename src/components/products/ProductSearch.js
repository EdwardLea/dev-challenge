import React from 'react'

const ProductSearch = ({products, handleChange }) => {


  return (
    <div className="columns">
      <div className="column is-3">
        <div className="field">
          <div className="control">
            <label className="label">
              <strong>Find by Supplier</strong>
            </label>
            <select
              className="select"
              name="supplier"
              onChange={handleChange}
            >
              {products
                .map(product => product.supplier)
                .filter((product,i) => products.map(product => product.supplier).indexOf(product) === i)
                .map((product, i) => {
                  return <option key={i}> {product} </option>
                })}
            </select>
          </div>
        </div>
      </div>
      <div className="column is-3">
        <div className="field">
          <div className="control">
            <label className="label">Find by Product</label>
            <select
              className="select"
              name="product"
              onChange={handleChange}
            >
              {products
                .map(product => product.product)
                .filter((product,i) => products.map(product => product.product).indexOf(product) === i)
                .map((product, i) => {
                  return <option key={i}> {product} </option>
                })}
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSearch
