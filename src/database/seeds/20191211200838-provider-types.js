module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'provider_types',
      [
        {
          name: 'Água',
          created_at: new Date(),
        },
        {
          name: 'Luz',
          created_at: new Date(),
        },
        {
          name: 'Telefone',
          created_at: new Date(),
        },
        {
          name: 'Cartão de Crédito',
          created_at: new Date(),
        },
        {
          name: 'Outros',
          created_at: new Date(),
        },
      ],
      {}
    );
  },
  down: () => {},
};
