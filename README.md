# NestJS Books CRUD API

A simple CRUD API built with [NestJS](https://nestjs.com/) to manage books, demonstrating:

- Modules, Controllers, Services structure
- DTOs and validation with `class-validator`
- Database integration with TypeORM and SQLite
- RESTful CRUD endpoints

---

## Features

- Create, read, update, delete books
- Request validation with detailed errors
- SQLite database persistence
- Easy to extend with other DBs (Postgres, MySQL, etc.)

---

## Getting Started

### Prerequisites

- Node.js v16+ (tested)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/nestjs-books-crud.git
cd nestjs-books-crud

Install dependencies:


npm install
# or
yarn install

Run the app:


npm run start
# or
yarn start

The API will run on http://localhost:3000.

API Endpoints
Method
Route
Description
Body (JSON)
GET
/books
Get all books
—
GET
/books/:id
Get book by ID
—
POST
/books
Create a new book
{ "title": string, "author": string }
PUT
/books/:id
Update a book
{ "title"?: string, "author"?: string }
DELETE
/books/:id
Delete a book
—


Validation
title and author are required strings on create.


On update, both fields are optional but must be strings if provided.


Invalid requests return descriptive 400 errors.



Database
Uses SQLite via TypeORM.


Database file db.sqlite is created automatically.


Synchronization enabled for automatic table creation (development only).



Folder Structure
src/
 ├─ books/
 │   ├─ dto/
 │   │   ├─ create-book.dto.ts
 │   │   ├─ update-book.dto.ts
 │   ├─ entities/
 │   │   ├─ book.entity.ts
 │   ├─ books.controller.ts
 │   ├─ books.module.ts
 │   ├─ books.service.ts
 ├─ app.module.ts
 ├─ main.ts

