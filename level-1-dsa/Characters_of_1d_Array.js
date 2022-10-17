// Characters of a 1D Array X Ended
// Description

// You are given a string, whose size is stored in a variable with the nameN

// The string is stored in a variable with the namestr

// Each element of the string contains one of these symbols -'*', '%', '@'

// The symbols represent the following values

// * -> 3

// % -> 2

// @ -> 1

// You have to find the sum of the string, such that for each symbol add the value of its corresponding values

// For example, consider the value stored inN = 5, and the value stored in str =*@%%@

// Therefore, replacing each value with its corresponding value, we get -31221Which is the required answer.


// Input
// The first line of the input contains the value stored inN

// The next line stores the value stored instr


// Output
// Print the output as explained in the problem statement

// Sample Input 1 

// 5
// *@%%@
// Sample Output 1

// 31221

function charactersofArray(N, str){
    var bag='';
var l=str.length-1;
for(var i=0;i<=l;i++){
    var r='';
    if(str[i]=="*"){
        r=r+3
    }
    else if(str[i]=="@"){
        r=r+1;
    }
    else if(str[i]=="%"){
        r=r+2;
    }
    bag=bag+r;
}
console.log(bag)
}