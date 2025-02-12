module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      }, 
      description: {
        allowNull: true,
        type: Sequelize.STRING
      }, 
      address: {
        allowNull: false,
        type: Sequelize.STRING
      }, 
      postalCode: {
        allowNull: false,
        type: Sequelize.STRING
      }, 
      url: {
        allowNull: true,
        type: Sequelize.STRING
      },
      restaurantCategoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'RestaurantCategories',
          key: 'id',
        },
      }, 
      shippingCosts: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      phone: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      logo: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      heroImage: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      userId:{
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',

        },
      },
      status: {
        allowNull: false,
        type: Sequelize.ENUM,
      values: ['online', 'offline', 'closed',
                'temporarily closed'],
    
      },
      
      // TODO: Include the rest of the fields of the Restaurants table

    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Restaurants')
  }
}
