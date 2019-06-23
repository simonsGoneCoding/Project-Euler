 const dividibleByArguments = (a, b) => {
   const data = []
   let sum = 0;
   for (let i = 1; i < 1000; i++) {
     if ((i % a === 0) || (i % b === 0)) {
       data.push(i)
     }
   }
   for (let j = 0; j < data.length; j++) {
     sum += data[j];
   }
   return console.log(sum)
 }
 dividibleByArguments(3, 5)