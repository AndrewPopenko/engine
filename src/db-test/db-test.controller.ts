import { Controller, Get } from '@nestjs/common';
import { DbTestService } from './db-test.service';

@Controller('db-test')
export class DbTestController {
  constructor(private dbTestService: DbTestService) {}

  @Get()
  async testDBConnection() {
    const dbVersion = await this.dbTestService.testConnection();
    return { message: `Database connection successful. Version: ${dbVersion}` };
  }
}
