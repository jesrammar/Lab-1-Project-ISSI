import UserController from "../controllers/UserController.js";


const loadFileRoutes = function (app) {
    app.route('/users')
      .get(UserController.indexUser)

    
  }
  
export default loadFileRoutes
  