import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import type { Item } from '@prisma/client';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly ItemsService: ItemsService) {}
  @Get()
  async findAll(): Promise<Item[]> {
    return await this.ItemsService.findAll();
  }

  @Get(':id') // /items/id
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
    return await this.ItemsService.findById(id);
  }

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return await this.ItemsService.create(createItemDto);
  }

  @Put(':id')
  async updateStatus(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
    return await this.ItemsService.updateStatus(id);
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    await this.ItemsService.delete(id);
  }
}
