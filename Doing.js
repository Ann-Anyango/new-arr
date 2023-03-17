// Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
// arr2 = [true, "green", "where",12,56]
let ele=[3,7,34,90,12];
let lasteElement=ele.slice(-1);
console.log(ele);

// Write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Python", "Snake", "Dog"];
let myPets=["cow","python","Snake","Dog"];
console.log(myPets.toString());
// Write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
let arr3=[-5,9,5,3,2,-3,6,8,4,1];
console.log(arr3.sort());
// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple",
//             "orange", "mango", "mango"];
let arr = ["apple","mango","apple","orange","mango","mango"]
let  characters = [new Set(arr)];
console.log(characters);


// ;Write a JS script to search for the following word in the array.
// // 4
// If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4, 23];
let arr5=["the","way","x","4","23"];
let toFind= 4;
if (toFind == "way"){
  console.log(toFind)
}
else{
  console.log("the search word is not found")
}
// Write a JS script to sort the following string
// let word = "lufituaeb"
// let word="lufituaeb";
//  let sortedArray=word.sort();
// console.log (word);