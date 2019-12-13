module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'files',
      [
        {
          name: 'avatar.png',
          path: 'ea1a73bc09de67b9b709afa10f8b5c49.png',
          created_at: new Date(),
        },
      ],
      {}
    );
  },
  down: () => {},
};
