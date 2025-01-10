
function Person(name,age){
    this.name=name;
    this.age=age;
    this.sayHello=function(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    }
}
let person1=new Person("John",32);
console.log(person1)
person1.sayHello();


// The Person constructor function accepts name and age as parameters and initializes them using the this keyword.
// The sayHello method is added to the Person prototype, which can be called on any Person object to greet the person.
