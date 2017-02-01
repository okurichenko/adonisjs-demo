'use strict'

/*
|--------------------------------------------------------------------------
| Database Seeder
|--------------------------------------------------------------------------
| Database Seeder can be used to seed dummy data to your application
| database. Here you can make use of Factories to create records.
|
| make use of Ace to generate a new seed
|   ./ace make:seed [name]
|
*/

const Factory = use('Factory')
const Book = use('App/Model/Book')

class DatabaseSeeder {

  * run () {
    new Book({
      id: 1,
      title: 'Lord of the Rings',
      author: 'J. R. R. Tolkien',
      year: 1954,
      page_count: 936
    }).save();
    new Book({
      id: 2,
      title: 'Harry Potter and the Philosopher\'s Stone',
      author: 'J. K. Rowling',
      year: 1997,
      page_count: 623
    }).save();
    new Book({
      id: 3,
      title: 'The Godfather',
      author: 'Mario Puzo',
      year: 1969,
      page_count: 430
    }).save();
    new Book({
      id: 4,
      title: 'A Song of Ice and Fire',
      author: 'George R. R. Martin',
      year: 1996,
      page_count: 754
    }).save();
  }

}

module.exports = DatabaseSeeder
