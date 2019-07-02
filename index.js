const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if(collection instanceof Array){
        for(let i = 0; i < collection.length; i++){
          callback(collection[i], i , collection);
        }
      }else if (collection instanceof Object){
        let collLength = Object.keys(collection).length;
        for(let i = 0; i < collLength; i++){
          callback(Object.values(collection)[i], i, collection);
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let output = [];
      if(collection instanceof Array){
        for(let i = 0; i<collection.length; i++){
          output.push(callback(collection[i], i, collection));
        }
      }else if(collection instanceof Object){
        let collLength = Object.keys(collection).length;
        for(let i = 0; i<collLength; i++){
          output.push(callback(Object.values(collection)[i], i, collection))
        }
      }
      
      return output;
    },

    reduce: function(collection, callback, acc) {
      if(acc){
        for(let i = 0; i < collection.length; i++){
          acc = callback(acc, collection[i], collection);
        }
        return acc;
      }
      return 0;
    },

    functions: function(object) {
      let output = [];
      for(let i = 0; i < Object.keys(object).length; i++){
        output.push(Object.keys(object)[i]);
      }
      return output;
    },

    find: function(collection, predicate){
      for(let i = 0; i<collection.length;i++){
        if(predicate(collection[i])){
          return collection[i];
        }
      }
    }
  }
})();

let callbackAlert = (value, key, collection) => {
  alert(value);
}

let callbackMap = (value, key, collection) => {
  return value*3;
}

let callbackReduce = (acc, value, collection) => {
  return acc + value;
}

let callbackFind = (num) => {
  return num%2 == 0;
}

fi.libraryMethod();
// fi.each({name: "hans", age: 4}, callbackAlert);
// fi.each([1,4,7],callbackAlert);
// console.log(fi.map([1,2,3],callbackMap));
// console.log(fi.map({first: 1, second: 2, third: 3}, callbackMap));
// console.log(fi.reduce([1,2,3,4], callbackReduce, 0));
// console.log(fi.functions(fi));
// var even = fi.find([1,3,5], callbackFind);
