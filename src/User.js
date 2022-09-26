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
   * @param {User} user
   */
  function addToFriends(user){

  }

  /**
   * @param {Book} book
   */
  function likeBook(book){

  }

  /**
   * @param {User} user
   */
  function removeFriend(user){

  }
    /**
   * @param {Book} book
   */
  function unlikeBook(book){

  }

  Object.defineProperty(this, 'friendsNames', {
    get() {

    },
  });
  Object.defineProperty(this, 'likedBooks', {
    get() {

    },
  });
  Object.defineProperty(this, 'publishedBooks', {
    get() {

    },
  });

}
