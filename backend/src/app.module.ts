import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserEntity } from './entities/user.entity';
import { PaymentEntity } from './entities/payment.entity';
import { BorrowerEntity } from './entities/borrower.entity';
import { UsersModule } from './users/users.module';
// import source from './config/db/ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'user',
      password: 'password',
      database: 'database',
      entities: [UserEntity, PaymentEntity, BorrowerEntity],
      migrations: ['src/migrations/*.js'],
      synchronize: false,
      logging: true,
    }),
    TypeOrmModule.forFeature([UserEntity, PaymentEntity, BorrowerEntity]),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
