const Product = require('../models/product')

function indexRoute(req, res, next) {
  console.log(req.params)
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
  req.body.user = req.currentUser
  Product
    .create(req.body)
    .then(product => res.status(201).json(product))
    .catch(next)
}

function updateRoute(req, res, next) {
  Product
    .findById(req.params.id)
    .then(product => product.set(req.body))
    .then(product => product.save())
    .then(product => res.status(200).json(product))
    .catch(next)
}

function deleteRoute(req, res, next) {
  Product
    .findById(req.params.id)
    .then(product => product.remove())
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
}
