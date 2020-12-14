module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Offices', [{
        name: 'JustClean test1',
        flatNo: '132',
        blockName: 'A',
        description: 'test data cleaning',
        towerId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'JustClean Test 2',
        flatNo: '142',
        blockName: 'B',
        description: 'test data cleaning',
        towerId: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'JustClean test3',
        flatNo: '136',
        blockName: 'A',
        description: 'test data cleaning',
        towerId: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Offices', null, {});
  }
};
