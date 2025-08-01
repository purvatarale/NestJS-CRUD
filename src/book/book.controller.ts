import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    ParseIntPipe,
  } from '@nestjs/common';
  import { BookService } from './book.service';
  import { CreateBookDto } from './create-book.dto';
  import { UpdateBookDto } from './update-book.dto';
  import { Book } from './entities/book.entity';
  
  @Controller('books')
  export class BookController {
    constructor(private readonly booksService: BookService) {}
  
    @Get()
    findAll(): Promise<Book[]> {
      return this.booksService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): Promise<Book> {
      return this.booksService.findOne(id);
    }
  
    @Post()
    create(@Body() createBookDto: CreateBookDto): Promise<Book> {
      return this.booksService.create(createBookDto);
    }
  
    @Put(':id')
    update(
      @Param('id', ParseIntPipe) id: number,
      @Body() updateBookDto: UpdateBookDto,
    ): Promise<Book> {
      return this.booksService.update(id, updateBookDto);
    }
  
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
      return this.booksService.remove(id);
    }
  }
  