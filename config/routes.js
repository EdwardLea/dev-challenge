const router = require('express').Router()
const productsController = require('../controllers/products')

router.route('/products')
  .get(productsController.index)
  .post(productsController.create)

router.route('/products/list')
  .get(productsController.productlist)

router.route('/products/:id')
  .put(productsController.update)
  .delete(productsController.delete)

module.exports = router
