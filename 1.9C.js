/*The Fibonacci series is a sequence in mathematics that starts with the numbers 0 and 1, and each successive term is the sum of the previous two numbers. The following is a skeleton of a small program for computing such a sequence. Fill in the required variables, operators, and basic function calls to complete it. This exercise is based on the JavaScript program to print the Fibonacci sequence Links to an external site.(Programiz, n.d.)*/

// Program to compute Fibonacci sequence to N terms.
 

// Three constant variables for example uses of the function.
const term1 = 10;
const term2 = 20; 
const term3 = 30;

// A function to compute the Fibonacci sequence.
// Parameter indicates how many terms to progress to.
function Fibonacci (terms = 0) {
    // Variables for the two terms to add together, starting with 0 and 1.
    let a = 0, b = 1;

    // Variable for storing the next term.
    let nextTerm;

    // Loop through until we have computed the specified number of terms.
    for (let i = 1; i <= terms; i++) {
        // Print the current value of the first term to the console.
        console.log(a);                                    

        // Compute the next term and store it.
        nextTerm = a + b

        // Set the values of the values to add together for the next term.
        a = b;
        b= nextTerm;
    }
}
 

// Call the function above with each of the constant variables.
Fibonacci(term1)
Fibonacci(term2)
Fibonacci(term3)