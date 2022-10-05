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



  function addToArr(thisObj, anotherObj, arrThis,  arrAnother){
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
      const temp = arrThis.push(anotherObj);

      const gg = arrAnother.push(thisObj);
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
      return this.friends.map( friend => friend.name).join(", ");
    },
  });
  Object.defineProperty(this, 'likedBooks', {
    get() {
      return this.likes.map( book => book.title).join(", ");

    },
  });
  Object.defineProperty(this, 'publishedBooks', {
    get() {
      return this.myBooks.map( book => book.title).join(", ");
    },
  });
  Object.defineProperty(this, 'getName', {
    get() {
      return this.name;
    },
  });

}
// git add .
//   git commit -m "try"
// git push
