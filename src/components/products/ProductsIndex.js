import React from 'react'

const ProductIndex = ({ products, handleChange }) => {

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
                <td>{product.supplier} <input value={product.supplier}></input></td>
                <td> {product.product} <input value={product.product}></input></td>
                <td> {product.product} <input value={product.price}></input></td>
                <td><button>Edit</button></td>
              </tr>

            )

          })}
      </tbody>
    </table>
  )
}

export default ProductIndex
