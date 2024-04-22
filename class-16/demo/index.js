const { start } = require('./src/server');
const { sequelize } = require('./src/models');

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
  start(PORT);
})