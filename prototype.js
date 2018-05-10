class Person{
    constructor(name){
        this.name = name;
    }
} 
var person1 = new Person();

function fun(){

}
var person2 = new Object();
console.log(person1.__proto__ === Person.prototype);
console.log(person2.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__); //null
console.log(Object.prototype) // {}
console.log(Object.prototype.constructor) //[Function: Object]
console.log(person2.__proto__) 
console.log(Person.prototype) // Person {}
console.log(Person.prototype.constructor) //[Function: Person]

console.log(fun.prototype.__proto__)


// 匿名函数声明之前不能调用，声明之后一个一个负值
// var hereOrThere = function() { // function expression
//     return 'here';
//   };
  
//   console.log(hereOrThere()); // alerts here
  
//   hereOrThere = function() {
//     return 'there';
//   };
//   console.log(hereOrThere()); // alerts there

// 声明式函数可以放在任何地方，调用以最后一个为主
//   function hereOrThere() { //function statement
//     return 'here';
//   }
  
//   console.log(hereOrThere()); // alerts 'there'
  
//   function hereOrThere() {
//     return 'there';
//   }
//   console.log(hereOrThere()); // alerts 'there'
  
// 声明式函数跟匿名函数同时使用，
// 匿名函数声明前，调用声明式函数；匿名函数声明后，调用匿名函数；
// console.log(hereOrThere()); // alerts 'there'
//   var hereOrThere = function() { // function expression
//     return 'here';
//   };
  
//   console.log(hereOrThere()); // alerts 'here'
  
//  function hereOrThere() {
//     return 'there';
//   };
//   console.log(hereOrThere()); // alerts 'here'

  
  
console.log(hereOrThere()); // alerts 'there'
 function hereOrThere() {
    return 'there';
  };
  console.log(hereOrThere()); // alerts 'here'

  var hereOrThere = function() { // function expression
    return 'here';
  };
  console.log(hereOrThere()); // alerts 'here'

