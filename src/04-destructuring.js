/**
 * Week 2 Assignment - Destructuring
 * 
 * This file teaches you about destructuring - a way to extract values from
 * objects and arrays into individual variables. It's a cleaner way to get
 * data from complex structures.
 * 
 * Key concepts:
 * - Object destructuring: const { name, age } = user;
 * - Array destructuring: const [first, second] = array;
 * - Default values: const { name = 'Unknown' } = user;
 * - Renaming: const { name: userName } = user;
 */

/**
 * TODO 1: Basic object destructuring
 * 
 * Extract the name and email from the user object using destructuring.
 * Return a greeting message using template literals.
 * 
 * Old way:
 * const name = user.name;
 * const email = user.email;
 * return `Hello ${name}, your email is ${email}`;
 * 
 * New way with destructuring:
 * const { name, email } = user;
 * return `Hello ${name}, your email is ${email}`;
 */
export function extractUserInfo(user) {
    const { name, email } = user;
    return `Hello ${name}, your email is ${email}`;
}

/**
 * TODO 2: Destructuring with default values
 * 
 * Extract name and role from the user object.
 * If role doesn't exist, use 'guest' as the default value.
 * 
 * Use destructuring with default values: const { name, role = 'guest' } = user;
 */
export function getUserRole(user) {
    const { name, role = 'guest' } = user;
    return `${name} is a ${role}`;
}

/**
 * TODO 3: Nested object destructuring
 * 
 * The user object has a nested 'address' object.
 * Extract the city from the nested address object.
 * 
 * Structure: user = { name: "John", address: { city: "New York", state: "NY" } }
 * 
 * Nested destructuring: const { address: { city } } = user;
 */
export function extractUserCity(user) {
    const { address: { city } } = user;
    return `User lives in ${city}`;
}

/**
 * TODO 4: Array destructuring
 * 
 * Extract the first and second items from an array using array destructuring.
 * Return them in a formatted string.
 * 
 * Array destructuring: const [first, second] = array;
 */
export function getFirstTwoItems(items) {
    const [first, second] = items;
    return `First: ${first}, Second: ${second}`;
}

/**
 * TODO 5: Array destructuring with rest operator
 * 
 * Extract the first item and put the rest into a separate array.
 * Use the rest operator (...) to collect remaining items.
 * 
 * Syntax: const [first, ...rest] = array;
 */
export function separateFirstFromRest(numbers) {
    const [first, ...rest] = numbers;
    return { first, rest };
}

/**
 * TODO 6: Destructuring in function parameters
 * 
 * Instead of destructuring inside the function, destructure directly
 * in the function parameters.
 * 
 * Instead of: function formatProduct(product) { const { name, price } = product; }
 * Use: function formatProduct({ name, price }) { ... }
 */
export function formatProduct({ name, price, inStock = true }) {
    return `${name} - $${price} (${inStock ? 'In Stock' : 'Out of Stock'})`;
}

/**
 * TODO 7: Swapping variables with array destructuring
 * 
 * Use array destructuring to swap two variables.
 * This is a clean way to swap without using a temporary variable.
 * 
 * Traditional swap:
 * let temp = a;
 * a = b;
 * b = temp;
 * 
 * Modern swap:
 * [a, b] = [b, a];
 */
export function swapValues(a, b) {
    [a, b] = [b, a];
    return [a, b];
}

/**
 * EXAMPLE FUNCTIONS - Already completed to show the pattern
 */

// Example 1: Basic object destructuring
export const getPersonInfo = (person) => {
    const { firstName, lastName, age } = person;
    return `${firstName} ${lastName} is ${age} years old`;
};

// Example 2: Destructuring with renaming
export const getUserData = (user) => {
    const { name: fullName, email: contactEmail } = user;
    return { fullName, contactEmail };
};

// Example 3: Array destructuring
export const getCoordinates = (point) => {
    const [x, y, z = 0] = point; // z defaults to 0 if not provided
    return { x, y, z };
};

// Example 4: Function parameter destructuring
export const createSummary = ({ title, author, pages = 'Unknown' }) => {
    return `"${title}" by ${author} (${pages} pages)`;
};