module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Towers', [{
      name: 'Test 1 Bulding',
      location: 'Dubai',
      numberOfFloors: '5',
      numberOfOffices: '1',
      rating: '4',
      latitude: '123456789',
      longitude: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Test 2 Bulding',
      location: 'UAE',
      numberOfFloors: '15',
      numberOfOffices: '1',
      rating: '3',
      latitude: '123456789',
      longitude: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Test 3 Bulding',
      location: 'RAK',
      numberOfFloors: '20',
      numberOfOffices: '0',
      rating: '5',
      latitude: '123456789',
      longitude: '123456789',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Towers', null, {});
  }
};
