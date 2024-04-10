'use strict';

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const SECRET = process.env.SERVER_SECRET;

const UserModel = (sequelize, DataTypes) => {
  const model = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // virtual data types do not exist in the SQL table, but are created at runtime when you read the value.
    token: {
      type: DataTypes.VIRTUAL,
      get() {
        return jwt.sign({ username: this.username }, SECRET);
      },
      set(data) {
        return jwt.sign(data, SECRET);
      }
    },
    role: {
      type: DataTypes.ENUM('user', 'admin', 'writer', 'editor'),
      allowNull: false,
      defaultValue: 'user'
    },
    permissions: {
      type: DataTypes.VIRTUAL,
      get() {
        const acl = {
          user:['read'],
          admin: ['read', 'write', 'update', 'delete'],
          writer: ['read', 'write'],
          editor: ['read', 'update', 'delete'],
        }
        return acl[this.role];
      }
    }
  });

  model.beforeCreate(async function (user) {
    user.password = await bcrypt.hash(user.password, 10);
  });

  model.authenticateBasic = async function (username, password) {
    try {
      let record = await this.findOne({ where: { username: username }});
      let valid = await bcrypt.compare(password, record.password);
      if (valid) return record;
    } catch (e) {
      console.log('ERROR AUTHENTICATING USERNAME AND PASSWORD');
      throw new Error(e);
    }
  }

  model.authenticateBearer = async function (token) {
    try {
      let payload = jwt.verify(token, SECRET);
      let record = this.findOne({where: { username: payload.username }});
      return record;
    } catch(e) {
      console.log('ERROR AUTHENTICATING TOKEN!');
      throw new Error(e);
    }
  }

  return model;
}

module.exports = UserModel;
