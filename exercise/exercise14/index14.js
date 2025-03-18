// Use nested for-loops to generate a multiplication table (1 to 10). Nested means, put one for-loop inside another for-loop

for (let i = 1; i <= 10; i++) {  // Outer loop for numbers 1 to 10
    for (let j = 1; j <= 10; j++) {  // Inner loop for multiplication with numbers 1 to 10
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log(); // Print a blank line for better readability
}