import { User } from '@entities/user/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'city', type: 'varchar' })
  city: string;

  @OneToMany(() => User, (user) => user.city)
  users: User[];
}
