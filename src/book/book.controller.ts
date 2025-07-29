import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { BookService, Book } from "./book.service";

class CreateBookDto{
    title:string;
    author:string;
}

class UpdateBookDto{
    title:string;
    author:string;
}

@Controller('books')
export class BookController{
    constructor(private readonly booksService:BookService){}

    @Get()
    findAll():Book[]{
        return this.booksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id:number):Book{
        return this.booksService.findOne(id);
    }

    @Post()
    create(@Body() createBookDto: CreateBookDto):Book{
        return this.booksService.create(createBookDto.title, createBookDto.author)
    }

    @Put(':id')
    update(@Param('id',ParseIntPipe)id:number, @Body() updateBookDto:UpdateBookDto):Book{
        return this.booksService.update(id,updateBookDto.title, updateBookDto.author);
    }

    @Delete(':id')
    remove(@Param('id',ParseIntPipe) id:number):{message:string}{
        this.booksService.remove(id);
        return {message: `Book with id ${id} is deleted`}
    }

    @Delete()
    clearAll(): {message:string} {
        this.booksService.clearAll();
        return { message: 'All books have been deleted successfully'}
    }

}