/**
 * Week 2 Assignment - Test Suite
 * 
 * These tests check your implementations. Don't modify this file!
 * Run the tests with: npm test
 */

// Import all functions from the assignment files
import {
    createUserConfig,
    countActiveUsers,
    categorizeByAge,
    calculateSum,
    createWelcomeMessage
} from '../src/01-variables.js';

import {
    add,
    greet,
    getFirstName,
    calculateTotalPrice,
    createUser,
    isValidEmail
} from '../src/02-functions.js';

import {
    welcomeUser,
    formatUserInfo,
    formatCartTotal,
    createProductCard,
    formatTask,
    generatePasswordResetEmail
} from '../src/03-templates.js';

import {
    extractUserInfo,
    getUserRole,
    extractUserCity,
    getFirstTwoItems,
    separateFirstFromRest,
    formatProduct,
    swapValues
} from '../src/04-destructuring.js';

import {
    getUserInfo,
    fetchAndSaveUser,
    getWelcomeMessage,
    formatUserData,
    getUserOrDefault,
    createAndSaveUserSummary
} from '../src/05-promises.js';

import {
    capitalize,
    getLastItem,
    average,
    isValidPassword,
    formatCurrency,
    double,
    triple,
    greet as moduleGreet
} from '../src/06-modules.js';

describe('Variables and Scoping', () => {
    test('should create user config with const', () => {
        const config = createUserConfig();
        expect(config).toEqual({
            maxLoginAttempts: 3,
            sessionTimeout: 1800,
            theme: 'dark'
        });
    });

    test('should count active users correctly', () => {
        const users = [
            { name: 'Alice', isActive: true },
            { name: 'Bob', isActive: false },
            { name: 'Charlie', isActive: true },
            { name: 'Diana', isActive: false }
        ];
        expect(countActiveUsers(users)).toBe(2);
    });

    test('should count zero active users', () => {
        const users = [
            { name: 'Alice', isActive: false },
            { name: 'Bob', isActive: false }
        ];
        expect(countActiveUsers(users)).toBe(0);
    });

    test('should categorize ages correctly', () => {
        expect(categorizeByAge(25)).toBe('adult');
        expect(categorizeByAge(16)).toBe('teen');
        expect(categorizeByAge(10)).toBe('child');
        expect(categorizeByAge(18)).toBe('adult');
        expect(categorizeByAge(13)).toBe('teen');
    });

    test('should calculate sum of numbers', () => {
        expect(calculateSum([1, 2, 3, 4, 5])).toBe(15);
        expect(calculateSum([10, -5, 3])).toBe(8);
        expect(calculateSum([])).toBe(0);
    });

    test('should create welcome message (example function)', () => {
        expect(createWelcomeMessage('Alice')).toBe('Welcome, Alice!');
        expect(createWelcomeMessage('')).toBe('Welcome, Guest!');
    });
});

describe('Functions and Arrow Functions', () => {
    test('should add two numbers with arrow function', () => {
        expect(add).toBeDefined();
        expect(typeof add).toBe('function');
        expect(add(5, 3)).toBe(8);
        expect(add(-2, 7)).toBe(5);
    });

    test('should greet with default parameter', () => {
        expect(greet).toBeDefined();
        expect(greet('Alice')).toBe('Hello, Alice!');
        expect(greet()).toBe('Hello, Friend!');
    });

    test('should extract first name from full name', () => {
        expect(getFirstName).toBeDefined();
        expect(getFirstName({ fullName: 'John Doe' })).toBe('John');
        expect(getFirstName({ fullName: 'Jane Smith Johnson' })).toBe('Jane');
    });

    test('should calculate total price with tax', () => {
        expect(calculateTotalPrice).toBeDefined();
        expect(calculateTotalPrice(100, 0.1)).toBe(110);
        expect(calculateTotalPrice(50)).toBeCloseTo(55, 1); // Default 10% tax
        expect(calculateTotalPrice(99.99, 0.08)).toBeCloseTo(107.99, 2);
    });

    test('should create user object', () => {
        expect(createUser).toBeDefined();
        const user = createUser('Alice', 'alice@example.com');
        expect(user).toHaveProperty('name', 'Alice');
        expect(user).toHaveProperty('email', 'alice@example.com');
        expect(user).toHaveProperty('id');
        expect(typeof user.id).toBe('number');
    });

    test('should validate email addresses', () => {
        expect(isValidEmail).toBeDefined();
        expect(isValidEmail('test@example.com')).toBe(true);
        expect(isValidEmail('user@domain.org')).toBe(true);
        expect(isValidEmail('invalid-email')).toBe(false);
        expect(isValidEmail('no-at-sign.com')).toBe(false);
        expect(isValidEmail('no-dot@domain')).toBe(false);
    });
});

