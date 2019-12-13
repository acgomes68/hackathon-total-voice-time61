module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'accounts',
      [
        {
          user_id: 1,
          current_balance: 480,
          created_at: new Date(),
        },
      ],
      {}
    );
  },
  down: () => {},
};
