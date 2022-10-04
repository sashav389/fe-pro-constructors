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

  Object.defineProperty(this, 'suggestedBooks', {
    get() {

      let result = [];
      for( let author in authors){
        result = result.concat(author.getBooks.map(book => book.title));
      }
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
      let arrBooks = [];
      for(let author in authors){
        arrBooks = arrBooks.concat(author.books);
      }
      let arrPublicators = [];
      for(let book in arrBooks){
        arrPublicators = arrPublicators.concat(book.publicationBy.getName);
      }
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
