import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentEntity } from './payment.entity';
import { UserEntity } from './user.entity';

@Entity()
export class BorrowerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => PaymentEntity, (payment) => payment.borrowers)
  @JoinColumn({ name: 'payment_id' })
  payment: PaymentEntity;

  @ManyToOne(() => UserEntity, (user) => user.borrowers)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
