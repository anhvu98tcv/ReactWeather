var names = ['1', '2', '3'];

// names.forEach(function(name){
//   console.log(name);
// });
//
// names.forEach((name) => {
//   console.log(name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Vu'));

// var person = {
//   name: 'Andew',
//   sayHello : function(name) {
//     names.forEach( (name) => {
//       console.log(this.name + ' say hello to ' + name);
//     });
//   }
// };
//
// person.sayHello();

var addStatement = (a,b) => {
  return a +b;
}

var addExpress = (a,b) => a+b;

console.log(addStatement(2,3));
console.log(addExpress(3,4));
