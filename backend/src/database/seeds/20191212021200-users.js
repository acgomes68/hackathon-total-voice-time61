const bcrypt = require('bcryptjs');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Maria do Carmo Ribeiro',
          alias: 'Maria do Carmo',
          email: 'maria.ribeiro@mail.com',
          password_hash: bcrypt.hashSync('12345678', 8),
          birth: '1951-05-22',
          cpf: '77788899900',
          avatar_id: 1,
          created_at: new Date(),
        },
      ],
      {}
    );
  },
  down: () => {},
};
