'use strict';

const { STRING } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
    await queryInterface.createTable('BlogPosts', { 
      id: {
        allowNull:false,
        autoIncrement:true,
        primaryKey:true,
        type:Sequelize.INTEGER
      },
    title: {
      allowNull:false,
      type: Sequelize.STRING
    },
    contente: {
      allowNull:false,
      type:Sequelize.STRING,
    },
    userId: {
      allowNull:false,
      type:Sequelize.STRING,
      references:{
        model:'Users',
        key:'id',
      },
      onDelete:'CASCADE',
      onUpdata:'CASCADE',
    },
    published:{
      type:Sequelize.DATE
    },
    updated:{
      type:Sequelize.DATE
    },

   });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
