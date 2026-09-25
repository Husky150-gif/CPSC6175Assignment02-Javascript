/**
 * Week 2 Assignment - Template Literals
 * 
 * This file teaches you about template literals - a better way to build strings
 * in JavaScript. Instead of using + to join strings, you can use backticks (`)
 * and ${} to embed variables and expressions.
 * 
 * Key concepts:
 * - Use backticks instead of quotes: `Hello ${name}`
 * - Embed variables with ${}: `Hello ${user.name}`
 * - Embed expressions: `Total: ${price * quantity}`
 * - Multi-line strings work naturally with backticks
 */

/**
 * TODO 1: Basic template literal
 * 
 * Create a function that returns a personalized welcome message.
 * Use template literals to combine the strings.
 * 
 * Example: if name is "Alice", return "Welcome back, Alice!"
 * 
 * Old way: return "Welcome back, " + name + "!";
 * New way: return `Welcome back, ${name}!`;
 */
export function welcomeUser(name) {
    // TODO: Use template literals to create the welcome message
    // return `Welcome back, ${name}!`;
}

/**
 * TODO 2: Template literal with multiple variables
 * 
 * Create a function that formats user information into a readable string.
 * The user object has properties: name, age, city
 * 
 * Return format: "John (25 years old) from New York"
 */
export function formatUserInfo(user) {
    // TODO: Use template literals to format the user info
    // return `${user.name} (${user.age} years old) from ${user.city}`;
}

/**
 * TODO 3: Template literal with expressions
 * 
 * Create a function that calculates and formats a shopping cart total.
 * Use template literals to show the calculation in the string.
 * 
 * Return format: "3 items × $12.99 = $38.97"
 * Note: Use Math.round(total * 100) / 100 to round to 2 decimal places
 */
export function formatCartTotal(quantity, price) {
    // TODO: Calculate total and use template literals to format
    // const total = quantity * price;
    // const roundedTotal = Math.round(total * 100) / 100;
    // return `${quantity} items × $${price} = $${roundedTotal}`;
}

/**
 * TODO 4: Multi-line template literal
 * 
 * Create a function that generates an HTML card for a product.
 * Use template literals to create multi-line HTML.
 * 
 * The product object has: name, price, description
 * 
 * Return HTML like:
 * <div class="product-card">
 *   <h3>Product Name</h3>
 *   <p>$19.99</p>
 *   <p>Product description here</p>
 * </div>
 */
export function createProductCard(product) {
    // TODO: Create multi-line HTML using template literals
    // return `<div class="product-card">
    //   <h3>${product.name}</h3>
    //   <p>$${product.price}</p>
    //   <p>${product.description}</p>
    // </div>`;
}

/**
 * TODO 5: Template literal with conditional content
 * 
 * Create a function that formats a task with optional due date.
 * If the task has a dueDate, include it in the format.
 * If no dueDate, don't mention it.
 * 
 * With due date: "Complete project (Due: 2023-12-01)"
 * Without due date: "Complete project"
 * 
 * Hint: Use the ternary operator: condition ? "if true" : "if false"
 */
export function formatTask(task) {
    // TODO: Use template literals with conditional content
    // return `${task.title}${task.dueDate ? ` (Due: ${task.dueDate})` : ''}`;
}

/**
 * TODO 6: Template literal for email generation
 * 
 * Create a function that generates a password reset email.
 * The user object has: name, email
 * The resetLink is a string URL.
 * 
 * Return format:
 * "Hi Alice,
 * 
 * Click the link below to reset your password:
 * https://example.com/reset?token=abc123
 * 
 * Best regards,
 * The Team"
 */
export function generatePasswordResetEmail(user, resetLink) {
    // TODO: Create multi-line email template
    // return `Hi ${user.name},
    // 
    // Click the link below to reset your password:
    // ${resetLink}
    // 
    // Best regards,
    // The Team`;
}

/**
 * EXAMPLE FUNCTIONS - Already completed to show the pattern
 */

// Example 1: Simple template literal
export const createGreeting = (name, timeOfDay) => {
    return `Good ${timeOfDay}, ${name}!`;
};

// Example 2: Template literal with calculation
export const formatPrice = (price, currency = 'USD') => {
    return `${currency} $${price.toFixed(2)}`;
};

// Example 3: Multi-line template with indentation
export const createUserProfile = (user) => {
    return `
        <div class="user-profile">
            <img src="${user.avatar}" alt="${user.name}">
            <h2>${user.name}</h2>
            <p>Member since ${user.joinDate}</p>
        </div>
    `.trim(); // .trim() removes leading/trailing whitespace
};