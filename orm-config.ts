import { DataSource } from 'typeorm';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  database: 'quizzem',
  entities: [`${__dirname}/src/*/entities/*.entity.{js,ts}`],
  host: 'localhost',
  migrations: [`${__dirname}/priv/migrations/*.{js,ts}`],
  password: 'postgres',
  port: 5432,
  synchronize: false,
  type: 'postgres',
  username: 'postgres',
  logging: true,
  logger: 'advanced-console',
  ssl: false,
};

export default new DataSource(config);
