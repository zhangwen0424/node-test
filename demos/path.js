let path = require('path');

/**
 * path.resolve([...strings])
 */
console.log(path.resolve())      // returns /workspace/demo
console.log(path.resolve(''))     // returns /workspace/demo
console.log(path.resolve(__dirname)) // returns /workspace/demo
console.log(path.resolve('/img/books', '/net'))  // returns '/net'
console.log(path.resolve('img/books', '/net'))  // returns '/net'
console.log(path.resolve('img/books', './net'))  // returns '/workspace/demo/img/books/net'
console.log(path.resolve('/img/books', './net'))  // returns '/img/books/net'
console.log(path.resolve('/img/books', 'net'))   // returns '/img/books/net'
console.log(path.resolve('/img/books', '../net'))     // returns '/img/net'
console.log(path.resolve('src','/img/books', '../net'))  // returns '/img/net'
console.log(path.resolve('src','./img/books', '../net'))  // returns '/workspace/demo/src/img/net'
console.log(path.resolve('src','img/books', '../net'))   // returns '/workspace/demo/src/img/net'
