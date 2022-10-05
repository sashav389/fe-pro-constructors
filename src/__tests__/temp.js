function User(name, date) {
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
    this.unlikeBook = function (book){
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
function Book(title, year, publicationBy, authors) {
    this.title = title;
    this.year = year;
    this.publicationBy = publicationBy;
    this.authors = authors;
    this.likedUsers = [];

    Object.defineProperty(this, 'suggestedBooks', {
        get() {

            let result = this.authors.map(author => author.books.map(title => title));

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
            let arrPublicators = authors.map(author => author.books.map(book => book.publicationBy));

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
function Author(name, dateOfBirth) {
    this.name = name;
    this.dateOfBirth = dateOfBirth;
    this.books = [];
    Object.defineProperty(this, 'setBook', {
        set (book) {
            this.books.push(book);
        },
    });
}
const u1 = new User("sasha" , new Date(2002, 2, 3));
const u2 = new User("masha" , new Date(2002, 2, 3));
const u3 = new User("dasha" , new Date(2002, 2, 3));

const a1 = new Author("1dan", new Date(1978, 10, 1));
const a2 = new Author("2ban", new Date(1978, 10, 1));
const a3 = new Author("3can", new Date(1978, 10, 1));
const a4 = new Author("4man", new Date(1978, 10, 1));
const a5 = new Author("5oan", new Date(1978, 10, 1));

const b1 = new Book("Tesla", 2003, u1, a1);
const b2 = new Book("Merc", 2003, u3, [a1, a3, a4]);
const b3 = new Book("Porsche", 2003, u1, [a2, a4]);
const b4 = new Book("Mits", 2003, u1, [a4, a5]);
const b5 = new Book("Lamb", 2003, u2, [a2, a4, a1]);

a1.books = [b1, b2, b5];
a2.books = [b5, b3];
a3.books = [ b2];
a4.books = [b3, b2,b4, b5];
a5.books = [b4];



