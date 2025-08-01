import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book/entities/book.entity';

@Module({
  imports: [    TypeOrmModule.forRoot({
    type: 'sqlite',
    database: 'db.sqlite',
    entities: [Book],
    synchronize: true, // auto-create tables (dev only!)
  })
,BookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
