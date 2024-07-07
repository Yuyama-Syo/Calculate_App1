import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PaymentEntity } from './payment.entity';
import { BorrowerEntity } from './borrower.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => PaymentEntity, (payment) => payment.user)
  payments: PaymentEntity[];

  @OneToMany(() => BorrowerEntity, (borrower) => borrower.user)
  borrowers: BorrowerEntity[];
}
