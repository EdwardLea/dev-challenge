import React from 'react'

const ProductNew = ({ handleChange, handleSubmit, data }) => {

  return (
    <tr>
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
      <td colSpan='2'>
        <button onClick={handleSubmit}>Submit</button>
      </td>
    </tr>
  )
}

export default ProductNew
