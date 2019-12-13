import Sequelize, { Model } from 'sequelize';

class Provider extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING(100),
        entry_type: Sequelize.CHAR(1),
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.ProviderType, {
      foreignKey: 'provider_type_id',
      as: 'provider_type',
    });
  }
}

export default Provider;
