import React from 'react'
import ProductNew from './ProductNew'

const ProductIndex = (
  { filteredProducts,
    handleEdit,
    editSubmit,
    handleDelete,
    handleChange,
    handleSubmit,
    data,
    editing }) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="has-text-dark">#</th>
          <th className="has-text-dark">Supplier</th>
          <th className="has-text-dark">Product</th>
          <th className="has-text-dark">Price (£)</th>
          <th className="has-text-dark">Edit</th>
          <th className="has-text-dark">Delete</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts()
          .map((product, i) => {
            return  (
              <tr key={i}>
                <td>{i+1}</td>
                <td>
                  {product._id !== editing && (
                    product.supplier
                  )}
                  {product._id === editing && (
                    <input
                      className="input is-small"
                      onChange={handleChange}
                      value={data.supplier || product.supplier}
                      name="supplier"
                    />
                  )}
                </td>
                <td>
                  {product._id !== editing && (
                    product.product
                  )}
                  {product._id === editing && (
                    <input
                      className="input is-small"
                      onChange={handleChange}
                      value={data.product || product.product}
                      name="product"
                    />
                  )}
                </td>
                <td>
                  {product._id !== editing && (
                    product.price
                  )}
                  {product._id === editing && (
                    <input
                      className="input is-small"
                      onChange={handleChange}
                      value={data.price || product.price}
                      name="price"
                    />
                  )}
                </td>
                <td>
                  <button
                    className="button is-small is-dark"
                    value={product._id}
                    onClick={product._id === editing ? editSubmit : handleEdit}
                  >
                    {product._id === editing ? 'Submit': 'Edit'}
                  </button>
                </td>
                <td>
                  <button
                    className="button is-small is-dark"
                    value={product._id}
                    onClick={handleDelete}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          })}
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
