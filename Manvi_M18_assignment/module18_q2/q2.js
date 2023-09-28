arr = [5, 1, 22, 25, 6, -1, 8, 10];
seq = [1, 6, -1, 10];

function  isSubsequence(arr , seq)

{

let i = 0 ;
let j = 0;

    while (i < arr.length && j < seq.length) {
        if (arr[i] === seq[j]) {
          j++; 
        }
        i++; 
      }
      return j === seq.length; // if we've reached the end of the subsequence, it's a match
    }

console.log(isSubsequence(arr, seq));
