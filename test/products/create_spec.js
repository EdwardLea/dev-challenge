/* global api, describe, it, beforeEach, after, expect */

const Product = require('../../models/product')

const { productsData } = require('../mock_data')

describe('POST/products', () => {
  beforeEach(done => {
    Product.remove({})
      .then(() => done())
  })

  it('should return a 201 response', (done) => {
    api.post('/api/products')
      .send(productsData[0])
      .expect(201, done)
  })

  it('should return an array of products', (done) => {
    api.post('/api/products')
      .send(productsData[0])
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        res.body.forEach(product => {
          expect(product).to.include.keys([
            'supplier',
            'product',
            'price'
          ])
        })
        done()
      })
  })

  it('should return the correct product data', done => {
    api
      .post('/api/products')
      .send(productsData[0])
      .end((err, res) => {
        res.body.forEach((product, i) => {
          expect(product.supplier).to.eq(productsData[i].supplier)
          expect(product.product).to.eq(productsData[i].product)
          expect(product.price).to.eq(productsData[i].price)
        })
        done()
      })
  })
})

after(done => {
  Product.remove({})
    .then(() => done())
})
