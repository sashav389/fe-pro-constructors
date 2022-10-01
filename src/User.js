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
  let friends = [];
  let likes = [];
  let myBooks = [];


  /**
   *
   * @param {User}thisObj
   * @param {User}anotherObj
   * @param arrThis
   * @param {Array}arrAnother
   */
  function addToArr(thisObj, anotherObj, arrThis, arrAnother){
    let isInOther = false;
    if(arrThis === undefined) arrThis = [];
    for(let i = 0; i < arrThis.length ; i++){
      if(arrThis[i] === anotherObj){
        isInOther = true;
        break;
      }
    }

    if(isInOther){
      arrAnother.filter(elem => elem !== thisObj);
      arrThis.filter(elem => this !== anotherObj);
    }
    else{
      arrAnother.push(thisObj);
      arrThis.push(anotherObj);
    }
  }

  /**
   * @param {User} user
   */
  this.addToFriends = function (user) {
    addToArr(this, user, this.friends, user.friends);
  }

  /**
   * @param {Book} book
   */
   this.likeBook = function(book){
    addToArr(this, book, this.likes, book.likedUsers);
  }

  /**
   * @param {User} user
   */
   this.removeFriend = function(user){
    addToArr(this, user, this.friends, user.friends);
  }
  /**
   * @param {Book} book
   */
   this.unlikeBook = function (book){
    addToArr(this, book, this.likes, book.likedUsers);
  }

  Object.defineProperty(this, 'friendsNames', {
    get() {
      return this.friends.map( elem => elem.name).split(", ");
    },
  });
  Object.defineProperty(this, 'likedBooks', {
    get() {
      return this.likes.map( elem => elem.title).split(", ");

    },
  });
  Object.defineProperty(this, 'publishedBooks', {
    get() {
      return this.myBooks.map( elem => elem.title).split(", ");
    },
  });

}
// git add .
//   git commit -m "try"
// git push