import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './entities/user.entity';
import { PaymentEntity } from './entities/payment.entity';
import { BorrowerEntity } from './entities/borrower.entity';
// import source from './config/db/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '172.24.0.2',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'database',
      entities: ['src/entities/*.entity.{js,ts}'],
      synchronize: false,
      migrations: ['src/migrations/*.ts'],
      logging: true,
    }),
    TypeOrmModule.forFeature([UserEntity, PaymentEntity, BorrowerEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
