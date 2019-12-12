import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import Account from '../app/models/Account';
import Appointment from '../app/models/Appointment';
import Cashflow from '../app/models/Cashflow';
import Entry from '../app/models/Entry';
import File from '../app/models/File';
import Provider from '../app/models/Provider';
import ProviderType from '../app/models/ProviderType';
import User from '../app/models/User';

import databaseConfig from '../config/database';
import mongoConfig from '../config/mongo';

const models = [
  Account,
  Appointment,
  Cashflow,
  Entry,
  File,
  Provider,
  ProviderType,
  User,
];

class Database {
  constructor() {
    this.init();
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      `mongodb://${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.database}`,
      { useNewUrlParser: true, useFindAndModify: true }
    );
  }
}

export default new Database();
