import React from 'react'
import ProductNew from './ProductNew'

const ProductIndex = ({ products, handleEdit, editSubmit, handleDelete, handleChange, handleSubmit, data, editing }) => {

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
        {products
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
                      className={product._id === editing ? 'show' : 'hide'}
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
                      className={product._id === editing ? 'show' : 'hide'}
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
                      className={product._id === editing ? 'show' : 'hide'}
                      onChange={handleChange}
                      value={data.price || product.price}
                      name="price"
                    />
                  )}
                </td>
                <td><button value={product._id} onClick={product._id === editing ? editSubmit : handleEdit}>Edit</button></td>
                <td><button value={product._id} onClick={handleDelete}>Delete</button></td>
              </tr>
            )
          })}
        <ProductNew
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          data={data}
        />
      </tbody>
    </table>
  )
}

export default ProductIndex
