// Palindromic Substring 
// Description

// You are provided a stringS.

// Write a program that returns length of the longest palindromic substring of that string.


// Input
// Input Format

// First line contains S, a string.

// Constraints

// `1 <= Length of string <= 100


// Output
// Output Format

// Output one number which is length of the longest substring which is a palindrome


// Sample Input 1 

// thisracecarisgood
// Sample Output 1

// 7
// Hint

// Sample 1 Explanation

// The given string contains a palindromic substring which is, "racecar" and it is of largest length(7) among all other palindromic substrings.

// Hence the output is 7


function pallidrome(str){
    var rev="";
    for(var i=str.length-1;i>=0;i--){
        rev=rev+str[i];
    }
    if(str==rev){
        return true;
    }
    else
    {
        return false;
    }
}

function masaiPalSubString(S){
    var max=0;
    var n=S.length;
    for(var start=0;start<n;start++){
        for(var end=start;end<n;end++){
            var string="";
            for(var i=start;i<=end;i++){
                string=string+S[i];
            }
            if(pallidrome(string)){
                if(string.length>max){
                    max=string.length;
                }
            }
        }
    }
    console.log(max)
}