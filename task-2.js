// ### Task 2

// Write a JavaScript code to get the even numbers from an array using any looping technique.

// **Input:**
// `const numbers = [12, 98, 5, 41, 23, 78, 46];`

// **Output:**

// `[12, 98, 76, 46]`

let numbers=[12, 98, 5, 41, 23, 78, 46];
for(const num of numbers){

    if(num%2==0){
console.log(num);
    }
}