import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

    @Get()
    getHello(): string {
      return "hi";
    }
  
    @Post()
    sendAll(): string {
      return "server post data";
    }
  
    @Put()
    update(): string {
      return "put data";
    }
  
    @Delete()
    delete(): string {
      return "delete data";
    }
  }

