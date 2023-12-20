// Day 2 task
//Write a program that prints the first 10 multiples of a given number. If the number is negative or zero, print an error message



let printMultiples(number) {
    if (number <= 0) {
        console.log("Error: Please enter a positive non-zero number.");
    } else {
        console.log(`The first 10 multiples of ${number} are:`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${number} x ${i} = ${number * i}`);
        }
    }
}

// Example multiples for the number 7
printMultiples(7);

//output
printMultiples(7);
The first 10 multiples of 7 are:
7 x 1 = 7
7 x 2 = 14
7 x 3 = 21
7 x 4 = 28
7 x 5 = 35
7 x 6 = 42
7 x 7 = 49
7 x 8 = 56
7 x 9 = 63
7 x 10 = 70

