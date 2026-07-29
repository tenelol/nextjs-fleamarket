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
import type { Item } from './items.model';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly ItemsService: ItemsService) {}
  @Get()
  findAll(): Item[] {
    return this.ItemsService.findAll();
  }

  @Get(':id') // /items/id
  findById(@Param('id', ParseUUIDPipe) id: string): Item {
    return this.ItemsService.findById(id);
  }

  @Post()
  create(@Body() createItemDto: CreateItemDto): Item {
    return this.ItemsService.create(createItemDto);
  }

  @Put(':id')
  updateStatus(@Param('id', ParseUUIDPipe) id: string) {
    return this.ItemsService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id', ParseUUIDPipe) id: string) {
    this.ItemsService.delete(id);
  }
}
