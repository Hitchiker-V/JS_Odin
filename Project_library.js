// Book objects to be stored in an array

const myLibrary = [];

function Book(title, author, nPages, readStatus="not read yet"){
    this.title = title;
    this.author = author
    this.nPages = nPages;
    this.readStatus = readStatus

    this.info = function(){
        return `${title} by ${author}, ${nPages} pages, ${readStatus}`;
    }

    this.changeStatus = function(status){
        this.readStatus = status;
    }
}

function addBookToLibrary(Book){
    myLibrary.push(Book);
};

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295)
const fellowship = new Book("The Fellowship of the Ring", "J.R.R Tolkien", 215)
const twoTowers = new Book("The Two Towers", "J.R.R Tolkien", 125)
const returnOfKing = new Book("Return of the King", "J.R.R Tolkien", 495)

addBookToLibrary(theHobbit);
addBookToLibrary(fellowship);
addBookToLibrary(twoTowers);
addBookToLibrary(returnOfKing);

returnOfKing.changeStatus('now');
// returnOfKing.readStatus = "read"

for (let i = 0 ; i<myLibrary.length; i++){
    // console.log(myLibrary[i].readStatus);
    console.log(myLibrary[i].title);
}
