import React from 'react'

const ProductIndex = ({ products, handleEdit }) => {

  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Supplier</th>
          <th>Product</th>
          <th>Price</th>
          <th>Edit</th>
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
              </tr>

            )

          })}
      </tbody>
    </table>
  )
}

export default ProductIndex
