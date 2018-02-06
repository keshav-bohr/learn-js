'use strict';
module.exports = (sequelize, DataTypes) => {
  var notes = sequelize.define('notes', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return notes;
};