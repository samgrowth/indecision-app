
class Person {
    constructor(name = 'Sparkles Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
       return `Hola! I am ${this.name}!`
    }
    getDescription(){
        return `${this.name} is ${this.age} year old.` 
    }
}

class Student extends Person {
    constructor(name, age, major = ''){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Their major is ${this.major}.`
        }

        return description;
    }
}

class Traveler extends Person {
    // homeLocation
    constructor(name, age, homeLocation = ''){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}.`
        }
        return greeting;
    }
}

const me =  new Traveler('Parson McFurglebottoms', 23, 'Bakersfield');
console.log(me.getGreeting());

const other = new Traveler(undefined, undefined, 'Nowhere-ville');
console.log(other.getGreeting());
