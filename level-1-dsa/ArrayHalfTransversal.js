// Array Half Traversals X Ended
// Description

// You are given an even sized array stored in a variable with the namearr

// The size of the array is stored in a variable with the valueN

// You have to solve the following equation7*c1 + 2*c2, such that

// c1 -> The sum of the values of the first half of the array

// c2 -> The sum of the values of the second half of the array

// Consider the value stored inN = 6, andarr = [1 2 3 4 5 6]

// Therefore, the first half of the array is[1 2 3], whose sum is1 + 2 + 3 = 6

// Similarly, the second half of the array is[4 5 6], whose sum is4 + 5 + 6 = 15

// Therefore, the value of the equation-7*(6) + 2*(15) = 42 + 30 = 72, which is the required output


// Input
// The first line of the input contains the value stored inN

// The next line contains the value of the array, stored inarr


// Output
// Print the output as explained in the problem statement

// Sample Input 1 

// 6
// 1 2 3 4 5 6
// Sample Output 1

// 72
// Hint

// In sample input the value stored inN = 6, andarr = [1 2 3 4 5 6]

// Therefore, the first half of the array is[1 2 3], whose sum is1 + 2 + 3 = 6

// Similarly, the second half of the array is[4 5 6], whose sum is4 + 5 + 6 = 15

// Therefore, the value of the equation-7*(6) + 2*(15) = 42 + 30 = 72, which is the required output


function arrayHalfTraversal(N, arr){
	var a=0,b=0;
	for(var i=0;i<N;i++){
	    if(i<(N/2)){
	        a+=arr[i]
	    }
	    else{
	        b+=arr[i]
	    }
	}
	console.log(7*a+2*b)
}