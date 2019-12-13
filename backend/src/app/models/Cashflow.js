import Sequelize, { Model } from 'sequelize';

class Cashflow extends Model {
  static init(sequelize) {
    super.init(
      {
        date: Sequelize.DATE,
        opening_balance: Sequelize.FLOAT,
        credits: Sequelize.FLOAT,
        debts: Sequelize.FLOAT,
        final_balance: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Account, { foreignKey: 'account_id', as: 'account' });
  }
}

export default Cashflow;
