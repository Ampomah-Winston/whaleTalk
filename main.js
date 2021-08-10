let input = 'turpentine and turtles';
const vowels = ['a','e','i','o','u']
let resultArray = [];
for(let i=0; i < input.length; i++){
  for(let ii=0; ii <  vowels.length; ii++){
    if(input[i] === vowels[ii]){
       if(input[i] == 'u' || input[i] == 'e'){
         let doubs = input[i]+=input[i]
          resultArray.push(doubs)
       }else{
          resultArray.push(input[i])
       }
      
    }
  }
}
console.log(resultArray.join())
console.log(resultArray.join().replace(/,/g, '').toUpperCase());