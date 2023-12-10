// Objects and Constructors
function Book (title, author, nPages, readStatus="not read yet"){
    this.title = title;
    this.author = author
    this.nPages = nPages;
    this.readStatus = readStatus

    this.info = function(){
        return `${title} by ${author}, ${nPages} pages, ${readStatus}`;
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295)

console.log(theHobbit.info());

// Prototypes
    // Basics 
    Book.prototype.findName = function() {
        console.log("It's a fucking book");
    }

    
    theHobbit.findName() 
    // Checking if prototype has a particular method
    console.log(Object.prototype.hasOwnProperty('valueOf'));

    //Inheritance

    function Person(name){
        this.name = name;
    }

    Person.prototype.sayName = function(){
        console.log(`Hello, I'm ${this.name}!`);
    };

    function Player(name, marker){
        this.name = name;
        this.marker = marker;
    }

    Player.prototype.getMarker = function(){
        console.log(`My marker is '${this.marker}'`);
    }

    Object.setPrototypeOf(Player.prototype, Person.prototype) //Setting Player object inherit from Person
    console.log(Object.getPrototypeOf(Player.prototype))

    const player1 = new Player('steve', 'X');
    const player2 = new Player('also steve', 'O');

    player1.sayName();
    player2.sayName();

    player1.getMarker();
    player2.getMarker();

