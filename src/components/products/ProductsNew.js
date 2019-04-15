import React from 'react'

const ProductNew = ({ handleChange, handleSubmit, data }) => {

  return (
    <form onSubmit={handleSubmit}>
      <div className="field is-horizontal">
        <div className="field-label is-normal">
          <label className="label">Supplier</label>
        </div>
        <div className="field-body">
          <div className="field">
            <div className="control">
              <input
                className={'input is-info'}
                placeholder="Name"
                name="name"
                onChange={handleChange}
                value={data.name || ''}
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
              <textarea
                name="description"
                onChange={handleChange}
                value={data.description || ''}
                className={'textarea input is-info'}
                placeholder="Tell us a little bit about the club...">
              </textarea>
            </div>
          </div>
        </div>
      </div>


      <div>
        <button className="button is-medium is-fullwidth is-dark">Submit</button>
      </div>
    </form>
  )
}

export default ProductNew
