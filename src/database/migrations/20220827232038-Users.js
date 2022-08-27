'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('Users', { 
      id: {
        type:Sequelize.INTEGER, 
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
    },
      displayName: {
        type:Sequelize.STRING,
        allowNull:false,
      },
      email: {
        type:Sequelize.STRING,
        allowNull:false,
      },
      password: {
        type:Sequelize.STRING,
        allowNull:true,
      },
      image: {
        type:Sequelize.STRING,
        allowNull:false,
      }
    },
    {
      timestamps: false,
    }
    
    );
  },

  down: async (queryInterface, _Sequelize) => {
    
     await queryInterface.dropTable('Users');
  }
};

