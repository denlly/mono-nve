module.exports = {
    // 生产环境 web监听的ip地址 及 端口
    host: "0.0.0.0",
    httpPort: 80,
    httpsPort: 443,
    domain: "dev.hash.pro",

    auth: {
        jwt: {
            // ！！！！jwt加密key，要保证每个ENV的secret不一样
            secret: "e6hJbGcifdsjflsdjOJiIIUz1NiIsInR5cCI6IkpXVC60",
            // jwt过期时间
            expiresIn: "1h",
        },
        session: {
            secret: "a3hJzI123213b1iNsInIR5cCI6IkpXVJC9GciOiJn6",
        },
    },

    typeorm: {
        type: "postgres",
        host: "hashpro-pg-jp-staging.cmlikuafboqz.ap-northeast-1.rds.amazonaws.com",
        port: 5432,
        username: "hashpro",
        password: "Kanga2018Staging",
        database: "hashpro",
        synchronize: true,
        logging: false,
    },

    redis: {
        host: "hashpro-staging.vhv362.0001.apne1.cache.amazonaws.com",
        port: 6379,
        // password: null,
        db: 0,
    },

    rabbitmq: {
        url: "amqp://hashpro:ZULhYWaZkmuKb4DUNGVPVjZR@localhost:5672/",
    },

    // TODO: 上线时要把生产环境swagger禁用
    swagger: {
        enable: true,
    },
}
