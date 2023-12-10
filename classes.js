// Getters and Setters

    let user = {
        name: "John",
        surname: "Smith",
    
        get fullName() {
        return `${this.name} ${this.surname}`;
        },

        set fullName(name) {
            [this.name, this.surname] = name.split(" ");
        }
    };

    console.log(user.fullName);
    
    user.fullName = "Taes Mar"
    console.log(user.fullName)

    // Refactoring by defining accessory properties out the object
        
    
        let book = {
            title: "HP",
            author : "JKR"
        }

        // Area of importance
        Object.defineProperty(book, 'showCase', {
            get(){
                return `${this.title} by ${this.author}`;
            },
            set(value){
                [this.title, this.author] = value.split(" by ");
            }
        });

        console.log(book.showCase)
        book.showCase = "PP by JRP"
        console.log(book.showCase)

    // Note: A property can be accessed either by accessors or data method i.e
        // Object.defineProperty(book, 'test', {
        //     get(){
        //         return "Yayy"
        //     },
        //     value: "Yohoo1"
        // })

        // console.log(book.test)

        // Getters/Setters can be used as a wrapper over real property variables so as to control them more
        let useR = {
            get name(){
                return this._name; // _name Internal property and can't be touched externally
            },

            set name(value){
                if (value.length < 4){
                    return "Name is too short";
                }
                this._name = value;
            }
        }

        // use.name = "Peter"
        // console.log(use.name)
        // console.log(use._name)

        // Using getter and setter to make new code compatible with earlier
        function usER(name, birthday){
            this.name = name;
            this.birthday = birthday

            // Old code is of the format this.name and this.age
            // hence to still ensure older code works
            Object.defineProperty(this, 'age', {
                get(){
                    let todayYear = new Date().getFullYear();
                    return todayYear-this.birthday.getFullYear();
                }
            });
        }

        let john = new usER("John", new Date(1998, 11, 2 ));

        console.log(john.age)


//Class
    // Class methods are non-enumerable. A class definition sets enumerable flag to false for all methods in the "prototype".
    // That’s good, because if we for..in over an object, we usually don’t want its class methods.

    // Classes are in strict mode i.e undeclared variables cannot be used

    // Computed method names

        class dyn_method_class {
            name = "John";

            ['say' + 'Hi'](){
                return this.name;
            }
            
            set name(value){
                this.name = value;
            }

        }

        const fy = new dyn_method_class();
        console.log(fy.sayHi());
        fy.name = 'vi'
        console.log(fy.sayHi());
        

        // Losing "this"
        // Say if an object method is passed around and called in another context, this won't reference to it's object anymore
        
        class Button{
            
            // The this.val defines a private variable
            constructor(value){
                this.val= value;
            }

            click(){
                return this.val;
            }
        }

        let button = new Button("hello");
        console.log(button.click()); // This will work

        // But if the method is passed in another method say setTimeout;
        setTimeout(button.click, 1000); // This will return undefined
        // Undefined because button.click was be a callback to setTimeout, where context of this of button.click is lose
        // In context of setTimeout, this will refer to the global object, but because classes are in strict mode, the value will be undefined


        // This is can dealt using an elegant way i.e Arrow Functions
        class Button{
            
            // The this.val defines a private variable
            constructor(value){
                this.val= value;
            }

            // Arrow functions don't have their own 'this' context. They capture context of this from their surrounding lexical environment
            // Arrow functions bound this to the lexical context i.e button instance.
            // Hence when getting passed arround in a different context, they still preserve their value
            
            click = () => {
                return this.val;
            }
        }


    

