import { Restaurant, RestaurantCategory, User } from '../models/models.js'


const indexUser = async function (req, res)  {

    try{

        const users = await User.findAll();

        const userList = users.map(user => (
            {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                type: user.userType,
            }
        )
            
        )

        res.json(userList);
    }

    catch(err){
        res.status(500).send(err);
    }

}



const UserController = {
    indexUser

}

export default UserController;