function outer() {
    inner();
  }
  
  function inner() {
    console.log(inner.caller);
  }
  
  outer();
  
// const palabra=["hola",];
// let e=Array.isArray(palabra);
// console.log(e);