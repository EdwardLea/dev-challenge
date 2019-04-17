import React from 'react'

const ProductNew = ({ editing, handleChange, handleSubmit, data }) => {
  if(editing) return null

  return (
    <tr>
      <td>New</td>
      <td>
        <input
          className="input is-small"
          placeholder="Supplier"
          name="supplier"
          value={data.supplier}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          className="input is-small"
          placeholder="Product"
          name="product"
          value={data.product}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          className="input is-small"
          placeholder="Price"
          name="price"
          value={data.price}
          onChange={handleChange}
        />
      </td>
      <td colSpan='2'>
        <button
          onClick={handleSubmit}
          className="button is-small is-dark"
        >
          Submit
        </button>
      </td>
    </tr>
  )
}

export default ProductNew
