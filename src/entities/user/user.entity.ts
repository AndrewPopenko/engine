import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { City } from '@entities/city/city.entity';
import { Role } from '@entities/role/role.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'login', type: 'varchar' })
  login: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @ManyToOne(() => City, (city) => city.users)
  city: City;

  @ManyToOne(() => Role, (role) => role.users)
  role: Role;
}
