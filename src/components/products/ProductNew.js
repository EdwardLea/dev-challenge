import React from 'react'

const ProductNew = ({ handleChange, handleSubmit, data, editSubmit }) => {

  return (
    <form>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Supplier</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className={'input is-info'}
                placeholder="Supplier"
                name="supplier"
                value={data.supplier}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Product</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className='input is-info'
                placeholder="Product"
                name="product"
                value={data.product}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Price</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className='input is-info'
                placeholder="Price"
                name="price"
                value={data.price}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="button is-medium is-dark" onClick={handleSubmit}>Submit</button>
        <button className="button is-medium is-dark" onClick={editSubmit}>Edit</button>
      </div>
    </form>
  )
}

export default ProductNew
