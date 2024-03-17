import { User } from '@entities/user/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'role', type: 'varchar' })
  role: string;

  @OneToMany(() => User, (user) => user.role)
  users: User[];
}
