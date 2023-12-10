// Closures

// => combination of a function and the surrounding state within which the function (being combined) was declared in
// surrounding state === lexical environment

function makeAdding (firstNumber) {
    // "first" is scoped within the makeAdding function
    const first = firstNumber;
    return function resulting (secondNumber) {
      // "second" is scoped within the resulting function
      const second = secondNumber;
      return first + second;
    }
  }

  const add5 = makeAdding(5);
//   console.log(add5(2));

  /*
  Here, add5 is a reference to the resulting function, created when the makeAdding 
  function is executed, thus it has access to the lexical environment of the resulting 
  function, which contains the first variable, making it available for use, rather 
  than removing it from memory for being out of scope. */


  // Factory Functions
  function createUser(name){
    const discordName = "@" + name;
    return {name, discordName}; // This way of creating objects is a new way introduced post 2015
  }

  const newUser = createUser("Avi")

    // Destructuring
            // Let's destructure this object 
            const {name, discordName} = newUser;
            // console.log(name)
            

            // Let's destructure an array
            let arr = []
            for(let x = 0 ; x<10;x++){
                arr[x] = x;
            }

            // ...rest owns all values from idx = 2  to idx = 9
            const [a,b, ...rest] = arr;
            // console.log(rest)
    
  // Adding private variables and functions in factory funcs
  function createUser(name){
    const discordName = "@" + name;

    // Private variable -> Cannot pe accessed using josh.reputation
    let reputation = 0;
    
    // Private functions (specific to the factory function)
    const getReputation = () => reputation; // similar way like getter
    const giveReputation = () => reputation++; // similar way like setter
    return {name, discordName, getReputation, giveReputation};
    }

    const josh = createUser("josh")
    josh.getReputation();
    josh.giveReputation();
    // console.log({
    //     discordName: josh.discordName,
    //     reputation: josh.getReputation()
    // });

    josh.giveReputation(); // Value of reputation persists for the Josh object due to Closure
    // console.log({
    //     discordName: josh.discordName,
    //     reputation: josh.getReputation()
    // });


    // Let's add Prototyple inheritance to factories
    // Let's extend the User factory into a Player factory

    function createPlayer(name, level){
        const {discordName, getReputation, giveReputation} = createUser(name);
        const getLevel = () => level

        const increaseLevel = () => level=level+getReputation();
        return {name, discordName, getReputation, giveReputation, increaseLevel, getLevel};
    }

    const player1 = createPlayer("josh", 5);

    // console.log({
    //     name:player1.name,
    //     discordName:player1.discordName,
    //     reputation:player1.getReputation(),
    //     playerLevel:player1.getLevel()
    // });

    player1.giveReputation();
    // console.log({
    //     name:player1.name,
    //     discordName:player1.discordName,
    //     reputation:player1.getReputation(),
    //     playerLevel:player1.getLevel()
    // });

    player1.increaseLevel();
    // console.log({
    //     name:player1.name,
    //     discordName:player1.discordName,
    //     reputation:player1.getReputation(),
    //     playerLevel:player1.getLevel()
    // });

    // for(let i = 0; i<5; i++){
    //     player1.giveReputation();
    // }
    // console.log("Reputation loop complete");

    player1.increaseLevel();
    // console.log({
    //     name:player1.name,
    //     discordName:player1.discordName,
    //     reputation:player1.getReputation(),
    //     playerLevel:player1.getLevel()
    // });


// Module IIFEs
const calculator = (function () {
    const add = (a, b) => a+b;
    const sub = (a, b) => a-b;
    const mul = (a, b) => a*b;
    const div = (a, b) => a/b;
    return {add, sub, mul, div};
})();

// Immediately Invoked Function Expression

console.log(calculator.add(1, 2));
console.log(calculator.add(1, 2));
console.log(calculator.add(1, 2));
console.log(calculator.add(1, 2));

export{calculator};
// Encapsulation -> bundling data, code, or something into a single unit, with selective access to the things inside that unit itself.
// Namespacing -> avoiding naming collisions


    
    