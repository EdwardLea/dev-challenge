/* global api, describe, it, beforeEach, after, expect */

const Product = require('../../models/product')

const { gemsData } = require('../mock_data')

describe('GET /gems', () => {
  beforeEach(done => {
    Product.remove({})
      .then(() => Product.create(gemsData))
      .then(() => done())
  })

  it('should return a 200 response', (done) => {
    api.get('/api/products')
      .end((err, res) => {
        expect(res.status).to.eq(200)
        done()
      })
  })

  it('should return an array', (done) => {
    api.get('/api/gems')
      .end((err, res) => {
        expect(res.body).to.be.an('array')
        res.body.forEach(gem => {
          expect(gem).to.include.keys([
            'name',
            'image',
            'description',
            'category',
            'location',
            'address',
            'comments'
          ])
        })
        done()
      })
  })

  // it('should return the correct data', (done) => {
  //   api
  //     .get('/api/gems')
  //     .end((err, res) => {
  //       res.body.forEach((gem, i) => {
  //         expect(gem.name).to.eq(gemsData[i].name)
  //         expect(gem.image).to.eq(gemsData[i].image)
  //         expect(gem.description).to.eq(gemsData[i].description)
  //         expect(gem.category).to.eq(gemsData[i].category)
  //         expect(gem.location).to.deep.eq(gemsData[i].location)
  //         expect(gem.address).to.eq(gemsData[i].address)
  //         expect(gem.comments).to.eq(gemsData[i].comments)
  //       })
  //       done()
  //     })
  // })


  after(done => {
    Product.remove({})
      .then(() => done())
  })
})
