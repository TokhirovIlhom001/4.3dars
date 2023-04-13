// -- 1 --//


// class Namuna {
//     constructor() {
//       this.name = 'Noname';
//     }
//   }

//   const namuna1 = new Namuna();

//   console.log(namuna1.name);

// -- 2 --//

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }

//     sayHello() {
//       console.log('Hello, my name is ' + this.name + ' and I am ' + this.age + ' years old.');
//     }
//   }


// -- 3 --//

// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//     age() {
//       const date = new Date();
//       return date.getFullYear() - this.year;
//     }
//   }

//   const myCar = new Car("Ford", 2022);
//   document.getElementById("demo").innerHTML =
//   "Mening moshinam " + myCar.age() + " yoshda.";



// -- 4 --//

// class Cat {
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
//     age() {
//         const date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }

// const myCat = new Cat("lussi", 2020);
// document.getElementById("demo").innerHTML =
//     "Mening mushigim " + myCat.age() + " yoshda.";


// -- 5 --//

// class Person {
//     constructor(name) {
//       this.name = name;
//     }

//     introduce() {
//       console.log(`Hello, my name is ${this.name}`);
//     }
//   }

//   const otto = new Person("noname");

//   otto.introduce();



// -- 6 --//


// class Parent {
//     constructor(name) {
//       this.name = name;
//     }
//     sayHello() {
//       console.log(`Salamalikum, ${this.name}!`);
//     }
//   }

//   class Child extends Parent {
//     constructor(name, age) {
//       super(name);
//       this.age = age;
//     }
//     sayAge() {
//       console.log(`${this.name} ${this.age} yoshda.`);
//     }
//   }

//   const Noname = new Child('Noname', 20);
//   Noname.sayHello();
//   Noname.sayAge();


// -- 7 --//

// class Parent {
//     sayHello() {
//         console.log('Salamalikum!');
//     }
// }

// class Child extends Parent {
//     sayHello() {
//         console.log('Vaalikum assalom!');
//     }
// }

// const child = new Child();
// child.sayHello();

