import React from 'react'

const ProductIndex = ({ products, handleEdit, handleDelete, handleChange, handleSubmit, data }) => {

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
                <td>{product.supplier} </td>
                <td> {product.product} </td>
                <td> {product.price} </td>
                <td><button value={product._id} onClick={handleEdit}>Edit</button></td>
                <td><button value={product._id} onClick={handleDelete}>Delete</button></td>
              </tr>

            )

          })}
        <td>New</td>
        <td>
          <input
            placeholder="Supplier"
            name="supplier"
            value={data.supplier}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            placeholder="Product"
            name="product"
            value={data.product}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            placeholder="Price"
            name="price"
            value={data.price}
            onChange={handleChange}
          />
        </td>

        <td colSpan='2' >
          <button onClick={handleSubmit}>Submit</button>
        </td>

      </tbody>
    </table>
  )
}

export default ProductIndex
