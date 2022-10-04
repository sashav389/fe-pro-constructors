import { Book } from './Book.js';

/**
 * @param {string} name
 * @param {Date} date
 * @constructor
 * @property {string} name
 * @property {Date} date
 * @property {Book[]} myBooks
 * @property {User[]} friends
 * @property {Book[]} likes
 */
export function User(name, date) {
  this.name = name;
  this.date = date;
  this.friends = [];
  this.likes = [];
  this.myBooks = [];


  /**
   *
   * @param {User}thisObj
   * @param {User}anotherObj
   * @param {[]} arrAnother
   * @param {[]} arrThis
   */

  function addToArr(thisObj, anotherObj, arrAnother, arrThis){
    if(arrThis.includes(anotherObj)){
      let i = 0;
      while(arrThis[i] !== undefined) {
        if(arrThis[i] === anotherObj){
          arrThis.splice(i, 1);
          break;
        }
        i++;
      }
      i = 0;
      while(arrAnother[i] !== undefined) {
        if(arrAnother[i] === thisObj){
          arrAnother.splice(i, 1);
          break;
        }
        i++;
      }
      //arrAnother.filter(elem => elem !== thisObj);
      //arrThis.filter(elem => this !== anotherObj);
    }
    else{
      arrThis.push(anotherObj);

      arrAnother.push(thisObj);
    }
  }


  /**
   * @param {User} user
   */
  this.addToFriends = function (user){
    addToArr(this, user, this.friends, user.friends);
  }

  /**
   * @param {Book} book
   */
  this.likeBook = function (book){
    addToArr(this, book, this.likes, book.likedUsers);
  }

  /**
   * @param {User} user
   */
  this.removeFriend = function (user){
    addToArr(this, user, this.friends, user.friends);
  }
  /**
   * @param {Book} book
   */
  function unlikeBook(book){
    addToArr(this, book, this.likes, book.likedUsers);
  }

  Object.defineProperty(this, 'friendsNames', {
    get() {
      return this.friends.map( elem => elem.name).join(", ");
    },
  });
  Object.defineProperty(this, 'likedBooks', {
    get() {
      return this.likes.map( elem => elem.title).join(", ");

    },
  });
  Object.defineProperty(this, 'publishedBooks', {
    get() {
      return this.myBooks.map( elem => elem.title).join(", ");
    },
  });

}
// git add .
//   git commit -m "try"
// git push