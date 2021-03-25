import { Sequelize } from "sequelize";

const { config } = require('./config')

const sequelize = new Sequelize(config.dbName, config.user, config.password, {
    dialect: 'mysql',
    host: config.host,
    port: config.port,
    logging: false,
    timezone: '+08:00',
    define: {

    }
});

sequelize.sync({
    force: config.sequelizeSync
})

export { sequelize }