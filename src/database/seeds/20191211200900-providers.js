module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'providers',
      [
        {
          name: 'Sabesp',
          provider_type_id: 1,
          entry_type: 'D',
          created_at: new Date(),
        },
        {
          name: 'Enel',
          provider_type_id: 2,
          entry_type: 'D',
          created_at: new Date(),
        },
        {
          name: 'Vivo',
          provider_type_id: 3,
          entry_type: 'D',
          created_at: new Date(),
        },
        {
          name: 'Visa',
          provider_type_id: 4,
          entry_type: 'B',
          created_at: new Date(),
        },
        {
          name: 'Mastercard',
          provider_type_id: 4,
          entry_type: 'B',
          created_at: new Date(),
        },
        {
          name: 'Comgas',
          provider_type_id: 5,
          entry_type: 'D',
          created_at: new Date(),
        },
      ],
      {}
    );
  },
  down: () => {},
};
