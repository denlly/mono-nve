module.exports = {
    // web监听的ip地址
    host: "localhost",
    // http监听端口号
    httpPort: 3301,
    // https监听端口号
    httpsPort: 3300,
    // api的url前缀
    apiBasePath: "api",

    domain: "localhost",

    cors: true,
    typeorm: {
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "omon-user",
        password: "",
        database: "omon-db",
        synchronize: true,
        logging: true,
        entities: ["src/**/**.entity.ts"],
        migrations: ["src/migrations/**/*.ts"],
        subscribers: ["src/subscribers/**/*.ts"],
        cli: {
            entitiesDir: "src/**/**.entity.ts",
            migrationsDir: "src/migrations",
            subscribersDir: "src/subscribers",
        },
    },

    redis: {
        host: "localhost",
        port: 6379,
        // password: null,
        db: 0,
        prefix: "",
    },

    rabbitmq: {
        url: "amqp://guest:guest@localhost:5672/",
    },

    swagger: {
        // 是否启动swagger
        enable: true,
    },
}