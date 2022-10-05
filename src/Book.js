import { Author } from './Author.js';
import { User } from './User.js';

/**
 * @param {string} title
 * @param {Date} year
 * @param {User} publicationBy
 * @param {Author[]} authors
 * @constructor
 * @property {string} title
 * @property {Date} year
 * @property {Author[]} authors
 * @property {User[]} likedUsers
 * @property {User} publicationBy
 */
export function Book(title, year, publicationBy, authors) {
  this.title = title;
  this.year = year;
  this.publicationBy = publicationBy;
  this.authors = authors;
  this.likedUsers = [];

  Object.defineProperty(this, 'suggestedBooks', {
    get() {

      let result = authors.map(author => author.map(book => book.title));
    
      //  result.push(author.books.map(book => book.title));
      
      let i = 0;
      while(result[i] !== undefined) {
        if(result[i] === this.title){
          result.splice(i, 1);
          continue;
        }
        i++;
      }
      return result.join(", ");
    },
  });
  Object.defineProperty(this, 'suggestedPublicators', {
    get() {
      let arrBooks = authors.map(author => author.books.map(book => book.publicationBy.name));
      
//       let arrPublicators = [];
//       for(let book in arrBooks){
//         arrPublicators.push(book.publicationBy.getName);
//       }
      let i = 0;
      while(arrPublicators[i] !== undefined) {
        if(arrPublicators[i] === this.publicationBy.getName){
          arrPublicators.splice(i, 1);
          continue;
        }
        i++;
      }
      return arrPublicators.join(", ");
    },
  });

}
