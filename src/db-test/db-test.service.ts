import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

@Injectable()
export class DbTestService {
  constructor(@InjectEntityManager() private entityManager: EntityManager) {}

  async testConnection(): Promise<string> {
    const result = await this.entityManager.query('SELECT version();');
    return result[0].version;
  }
}
