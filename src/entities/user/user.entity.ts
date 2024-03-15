import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { City } from '@entities/city/city.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'login', type: 'varchar' })
  login: string;

  @Column({ name: 'password', type: 'varchar' })
  password: string;

  @OneToMany(() => City, (city) => city.id)
  city: City;

  //   @ManyToOne(() => Role, (role) => role.users)
  //   role: Role;
}
