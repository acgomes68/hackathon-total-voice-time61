module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cashflows', {
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
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      opening_balance: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
      },
      credits: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
      },
      debts: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
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
    return queryInterface.dropTable('cashflows');
  },
};
