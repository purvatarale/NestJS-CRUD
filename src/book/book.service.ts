import { Injectable, NotFoundException } from "@nestjs/common";

export interface Book{
    id:number,
    title:string,
    author:string
}

@Injectable()
export class BookService{
    private books:Book[]=[]
    private idCounter=1
    findAll():Book[]{
        return this.books
    }
    findOne(id:number):Book{
        const book=this.books.find((b)=>b.id===id)
        if(!book){
            throw new NotFoundException(`Book with ID ${id} not found`)
        }
        return book;
    }
    create(title:string, author:string):Book{
        const book: Book={
            id: this.idCounter++,
            title,
            author,
        };
        this.books.push(book);
        return book;
    }
    update(id:number, title:string, author:string): Book{
        const book = this.findOne(id);
        book.title=title;
        book.author=author
        return book;
    }
    remove(id:number):void{
        const index=this.books.findIndex((b)=>b.id===id);
        if(index===-1){
            throw new NotFoundException(`Book with ${id} not found`)
        }
        this.books.splice(index,1)
    }
    clearAll(): void {
        this.books = [];
        this.idCounter = 1;
      }      
}