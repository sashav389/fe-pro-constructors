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

      let titles = [... new Set (
          this.authors
              .map(author => author.books

              ).flat().map(book => book.title)
      )];
      let i = 0;
      while(titles[i] !== undefined) {
        if(titles[i] === this.title){
          titles.splice(i, 1);
          continue;
        }
        i++;
      }
      return titles.join(", ");
    },
  });
  Object.defineProperty(this, 'suggestedPublicators', {
    get() {
      let arrPublicators = [... new Set(this.authors
          .map(author => author.books)
          .flat().map(book => book.publicationBy.name)
      )];

      let i = 0;
      while(arrPublicators[i] !== undefined) {
        if(arrPublicators[i] === this.publicationBy.name){
          arrPublicators.splice(i, 1);
          continue;
        }
        i++;
      }
      return arrPublicators.join(", ");
    },
  });

}
