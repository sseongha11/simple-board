import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { ApiTags } from '@nestjs/swagger';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('board')
@ApiTags('Board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  // /board
  @Get()
  findAll() {
    return this.boardService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: number) {
    return this.boardService.find(Number(id));
  }

  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create(@Body() data: CreateBoardDto) {
    return this.boardService.create(data);
  }

  @Put(':id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(@Param('id') id: number, @Body() data) {
    return this.boardService.update(Number(id), data);
  }

  @Delete(':id')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(@Param('id') id: number) {
    return this.boardService.delete(Number(id));
  }
}
