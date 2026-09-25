/**
 * Week 2 Assignment - Basic Promises
 * 
 * This file teaches you about Promises - a way to handle asynchronous operations
 * in JavaScript. Promises represent a value that may be available now, in the
 * future, or never. They're much cleaner than callbacks!
 * 
 * Key concepts:
 * - .then() - handles successful results
 * - .catch() - handles errors
 * - Promise.resolve() - creates a resolved promise
 * - Basic promise chaining
 */

/**
 * HELPER FUNCTIONS - These simulate async operations (already provided)
 * You don't need to modify these, but read them to understand what they do.
 */

// Simulates fetching a user from an API
function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                resolve({ id: userId, name: `User${userId}`, email: `user${userId}@example.com` });
            } else {
                reject(new Error('Invalid user ID'));
            }
        }, 100); // Simulates network delay
    });
}

// Simulates saving data to a database
function saveData(data) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data && data.name) {
                resolve({ success: true, id: Math.random() });
            } else {
                reject(new Error('Invalid data'));
            }
        }, 50);
    });
}

/**
 * TODO 1: Basic promise handling
 * 
 * Use the fetchUser function (provided above) to get user data.
 * Handle both success and error cases.
 * 
 * Return a Promise that resolves with a success message or rejects with an error.
 * 
 * Success message: "Found user: [name]"
 * Error: pass through the original error
 */
export function getUserInfo(userId) {
    // TODO: Use fetchUser(userId) and handle the result
    // return fetchUser(userId)
    //     .then(user => {
    //         return `Found user: ${user.name}`;
    //     })
    //     .catch(error => {
    //         throw error; // Re-throw the error
    //     });
}

/**
 * TODO 2: Promise chaining
 * 
 * Chain two promises together:
 * 1. First, fetch a user with fetchUser(userId)
 * 2. Then, save that user's data with saveData(user)
 * 3. Return a success message with the user's name
 * 
 * Return: "User [name] saved successfully"
 * If any step fails, let the error bubble up.
 */
export function fetchAndSaveUser(userId) {
    // TODO: Chain fetchUser and saveData
    // return fetchUser(userId)
    //     .then(user => {
    //         return saveData(user);
    //     })
    //     .then(result => {
    //         return `User saved successfully`;
    //     });
    
    // Note: You'll need to modify this to include the user's name in the message
    // Hint: You might need to store the user data from the first .then()
}

/**
 * TODO 3: Error handling with specific messages
 * 
 * Fetch a user and return either success or a user-friendly error message.
 * Don't let the raw error bubble up - convert it to a friendly message.
 * 
 * Success: "Welcome, [user name]!"
 * Error: "Sorry, we couldn't find that user."
 */
export function getWelcomeMessage(userId) {
    // TODO: Fetch user and handle errors gracefully
    // return fetchUser(userId)
    //     .then(user => {
    //         return `Welcome, ${user.name}!`;
    //     })
    //     .catch(error => {
    //         return "Sorry, we couldn't find that user.";
    //     });
}

/**
 * TODO 4: Working with resolved promises
 * 
 * Sometimes you have data that's already available but you want to work with it
 * as a Promise (for consistency with other async operations).
 * 
 * Create a Promise that immediately resolves with user data, then format it.
 * 
 * Input: { name: "Alice", age: 25 }
 * Output: "Alice (25 years old)"
 */
export function formatUserData(userData) {
    // TODO: Use Promise.resolve() to create a resolved promise
    // Then format the data in a .then() block
    // return Promise.resolve(userData)
    //     .then(user => {
    //         return `${user.name} (${user.age} years old)`;
    //     });
}

/**
 * TODO 5: Promise error recovery
 * 
 * Try to fetch a user, but if it fails, return default user data instead.
 * This shows how to recover from errors gracefully.
 * 
 * If fetchUser succeeds: return the actual user
 * If fetchUser fails: return { id: 0, name: 'Guest', email: 'guest@example.com' }
 */
export function getUserOrDefault(userId) {
    // TODO: Fetch user, but provide fallback on error
    // return fetchUser(userId)
    //     .catch(error => {
    //         return { id: 0, name: 'Guest', email: 'guest@example.com' };
    //     });
}

/**
 * TODO 6: Multiple promise operations
 * 
 * This function should:
 * 1. Fetch user data
 * 2. Create a summary message
 * 3. Save the summary
 * 4. Return confirmation
 * 
 * Chain all operations and return: "Profile summary saved for [user name]"
 */
export function createAndSaveUserSummary(userId) {
    // TODO: Chain multiple operations
    // 1. Fetch the user
    // 2. Create summary data: { name: user.name, summary: `Profile for ${user.name}` }
    // 3. Save the summary data
    // 4. Return success message
    
    // return fetchUser(userId)
    //     .then(user => {
    //         const summary = { name: user.name, summary: `Profile for ${user.name}` };
    //         return saveData(summary);
    //     })
    //     .then(result => {
    //         return "Profile summary saved";
    //     });
    
    // Note: You'll need to access the user name in the final message
    // Hint: Store user data in a variable outside the chain, or restructure the chain
}

/**
 * EXAMPLE FUNCTIONS - Already completed to show the pattern
 */

// Example 1: Basic promise usage
export const getSimpleUserInfo = (userId) => {
    return fetchUser(userId)
        .then(user => `User found: ${user.name}`)
        .catch(error => `Error: ${error.message}`);
};

// Example 2: Promise chaining with data transformation
export const processUser = (userId) => {
    return fetchUser(userId)
        .then(user => {
            // Transform the data
            return {
                ...user,
                displayName: user.name.toUpperCase()
            };
        })
        .then(transformedUser => {
            // Save the transformed data
            return saveData(transformedUser);
        })
        .then(result => {
            return 'User processed and saved';
        });
};