describe('Template Literals', () => {
    test('should welcome user with template literals', () => {
        expect(welcomeUser('Alice')).toBe('Welcome back, Alice!');
        expect(welcomeUser('Bob')).toBe('Welcome back, Bob!');
    });

    test('should format user info', () => {
        const user = { name: 'John', age: 30, city: 'New York' };
        expect(formatUserInfo(user)).toBe('John (30 years old) from New York');
    });

    test('should format cart total', () => {
        expect(formatCartTotal(3, 12.99)).toBe('3 items × $12.99 = $38.97');
        expect(formatCartTotal(1, 5.50)).toBe('1 items × $5.5 = $5.5');
    });

    test('should create product card HTML', () => {
        const product = {
            name: 'Laptop',
            price: 999.99,
            description: 'High-performance laptop'
        };
        const html = createProductCard(product);
        expect(html).toContain('<div class="product-card">');
        expect(html).toContain('<h3>Laptop</h3>');
        expect(html).toContain('<p>$999.99</p>');
        expect(html).toContain('<p>High-performance laptop</p>');
        expect(html).toContain('</div>');
    });

    test('should format task with and without due date', () => {
        const taskWithDate = { title: 'Complete project', dueDate: '2023-12-01' };
        const taskWithoutDate = { title: 'Review code' };
        
        expect(formatTask(taskWithDate)).toBe('Complete project (Due: 2023-12-01)');
        expect(formatTask(taskWithoutDate)).toBe('Review code');
    });

    test('should generate password reset email', () => {
        const user = { name: 'Alice', email: 'alice@example.com' };
        const resetLink = 'https://example.com/reset?token=abc123';
        const email = generatePasswordResetEmail(user, resetLink);
        
        expect(email).toContain('Hi Alice,');
        expect(email).toContain(resetLink);
        expect(email).toContain('Best regards,');
        expect(email).toContain('The Team');
    });
});

describe('Destructuring', () => {
    test('should extract user info with destructuring', () => {
        const user = { name: 'John', email: 'john@example.com', age: 30 };
        expect(extractUserInfo(user)).toBe('Hello John, your email is john@example.com');
    });

    test('should get user role with default value', () => {
        const userWithRole = { name: 'Alice', role: 'admin' };
        const userWithoutRole = { name: 'Bob' };
        
        expect(getUserRole(userWithRole)).toBe('Alice is a admin');
        expect(getUserRole(userWithoutRole)).toBe('Bob is a guest');
    });

    test('should extract city from nested address', () => {
        const user = {
            name: 'John',
            address: {
                city: 'New York',
                state: 'NY'
            }
        };
        expect(extractUserCity(user)).toBe('User lives in New York');
    });

    test('should get first two items with array destructuring', () => {
        expect(getFirstTwoItems(['apple', 'banana', 'cherry'])).toBe('First: apple, Second: banana');
        expect(getFirstTwoItems([1, 2, 3, 4])).toBe('First: 1, Second: 2');
    });

    test('should separate first from rest', () => {
        const result = separateFirstFromRest([1, 2, 3, 4, 5]);
        expect(result).toEqual({ first: 1, rest: [2, 3, 4, 5] });
        
        const singleResult = separateFirstFromRest([42]);
        expect(singleResult).toEqual({ first: 42, rest: [] });
    });

    test('should format product with parameter destructuring', () => {
        const inStockProduct = { name: 'Laptop', price: 999.99, inStock: true };
        const outOfStockProduct = { name: 'Phone', price: 599.99, inStock: false };
        const defaultProduct = { name: 'Tablet', price: 299.99 };
        
        expect(formatProduct(inStockProduct)).toBe('Laptop - $999.99 (In Stock)');
        expect(formatProduct(outOfStockProduct)).toBe('Phone - $599.99 (Out of Stock)');
        expect(formatProduct(defaultProduct)).toBe('Tablet - $299.99 (In Stock)');
    });

    test('should swap values', () => {
        expect(swapValues(1, 2)).toEqual([2, 1]);
        expect(swapValues('hello', 'world')).toEqual(['world', 'hello']);
    });
});

