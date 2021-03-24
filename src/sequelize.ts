import { Sequelize } from "sequelize";

const {
    dbName,
    host,
    port,
    user,
    password,
    sequelizeSync
} = require('./config').database

const sequelize = new Sequelize(dbName, user, password, {
    dialect: 'mysql',
    host,
    port,
    logging: false,
    timezone: '+08:00',
    define: {

    }
});

sequelize.sync({
    force: sequelizeSync
})

export { sequelize }