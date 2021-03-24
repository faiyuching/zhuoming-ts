import { sequelize } from '../sequelize'
import { Model, DataTypes } from 'sequelize'

interface UserInstance extends Model {
    id: number;
    openid_web: string;
    openid_fwh: string;
    openid_xcx: string;
    unionid: string;
    shimo: string;
    wechat: string;
    facebook: string;
    phone: string;
    email: string;
    username: string;
    nickname: string;
    password: string;
    avatar: string;
    role: string;
    gender: string;
    country: string;
    province: string;
    city: string;
    language: string;
    job: string;
    skill: string;
    introduction: string;
}

const User = sequelize.define<UserInstance>('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    openid_web: {
        type: DataTypes.STRING(30),
        unique: true,
    },
    openid_fwh: {
        type: DataTypes.STRING(30),
        unique: true,
    },
    openid_xcx: {
        type: DataTypes.STRING(30),
        unique: true,
    },
    unionid: {
        type: DataTypes.STRING(12),
        unique: true,
    },
    shimo: {
        type: DataTypes.STRING(50),
        unique: true,
    },
    wechat: {
        type: DataTypes.STRING(20),
        unique: true,
    },
    facebook: {
        type: DataTypes.STRING(20),
        unique: true,
    },
    phone: {
        type: DataTypes.STRING(20),
        unique: true,
    },
    email: {
        type: DataTypes.STRING(50),
        unique: true,
    },
    username: DataTypes.STRING(20),
    nickname: DataTypes.STRING(20),
    password: DataTypes.STRING(255),
    avatar: DataTypes.STRING(255),
    role: DataTypes.STRING(20),
    gender: DataTypes.DECIMAL(10, 0),
    country: DataTypes.STRING(20),
    province: DataTypes.STRING(20),
    city: DataTypes.STRING(20),
    language: DataTypes.STRING(255),
    job: DataTypes.STRING(255),
    skill: DataTypes.STRING(255),
    introduction: DataTypes.STRING(255)
}, {
    tableName: 'users'
})

export { User }