/*
You are given an array of characters arr that consists of sequences of characters separated by space characters. Each space-delimited sequence of characters defines a word.

Implement a function reverseWords that reverses the order of the words in the array in the most efficient manner.

Explain your solution and analyze its time and space complexitie

input:  arr = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',
                'm', 'a', 'k', 'e', 's', '  ',
                'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

output: [ 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e', '  ',
          'm', 'a', 'k', 'e', 's', '  ',
          'p', 'e', 'r', 'f', 'e', 'c', 't' ]
          
*/

function reverseWords(arr) {
    // your code goes here
    var stack = [];
    var newArr = [];
    
   for(var i=arr.length-1;i>=0;i--){
     if(arr[i]!=' '){
          stack.push(arr[i]);
        }
      if(arr[i]==' '){
          while(stack.length>0){
                  newArr.push(stack.pop());
                }
            newArr.push(' ');
         }
   }
    
    while(stack.length>0){
            newArr.push(stack.pop())
          }
     
    console.log(newArr)
     return newArr;
  }
  
  
  reverseWords(["a"," "," "," ","b"])