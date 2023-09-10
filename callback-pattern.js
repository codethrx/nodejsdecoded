// function
function callbackFn(name) {
  console.log(`Hey ${name}`);
}
function higherOrderFunction(name, callback) {
  callback(name);
}
higherOrderFunction("Tatheer Mehdi", callbackFn);
//Types of callbacks
//1.Synchronous callbacks
//Fns passed to sort , map find filter etc.
//2.Asynchronous callbacks
