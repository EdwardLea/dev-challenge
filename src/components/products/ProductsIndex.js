import React from 'react'
import ProductNew from './ProductNew'
import ProductDescription from './ProductDescription'

const ProductIndex = ({ products, filteredProducts, handleEdit, editSubmit, handleDelete, handleChange, handleSubmit, data, editing }) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Supplier</th>
          <th>Product</th>
          <th>Price</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <ProductDescription

          />
        <ProductNew
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          editing={editing}
          data={data}
        />
      </tbody>
    </table>
  )
}

export default ProductIndex
