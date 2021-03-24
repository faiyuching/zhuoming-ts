export = {
    // prod
    NODE_ENV: 'dev',
    JWT_KEY: 'asdf',
    database: {
        dbName: 'zhuoming',
        host: 'rm-bp109nercxd21hk93jo.mysql.rds.aliyuncs.com',
        port: 3306,
        user: 'faiyuching',
        password: 'Lover271997',
        sequelizeSync: false
    },
    wx: {
        appId: '',
        appSecret: '',
        loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
    }
}