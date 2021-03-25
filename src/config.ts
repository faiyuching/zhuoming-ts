interface ConfigInterface {
    NODE_ENV: string;
    JWT_KEY: string;
    dbName: string;
    host: string;
    port: number;
    user: string;
    password: string;
    sequelizeSync: boolean;
    appId: string;
    appSecret: string;
    loginUrl: string;
}
const config: ConfigInterface = {
    NODE_ENV: 'dev',
    JWT_KEY: 'asdf',
    dbName: 'zhuoming',
    host: 'rm-bp109nercxd21hk93jo.mysql.rds.aliyuncs.com',
    port: 3306,
    user: 'faiyuching',
    password: 'Lover271997',
    sequelizeSync: false,
    appId: '',
    appSecret: '',
    loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
}

export { config }