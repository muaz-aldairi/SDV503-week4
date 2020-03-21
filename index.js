// If statments
//Comparison operators
let green=0;
let red=1;
let orange=2;
let light;

light=green;

if (light==green) {
     console.log( "start walking")
    }
if (light==red) { 
    console.log( "stop walking")
}
if (light==orange) {
  console.log("be ready")
} 
// else if example one
 
if (light==red) { 
    console.log( "stop walking")
}
else if (light==orange) {console.log("be ready")
}
else { 
    console.log("start walking")
}

// else if example two

let learner=1;
let restricted=2;
let full=3;
let international=4;
let licence 

licence=international;

if (licence==learner) {
  console.log("drive with supervisor all the time")
}
 else if (licence==restricted) {
   console.log("drive by yourself only")
 }
 else {
   console.log("drive")
 }
// Truthy and Falsy

 let apple= "one";

 if (apple) {
   console.log("have one");
 }
 else {
   console.log("find one");
 }

// Switch Statement

const person = 'Muaz';

switch (person) {
    case 'Muaz':
        console.log( 'Hi muaz');
    break;
    default:
        console.log('hi');
    break;
    case 'Bere':
        console.log('hi Bere');
    break;
    case 'Maria':
        console.log('hi Maria');
    break;
    
}
// Multi-Criteria Case
const Age = 16;
switch (Age) {
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log('first stage');
        break;
    case 11:
    case 12:
    case 13:
    case 13:
    console.log('second stage');
       break;
   case 14:
   case 15:
   case 16:
    console.log('Third stage');
    break;
  default:
    console.log('Should not be here');
}

// Chained Expressions
const fooo = 3;
let output = '';
switch (fooo) {
  case 0:
    output += 'So ';
  case 1:
    output += 'How ';
  case 2:
    output += 'Old ';
  case 3:
    output += 'Are ';
  case 4:
    output += 'You';
  case 5:
    output += '?';
    console.log(output);
    break;
  case 6:
    output += 'whats ';
  case 7:
      output += 'your ';
  case 8:
      output += 'name ';
  case 9:
        output += '? ';
    console.log(output);
    break;
  default:
    console.log('Please pick a number from 0 to 9!');
}
//Block-Scope Variable in Switch Statements
    const person2 = 'Joe';
switch (person2) {
  case 'Jane': {
    let name = 'Jane';
    console.log(name);}
    break;
  
  case 'John': {
    let name = 'John';
    console.log(name);}
    break;
  
  case 'Joe': {
    let name = 'Joe';
    console.log(name);}
    break;
  
  case 'Mary': {
    let name = 'Mary';
    console.log(name);}
    break;
  
  default: {
    console.log('No name');}
    break;  
}
// another example

const DOB = 1988;
switch (DOB) {
  case 1988: {
    let age = 2020 - DOB;
    console.log(age);
    break;
  }
  case 1997: {
    let age = 2020 - DOB;
    console.log(age);
    break;
  }
  default : {
    console.log("unvalid number");

  }
}

// Ternary Operator
 

 let person1 = {
   name: 'Muaz',
  age : 16,
  driver: null 
};

 if ( person1.age>=16) {
 person1.driver='yes';
 console.log(person1.driver);
 }
 else {
 person1.driver='no';
 console.log(person1.driver);
 }
 
 person1.driver= person1.age>=16 ? 'yes' : 'no';
 console.log(person1.driver);

// another example

 let x = 5
if (x >= 4) {
  console.log('Pass')
} else {
  console.log('No Pass')
}

 let y=(x >= 4) ? 'pass' : 'no pass';
console.log(y);

// third example

let student=0;
let senior=1;
let price=student? 8 : senior ? 6 : 12;
console.log(price);





