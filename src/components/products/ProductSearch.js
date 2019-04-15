import React from 'react'

const ProductSearch = ({ handleChange }) => {

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
              <option> All </option>
              <option> Board Games </option>
              <option> Food & Drink </option>
              <option> Mums </option>
              <option> Sports </option>
              <option> Photography </option>
              <option> Gaming </option>
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
              <option> All </option>
              <option> Board Games </option>
              <option> Food & Drink </option>
              <option> Mums </option>
              <option> Sports </option>
              <option> Photography </option>
              <option> Gaming </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSearch
