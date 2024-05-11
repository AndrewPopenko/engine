import { TypeOrmModule } from '@db/typeorm.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbTestController } from './db-test/db-test.controller';
import { DbTestService } from './db-test/db-test.service';

import { UserModule } from '@entities/user/user.module';
import { CityModule } from '@entities/city/city.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule, UserModule, CityModule, AuthModule],
  controllers: [AppController, DbTestController],
  providers: [AppService, DbTestService],
})
export class AppModule {}
