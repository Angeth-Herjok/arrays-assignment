// I've invited you to fill out a form:
// Arrays
// Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
// arr2 = [true, "green", "where",12,56]

let arr1=[3,7,34,90,12];
let lastElement1=arr1.slice(-1);
console.log(lastElement1);

let arr2=[true, "green", "where",12,56];
let lastElement2=arr2.slice(-1);
console.log(lastElement2);

// Write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Python", "Snake", "Dog"];
let myPets=["Cow", "Python", "Snake", "Dog"];
let result=myPets.join();
console.log(myPets);

// Write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var arr3=[ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
var sortingArr3=arr3.sort();
console.log(sortingArr3);


// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
var arr = ["apple", "mango", "apple","orange", "mango", "mango"];
console.log([...new Set(arr)]);



// Write a JS script to search for the following word in the array.
// 4
// If the word is present, console it else console "the search word was not found"
let arr5 = ["the", "way", "x", 4, 23];
if(arr5.indexOf(4)>=10){
    console(4);
}
else{
    console("the search word was not found");
}





// Write a JS script to sort the following string
let word = "lufituaeb"
let letters=word.split("").sort().join("");
console.log(letters);

