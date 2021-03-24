export = {
    // prod
    NODE_ENV: 'dev',
    JWT_KEY: 'asdf',
    database: {
        dbName: 'test',
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'lover271997',
        sequelizeSync: true
    },
    wx: {
        appId: '',
        appSecret: '',
        loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
    }
}