// import { BorrowerEntity } from 'src/entities/borrower.entity';
// import { PaymentEntity } from 'src/entities/payment.entity';
// import { UserEntity } from 'src/entities/user.entity';
import { BorrowerEntity } from '../../entities/borrower.entity';
import { PaymentEntity } from '../../entities/payment.entity';
import { UserEntity } from '../../entities/user.entity';
import { DataSource } from 'typeorm';

const source = new DataSource({
  type: 'mysql',
  host: 'db',
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'database',
  entities: [UserEntity, PaymentEntity, BorrowerEntity],
  migrations: ['dist/migrations/*.js'],
  synchronize: false,
  logging: true,
});

export default source;
