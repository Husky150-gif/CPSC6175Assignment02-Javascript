/**
 * Week 2 Assignment - Arrow Functions
 * 
 * This file teaches you about arrow functions - a shorter way to write functions
 * that was introduced in ES6. Arrow functions are great for simple operations.
 * 
 * Key concepts:
 * - Arrow function syntax: const myFunc = (param) => { return result; }
 * - Short form: const myFunc = (param) => result; (no braces needed)
 * - Default parameters: const myFunc = (param = defaultValue) => result;
 */

/**
 * TODO 1: Convert to arrow function
 * 
 * Below is a regular function. Your task is to create an arrow function
 * that does the same thing.
 * 
 * Regular function:
 * function add(a, b) {
 *     return a + b;
 * }
 * 
 * Convert it to: const add = (a, b) => a + b;
 */
export const add = null; // TODO: Replace null with your arrow function

/**
 * TODO 2: Arrow function with default parameter
 * 
 * Create an arrow function called 'greet' that:
 * - Takes one parameter called 'name'
 * - Has a default value of 'Friend' for the name parameter
 * - Returns a greeting like "Hello, Alice!" or "Hello, Friend!" if no name provided
 * 
 * Syntax: const greet = (name = 'Friend') => `Hello, ${name}!`;
 */
export const greet = null; // TODO: Replace null with your arrow function

/**
 * TODO 3: Arrow function for array processing
 * 
 * Create an arrow function called 'getFirstName' that:
 * - Takes a user object as parameter
 * - The user object has a 'fullName' property like "John Doe"
 * - Returns just the first name (everything before the first space)
 * 
 * Hint: Use split(' ')[0] to get the first part of a string split by spaces
 * Example: "John Doe".split(' ')[0] returns "John"
 */
export const getFirstName = null; // TODO: Replace null with your arrow function

/**
 * TODO 4: Arrow function with multiple operations
 * 
 * Create an arrow function called 'calculateTotalPrice' that:
 * - Takes two parameters: price and taxRate (default taxRate = 0.1 for 10%)
 * - Calculates the total price including tax
 * - Returns the result rounded to 2 decimal places
 * 
 * Formula: total = price + (price * taxRate)
 * Use Math.round(total * 100) / 100 to round to 2 decimal places
 */
export const calculateTotalPrice = null; // TODO: Replace null with your arrow function

/**
 * TODO 5: Arrow function that returns an object
 * 
 * Create an arrow function called 'createUser' that:
 * - Takes two parameters: name and email
 * - Returns an object with properties: name, email, and id
 * - The id should be a random number: Math.floor(Math.random() * 1000)
 * 
 * Important: When returning an object with arrow functions, wrap it in parentheses!
 * Syntax: const myFunc = (param) => ({ key: value });
 */
export const createUser = null; // TODO: Replace null with your arrow function

/**
 * TODO 6: Arrow function for filtering
 * 
 * Create an arrow function called 'isValidEmail' that:
 * - Takes an email string as parameter
 * - Returns true if the email contains '@' and '.', false otherwise
 * - Use includes() method: email.includes('@') returns true if email contains '@'
 */
export const isValidEmail = null; // TODO: Replace null with your arrow function

/**
 * EXAMPLE FUNCTIONS - Already completed to show the pattern
 */

// Example 1: Simple arrow function
export const multiply = (a, b) => a * b;

// Example 2: Arrow function with default parameter
export const sayHello = (name = 'World') => `Hello, ${name}!`;

// Example 3: Arrow function with block body (multiple statements)
export const formatUserInfo = (user) => {
    const name = user.name.toUpperCase();
    const email = user.email.toLowerCase();
    return `${name} (${email})`;
};

// Example 4: Arrow function returning an object
export const createProduct = (name, price) => ({
    name,
    price,
    id: Math.random().toString(36).substr(2, 9)
});