'use strict';

require('dotenv').config();
const app = require('./src/server.js');
const authModels = require('./src/auth/models');
const apiModels = require('./src/models');

authModels.db.sync().then(() => {
  apiModels.db.sync().then(() => {
    app.start(process.env.PORT || 3001);
  });
})

