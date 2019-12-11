module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('entries', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      account_id: {
        type: Sequelize.INTEGER,
        references: { model: 'accounts', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      owner: {
        type: Sequelize.STRING,
      },
      provider_id: {
        type: Sequelize.INTEGER,
        references: { model: 'providers', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
        allowNull: true,
      },
      description: {
        type: Sequelize.STRING,
      },
      due: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      value: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      penalty: {
        type: Sequelize.FLOAT,
      },
      rate: {
        type: Sequelize.FLOAT,
      },
      discount: {
        type: Sequelize.FLOAT,
      },
      amount: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      entry_type: {
        type: Sequelize.CHAR(1),
        allowNull: false,
        defaultValue: 'D',
      },
      canceled_at: {
        type: Sequelize.DATE,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
      deleted_at: {
        type: Sequelize.DATE,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('entries');
  },
};
