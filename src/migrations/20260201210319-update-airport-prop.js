'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.changeColumn('Airports','name',{
    type: Sequelize.DataTypes.STRING , 
    allowNull : false 
   })

   await queryInterface.changeColumn("Airports", "code", {
     type: Sequelize.DataTypes.STRING,
     allowNull: false,
   });

   await queryInterface.changeColumn("Airports", "cityId", {
     type: Sequelize.DataTypes.INTEGER,
     allowNull: false,
   });

   await queryInterface.addConstraint("Airports",  {
     fields:["name"] , 
     type : "unique" , 
     name : "unique_name_constraint"
   });

   await queryInterface.addConstraint("Airports", {
     fields: ["code"],
     type: "unique",
     name: "unique_code_constraint",
   });

   await queryInterface.addConstraint("Airports", {
     fields: ["address"],
     type: "unique",
     name: "unique_address_constraint",
   });
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.removeConstraint("Airports" , "unique_address_constraint") 

   await queryInterface.removeConstraint(
     "Airports",
     "unique_code_constraint",
   );

   await queryInterface.removeConstraint(
     "Airports",
     "unique_name_constraint",
   );

   await queryInterface.changeColumn("Airports", "cityId", {
     type: Sequelize.DataTypes.STRING,
     allowNull: true,
   });

   await queryInterface.changeColumn("Airports", "name", {
     type: Sequelize.DataTypes.STRING,
     allowNull: true,
   });

   await queryInterface.changeColumn("Airports", "code", {
     type: Sequelize.DataTypes.STRING,
     allowNull: true,
   });
  }
};


