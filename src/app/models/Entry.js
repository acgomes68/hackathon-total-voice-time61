import Sequelize, { Model } from 'sequelize';
import { isBefore, subHours } from 'date-fns';

class Entry extends Model {
  static init(sequelize) {
    super.init(
      {
        owner: Sequelize.STRING,
        description: Sequelize.STRING,
        barcode: Sequelize.STRING(100),
        date: Sequelize.DATE,
        value: Sequelize.FLOAT,
        penalty: Sequelize.FLOAT,
        rate: Sequelize.FLOAT,
        discount: Sequelize.FLOAT,
        amount: Sequelize.FLOAT,
        entry_type: Sequelize.CHAR(1),
        canceled_at: Sequelize.DATE,
        past: {
          type: Sequelize.VIRTUAL,
          get() {
            return isBefore(this.date, new Date());
          },
        },
        cancelable: {
          type: Sequelize.VIRTUAL,
          get() {
            return isBefore(new Date(), subHours(this.date, 2));
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Account, { foreignKey: 'account_id', as: 'account' });
    this.belongsTo(models.Provider, {
      foreignKey: 'provider_id',
      as: 'provider',
    });
  }
}

export default Entry;
