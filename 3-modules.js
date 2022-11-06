 //commonjs, every file is module (by default)
 //modules-- encapsulated code (only share minimum)
 
 const names = require('./4-names')
 const sayHi = require('./5-utils')
 const data = require('./6-alternative-flavour')
 
 require('./7-mind-grenade')
 console.log(names);
 console.log(data.items[1])
 console.log(data.singleperson.name)
 sayHi(names.john)
 sayHi(names.peter) 
 sayHi('susan') 