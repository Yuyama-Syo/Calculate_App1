import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';
import { BorrowerEntity } from './borrower.entity';

@Entity()
export class PaymentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  payment: number;

  @Column()
  date: Date;

  @ManyToOne(() => UserEntity, (user) => user.payments)
  user: UserEntity;

  @OneToMany(() => BorrowerEntity, (borrower) => borrower.payment)
  borrowers: BorrowerEntity[];
}
