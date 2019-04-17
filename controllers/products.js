const Product = require('../models/product')

function indexRoute(req, res, next) {
  Product
    .find()
    .then(products => {
      return products.filter(product => {
        return product.supplier === (req.query.supplier || product.supplier) &&
          product.product === (req.query.product || product.product)
      }
      )
    } )
    .then(products => res.status(200).json(products))
    .catch(next)
}

function createRoute(req, res, next) {
  Product
    .create(req.body)
    .then(() => Product.find())
    .then(products => res.status(201).json(products))
    .catch(next)
}

function updateRoute(req, res, next) {
  Product
    .findById(req.params.id)
    .then(product => product.set(req.body))
    .then(product => product.save())
    .then(() => Product.find())
    .then(products => res.status(200).json(products))
    .catch(next)
}

function deleteRoute(req, res, next) {
  Product
    .findById(req.params.id)
    .then(product => product.remove())
    .then(() => Product.find())
    .then(products => res.status(200).json(products))
    .catch(next)
}

function productRoute(req, res, next) {
  Product
    .find()
    .then(products => {
      return products.map(product => {
        return {
          supplier: product.supplier,
          product: product.product
        }
      }
      )
    } )
    .then(products => res.status(200).json(products))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute,
  productlist: productRoute
}
