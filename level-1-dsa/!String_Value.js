// String value! Ended
// Description

// Given a stringSof all lowercase letters and each letter has a value of its own.

// The value of the alphabetais1,b is 2,c is 3..... tillz is 26.

// Now you have to find the total value of the given string. The total value of a string is the sum of values of all characters present in string.



// Input
// Input Format

// The first and only line of input contains the StringS.

// Constraints

// 1 <= Length of S <= 1000


// Output
// Print the value of string.


// Sample Input 1 

// aba
// Sample Output 1

// 4
// Hint

// Sample 1 Explanation

// For example, Consider the Stringaba

// Here, the first characterahas a weight of1, the second characterbhas2and the third characteraagain has a weight of1.

// So the sum of stringabahere is equal to : 1 + 2 + 1 = 4.



function stringValue(S) {
    var bag=0;
    var sum=0;
  var z=S.length;
  for(var i=0;i<=z;i++)
  {
      if(S[i]=='a'){
          sum=sum+1;
      }
      if(S[i]=='b'){
          sum=sum+2;
      }
      if(S[i]=='c'){
          sum=sum+3;
      }
      if(S[i]=='d'){
          sum=sum+4;
      }
      if(S[i]=='e'){
          sum=sum+5;
      }
      if(S[i]=='f'){
          sum=sum+6;
      }
      if(S[i]=='g'){
          sum=sum+7;
      }
      if(S[i]=='h'){
          sum=sum+8
      }
       if(S[i]=='i'){
          sum=sum+9;
      }
      if(S[i]=='j'){
          sum=sum+10;
      }
      if(S[i]=='k'){
          sum=sum+11;
      }
      if(S[i]=='l'){
          sum=sum+12;
      }
      if(S[i]=='m'){
          sum=sum+13;
      }
      if(S[i]=='n'){
          sum=sum+14;
      }
       if(S[i]=='o'){
          sum=sum+15;
      }
      if(S[i]=='p'){
          sum=sum+16;
      }
      if(S[i]=='q'){
          sum=sum+17;
      }
      if(S[i]=='r'){
          sum=sum+18;
      }
      if(S[i]=='s'){
          sum=sum+19;
      }
      if(S[i]=='t'){
          sum=sum+20;
      }
       if(S[i]=='u'){
          sum=sum+21;
      }
      if(S[i]=='v'){
          sum=sum+22;
      }
      if(S[i]=='w'){
          sum=sum+23;
      }
      if(S[i]=='x'){
          sum=sum+24;
      }
      if(S[i]=='y'){
          sum=sum+25;
      }
      if(S[i]=='z'){
          sum=sum+26;
      }
     
  }
  console.log(sum)

}
// Multiple method is there I used Brute force