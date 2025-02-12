import RestaurantController from '../controllers/RestaurantController.js'

const loadFileUserRoutes = function (app) {
  app.route('/restaurants')
    .get(
      RestaurantController.index)
}

export default loadFileUserRoutes
