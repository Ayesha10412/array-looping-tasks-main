// ### Task 1

// Write a JavaScript code to reverse the array colors `without using the reverse method`.

// **Input:**
// `const colors = ['red', 'blue', 'green', 'yellow', 'orange']`

// **Output:**

// `['orange', 'yellow', 'green', 'blue', 'red']`

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
let size=colors.length;
for(let i=size-1;i>=0;i--){
    console.log(colors[i]);
}

