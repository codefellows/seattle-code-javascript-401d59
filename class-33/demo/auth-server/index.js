const server = require('./server.js');
const models = require('./models');

models.sequelize.sync()
.then(() => {
  server.listen(3000, () => {
    console.log('SERVER IS LISTENING!!');
  });
})