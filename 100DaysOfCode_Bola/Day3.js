

// Write a funtion that takes a base and exponent and multiplies  the base to the poweer of the exponent. 
// Don't worry about negative exponents or bases. 
function power(base, exponent){
    if(exponent === 0) return 1
    return base * power(base, exponent-1)
    
}

// Write a function that returns a factorial.
function factorial(int){
    if(int === 0) return 1
    return int * factorial(int-1)
   
}


// Write a function that returns the product of the numbers in the array. 
function productOfArray(arr){
    if(arr.length === 0) return 1
    return arr[arr.length-1] * productOfArray(arr.slice(0, -1))
}