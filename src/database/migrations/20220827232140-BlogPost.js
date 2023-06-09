'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('BlogPosts', { 
      id: {
        type:Sequelize.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
      },
    title: {
      allowNull:false,
      type: Sequelize.STRING
    },
    content: {
      type:Sequelize.STRING,
      allowNull:false,
    },
    userId: {
      type:Sequelize.INTEGER,
      allowNull:false,
      references:{
      model:'Users',
      key:'id'
      },
      onDelete:'CASCADE',
      onUpdate:'CASCADE',
    },
    published:{
      type:Sequelize.DATE,
    },
    updated:{
      type:Sequelize.DATE,
    },

   },
  );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
