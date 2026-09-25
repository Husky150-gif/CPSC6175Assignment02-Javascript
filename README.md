[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/_1Wxa-6S)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=24297386&assignment_repo_type=AssignmentRepo)
# Week 2 Assignment: JavaScript Fundamentals

## 🎯 Assignment Overview

This assignment introduces you to modern JavaScript (ES6+) syntax and basic asynchronous programming. You'll work with real-world scenarios like managing a simple task list and processing user data. The exercises are designed to be completed in 60-90 minutes.

## 📚 What You'll Learn

- **Modern Variable Declarations**: Using `const` and `let` instead of `var`
- **Arrow Functions**: Writing cleaner, more concise functions
- **Template Literals**: Building strings with embedded expressions
- **Destructuring**: Extracting values from objects and arrays
- **Promises**: Handling asynchronous operations
- **Basic Modules**: Organizing code across files

## 🚀 Getting Started

### Prerequisites
- Basic understanding of JavaScript (variables, functions, arrays, objects)
- Node.js installed on your computer
- A code editor (VS Code recommended)

### Setup Instructions

1. **Accept the GitHub Classroom assignment** (link provided by instructor)

2. **Clone your repository**:
   ```bash
   git clone <your-repository-url>
   cd week2-beginner-assignment
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the tests to see what needs to be completed**:
   ```bash
   npm test
   ```
   Don't worry if tests fail initially - that's expected! ✅

5. **Start coding**:
   - Open the project in your code editor
   - Look for `TODO` comments in the source files
   - Complete each function according to the instructions

## 📁 Project Structure

```
week2-beginner-assignment/
├── src/
│   ├── 01-variables.js      # Variable declarations and scoping
│   ├── 02-functions.js      # Arrow functions and parameters
│   ├── 03-templates.js      # Template literals and string formatting
│   ├── 04-destructuring.js  # Object and array destructuring
│   ├── 05-promises.js       # Basic promise handling
│   └── 06-modules.js        # Simple module exports
├── tests/
│   └── assignment.test.js   # All test cases
├── package.json
├── README.md
└── .gitignore
```

## 📝 Assignment Tasks

### Task 1: Modern Variables (15 minutes)
**File: `src/01-variables.js`**

Learn the difference between `const`, `let`, and when to use each:
- Create constants for configuration values
- Use `let` for variables that change
- Understand block scoping

### Task 2: Arrow Functions (15 minutes)
**File: `src/02-functions.js`**

Practice modern function syntax:
- Convert regular functions to arrow functions
- Work with function parameters and default values
- Understand when to use arrow functions vs regular functions

### Task 3: Template Literals (15 minutes)
**File: `src/03-templates.js`**

Build dynamic strings using template literals:
- Use `${}` syntax for variable interpolation
- Create multi-line strings
- Format user data for display

### Task 4: Destructuring (20 minutes)
**File: `src/04-destructuring.js`**

Extract values from objects and arrays:
- Destructure object properties
- Work with nested objects
- Use array destructuring for function returns

### Task 5: Basic Promises (20 minutes)
**File: `src/05-promises.js`**

Handle asynchronous operations:
- Work with existing promises using `.then()`
- Handle errors with `.catch()`
- Understand basic async patterns

### Task 6: Simple Modules (10 minutes)
**File: `src/06-modules.js`**

Export functions for use in other files:
- Create named exports
- Export utility functions
- Understand module basics

## 🧪 Testing Your Work

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode (recommended while coding)
```bash
npm run test:watch
```

### Run Specific Test Files
```bash
npm run test:variables    # Test variables only
npm run test:functions    # Test functions only
# ... etc
```

## 📊 Grading

Your assignment will be automatically graded based on passing test cases:

| Task | Points | Description |
|------|--------|-------------|
| Variables | 15 | Proper use of const/let, block scoping |
| Functions | 20 | Arrow functions, default parameters |
| Templates | 15 | Template literals, string interpolation |
| Destructuring | 20 | Object/array destructuring |
| Promises | 20 | Basic promise handling |
| Modules | 10 | Function exports |
| **Total** | **100** | |

## 💡 Tips for Success

### 1. Read the TODO Comments Carefully
Each function has detailed instructions in the comments. Read them twice before coding!

### 2. Run Tests Frequently
After completing each function, run the tests to see if it works:
```bash
npm test
```

### 3. Use Console.log for Debugging
Add `console.log()` statements to understand what your code is doing:
```javascript
function myFunction(data) {
    console.log('Input data:', data); // Debug line
    // Your code here
}
```

### 4. Start Simple
Don't try to write perfect code immediately. Get it working first, then improve it.

### 5. Check the Examples
Each file has example code showing the expected pattern.

## 🔍 Understanding the Test Results

When you run `npm test`, you'll see output like this:

```
✓ Variables: should create user config with const
✗ Functions: should format user greeting
  Expected: "Hello, Alice! Welcome back."
  Received: undefined
