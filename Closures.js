// function outer() {
//     let counter = 0;
//     function inner() {
//         counter++;
//         console.log(counter);
//     }
//     inner();
// }

// outer();
// outer();

// Output will be 1,1;

// lets twik the function little bit and return a function and we will invoke it after sometime.

function outer() {
  let counter = 0;
  let name = "suraj";
  function inner() {
    console.log(counter, name);
    counter++;
    if (counter == 1) {
      name += " tripathi";
    }
    console.log(counter);
  }
  return inner;
}

const fn = outer();
console.log(fn);
fn();
fn();

//This time output will be 1 and 2

//So in Javascript, When we return a function from another function, we are effectively returning a combination of the function definition have an associated persistent memory which could hold on to live data between executions. That combination of the function and its scope chain is what is called the closure in javascript