describe('Promises', () => {
    test('should get user info successfully', async () => {
        const result = await getUserInfo(1);
        expect(result).toBe('Found user: User1');
    });

    test('should handle user not found error', async () => {
        await expect(getUserInfo(-1)).rejects.toThrow('Invalid user ID');
    });

    test('should get welcome message successfully', async () => {
        const result = await getWelcomeMessage(1);
        expect(result).toBe('Welcome, User1!');
    });

    test('should handle welcome message error gracefully', async () => {
        const result = await getWelcomeMessage(-1);
        expect(result).toBe("Sorry, we couldn't find that user.");
    });

    test('should format user data with resolved promise', async () => {
        const userData = { name: 'Alice', age: 25 };
        const result = await formatUserData(userData);
        expect(result).toBe('Alice (25 years old)');
    });

    test('should get user or return default', async () => {
        const validResult = await getUserOrDefault(1);
        expect(validResult.name).toBe('User1');
        
        const defaultResult = await getUserOrDefault(-1);
        expect(defaultResult).toEqual({
            id: 0,
            name: 'Guest',
            email: 'guest@example.com'
        });
    });
});

describe('Modules', () => {
    test('should capitalize strings', () => {
        expect(capitalize).toBeDefined();
        expect(capitalize('hello WORLD')).toBe('Hello world');
        expect(capitalize('JAVASCRIPT')).toBe('Javascript');
        expect(capitalize('tEsT')).toBe('Test');
    });

    test('should get last item from array', () => {
        expect(getLastItem).toBeDefined();
        expect(getLastItem([1, 2, 3])).toBe(3);
        expect(getLastItem(['a', 'b', 'c'])).toBe('c');
        expect(getLastItem([])).toBe(null);
    });

    test('should calculate average of numbers', () => {
        expect(average).toBeDefined();
        expect(average([2, 4, 6])).toBe(4);
        expect(average([1, 2, 3, 4, 5])).toBe(3);
        expect(average([])).toBe(0);
        expect(average([10])).toBe(10);
    });

    test('should validate passwords', () => {
        expect(isValidPassword).toBeDefined();
        expect(isValidPassword('password123')).toBe(true);
        expect(isValidPassword('verylongpassword1')).toBe(true);
        expect(isValidPassword('short1')).toBe(false); // Too short
        expect(isValidPassword('verylongpassword')).toBe(false); // No number
        expect(isValidPassword('pass1')).toBe(false); // Too short
    });

    test('should format currency', () => {
        expect(formatCurrency).toBeDefined();
        expect(formatCurrency(12.5)).toBe('$12.50');
        expect(formatCurrency(100)).toBe('$100.00');
        expect(formatCurrency(0.99)).toBe('$0.99');
    });

    test('should double and triple numbers', () => {
        expect(double).toBeDefined();
        expect(triple).toBeDefined();
        expect(double(5)).toBe(10);
        expect(triple(4)).toBe(12);
        expect(double(0)).toBe(0);
        expect(triple(-3)).toBe(-9);
    });

    test('should export greet function from modules', () => {
        expect(moduleGreet).toBeDefined();
        expect(moduleGreet('World')).toBe('Hello, World!');
    });
});