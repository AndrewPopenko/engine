import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { City } from './city.entity';

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  exports: [TypeOrmModule],
})
export class CityModule {}
