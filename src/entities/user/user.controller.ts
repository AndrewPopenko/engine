import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';

import { Request, Response } from 'express';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/')
  async getAllUsers(
    @Req() req: Request,
    @Res() res: Response,
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ) {
    const users = await this.userService.getaAllUsers(page, limit);

    if (users.length === 0) {
      return res.send({ staus: 'ok', data: [] });
    }

    return res.send({ staus: 'ok', data: users });
  }

  @Get('/:id')
  async getUser(
    @Req() req: Request,
    @Param('id') id: number,
    @Res() res: Response,
  ) {
    const userData = await this.userService.getUserData(id);

    delete userData.password;

    return res.send({ status: 'ok', data: userData });
  }

  @Post('/')
  async createUser(@Req() req: Request, @Res() res: Response) {
    await this.userService.createUser(req.body);
    return res.send({ status: 'ok' });
  }

  @Put('/:id')
  async updateUser(@Req() req: Request, @Res() res: Response) {}

  @Patch('/:id')
  async updateUserField(@Req() req: Request, @Res() res: Response) {}

  @Delete('/:id')
  async deleteUser(@Req() req: Request, @Res() res: Response) {}
}
