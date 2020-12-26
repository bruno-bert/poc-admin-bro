export default {
    host: process.env.POSTGRESQL_HOST || 'localhost',
    user: process.env.POSTGRESQL_USER || 'postgres',
    password: process.env.POSTGRESQL_PASSWORD || 'postgres',
    database: process.env.POSTGRESQL_DATABASE || 'postgres',
}