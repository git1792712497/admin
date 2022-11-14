let obj = {
  age:1,
  name:2
}


// Shorthand
let {age, ...newObj} = obj;
console.log(newObj); 