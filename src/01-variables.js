/**
 * Week 2 Assignment - Variables and Scoping
 * 
 * This file teaches you about modern variable declarations in JavaScript.
 * You'll learn the difference between const, let, and when to use each.
 * 
 * Key concepts:
 * - const: for values that never change
 * - let: for values that will change
 * - Block scoping: variables are only available in their block {}
 */

/**
 * TODO 1: Create a user configuration object
 * 
 * Create a constant called `USER_CONFIG` that contains:
 * - maxLoginAttempts: 3
 * - sessionTimeout: 1800 (30 minutes in seconds)
 * - theme: 'dark'
 * 
 * Use const because this configuration shouldn't change.
 * 
 * @returns {object} The user configuration object
 */
export function createUserConfig() {
    // TODO: Create the USER_CONFIG constant here
    // const USER_CONFIG = { ... };
    
    return USER_CONFIG;
}

/**
 * TODO 2: Count active users with proper variable scoping
 * 
 * This function should:
 * 1. Start with userCount = 0 (use let because it will change)
 * 2. Loop through the users array
 * 3. For each user that is active (user.isActive === true), increment userCount
 * 4. Return the final count
 * 
 * @param {Array} users - Array of user objects with isActive property
 * @returns {number} Number of active users
 */
export function countActiveUsers(users) {
    // TODO: Declare userCount with let (it will change)
    // let userCount = ?;
    
    // TODO: Loop through users and count active ones
    // for (const user of users) {
    //     if (user.isActive) {
    //         userCount++;
    //     }
    // }
    
    // TODO: Return the count
    // return userCount;
}

/**
 * TODO 3: Demonstrate block scoping
 * 
 * This function shows how let and const are block-scoped.
 * Complete the function to return the correct message based on the user's age.
 * 
 * Rules:
 * - If age >= 18: return "adult"
 * - If age >= 13: return "teen"  
 * - Otherwise: return "child"
 * 
 * @param {number} age - Person's age
 * @returns {string} Age category
 */
export function categorizeByAge(age) {
    if (age >= 18) {
        // TODO: Create a const variable called category with value "adult"
        // const category = "adult";
        return category;
    } else if (age >= 13) {
        // TODO: Create a const variable called category with value "teen"
        // const category = "teen";
        return category;
    } else {
        // TODO: Create a const variable called category with value "child"
        // const category = "child";
        return category;
    }
    
    // Note: Each 'category' variable exists only in its block {}
    // This is different from 'var' which would cause conflicts!
}

/**
 * TODO 4: Create a simple counter
 * 
 * This function demonstrates when to use let for changing values.
 * Start with count = 0, then add each number in the numbers array to count.
 * 
 * @param {number[]} numbers - Array of numbers to add
 * @returns {number} Sum of all numbers
 */
export function calculateSum(numbers) {
    // TODO: Initialize count with let (it will change)
    // let count = 0;
    
    // TODO: Loop through numbers and add each to count
    // for (const num of numbers) {
    //     count += num;
    // }
    
    // TODO: Return the final count
    // return count;
}

/**
 * EXAMPLE FUNCTION - Already completed to show the pattern
 * 
 * This function shows proper use of const and let.
 */
export function createWelcomeMessage(userName) {
    const GREETING = 'Welcome'; // const - never changes
    let message = GREETING;     // let - will change
    
    if (userName) {
        message += `, ${userName}!`;
    } else {
        message += ', Guest!';
    }
    
    return message;
}