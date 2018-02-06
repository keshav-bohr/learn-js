const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:@localhost:5432/demo');

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

  const Note = sequelize.define('note', {title: Sequelize.TEXT, body: Sequelize.TEXT}, {timestamps: false});
  const Person = sequelize.define('person', {name: {type: Sequelize.TEXT, isAlphanumeric: true} , age: Sequelize.INTEGER, gender: Sequelize.TEXT}, {timestamps: false})
  Note.belongsTo(Person, {foreignKey: 'person_id'});
  // Note.findOrCreate(
  //   {where: {title: 'test', body: 'testbdy'}})
  //   .spread;
  // Note.findById(1).then((note) => {
  //   console.log(note)
  // })
  // Person table email 
  Note.findAll({include: [{model: Person, where: {id: 2}}]}).then((notes) =>{

    console.log(notes)
  });
  
  
  