```

- ✓ = Test passed (your code works!)
- ✗ = Test failed (needs more work)
- The error message tells you what was expected vs what your code returned

## 🆘 Common Issues and Solutions

### Issue: "Cannot find module" error
**Solution**: Make sure you've run `npm install`

### Issue: Tests won't run
**Solution**: Check that you're in the correct directory and Node.js is installed

### Issue: "Unexpected token" error
**Solution**: Check for syntax errors like missing brackets or semicolons

### Issue: Function returns `undefined`
**Solution**: Make sure your function has a `return` statement

### Issue: Arrow function not working
**Solution**: Check the syntax: `const myFunc = (param) => { return result; }`

## 📖 Code Examples

Here are some examples of what you'll be working with:

### Variables Example
```javascript
// Instead of var, use const and let
const API_URL = 'https://api.example.com'; // Never changes
let userCount = 0; // Will change

function addUser() {
    userCount++; // This is fine with let
}
```

### Arrow Function Example
```javascript
// Old way
function greet(name) {
    return 'Hello, ' + name;
}

// New way (what you'll practice)
const greet = (name) => {
    return `Hello, ${name}`;
};

// Even shorter for simple functions
const greet = (name) => `Hello, ${name}`;
```

### Template Literal Example
```javascript
const user = { name: 'Alice', age: 25 };

// Old way
const message = 'Hello, ' + user.name + '! You are ' + user.age + ' years old.';

// New way (what you'll practice)
const message = `Hello, ${user.name}! You are ${user.age} years old.`;
```

## 🎯 Success Criteria

You'll know you've succeeded when:
- [ ] All tests pass (`npm test` shows all green checkmarks)
- [ ] Your code uses modern JavaScript syntax (const/let, arrow functions, template literals)
- [ ] Functions return the expected values according to test specifications
- [ ] No syntax errors or runtime errors

## 🚀 Submission

1. **Complete all TODO items** in the source files
2. **Ensure all tests pass**: `npm test`
3. **Commit your changes**:
   ```bash
   git add .
   git commit -m "Complete Week 2 assignment"
   git push origin main
   ```
4. **Verify on GitHub** that your code is uploaded

The autograder will run when you push to GitHub, and you'll see the results in the "Actions" tab of your repository.

## ⏱️ Time Management

- **Variables & Functions**: 30 minutes
- **Templates & Destructuring**: 35 minutes  
- **Promises & Modules**: 25 minutes
- **Testing & Debugging**: 10 minutes

Take breaks if needed! Learning is more effective when you're focused.

## 📚 Resources

If you get stuck, refer to:
- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [Week 2 Lecture Notes](link-to-lecture)
- Course discussion forum
- Instructor office hours

## 🎉 Final Notes

This assignment builds the foundation for everything else in the course. Take your time to understand each concept rather than rushing through. The skills you learn here will be used in every subsequent assignment.

**Good luck, and happy coding!** 🚀

---

*Remember: Every expert was once a beginner. You've got this!* 💪