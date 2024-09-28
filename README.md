# js-basic-conditions-zero-schema-to-conditions

## We have an image with a schema. Please create code that reflects the conditions outlined in this schema. Understand the distinction between parallel conditions and nested conditions: if one condition follows the branch of another condition, it is considered a nested condition. Conversely, if a condition can start independently and is not related to another condition, it is classified as a parallel condition.

Example:

```js
// Example user object
const user = {
  isLoggedIn: true,
  isAdmin: false,
  hasSubscription: true,
  isEmployee: true,
};

// Nested condition: Checks if the user is logged in first
if (user.isLoggedIn) {
  // Only if the user is logged in, check for admin privileges
  if (user.isAdmin) {
    console.log("Access granted: Admin privileges.");
  } else {
    console.log("Access denied: You need admin privileges.");
  }

  // Parallel condition: Check for subscription and employee status independently
  if (user.hasSubscription) {
    console.log("You have an active subscription.");
  } else {
    console.log("You need an active subscription.");
  }

  if (user.isEmployee) {
    console.log("Welcome, employee!");
  } else {
    console.log("You are not an employee.");
  }
} else {
  console.log("Please log in to access the system.");
}
```

## [Schema link](https://link.excalidraw.com/l/8Hnft8wJ6ty/d7UY764Kvx)

## Criteria:

- Fix all errors in file
- All code should be formatted by eslint (we have pipeline check for this)
- All code should be completed by [guidelines](https://github.com/rammfall-code/guidelines/blob/main/JS.md)
- All code should not have errors in [validator](https://validator.w3.org/nu/)
- All code should not have errors by [git guidelines](https://github.com/rammfall-code/guidelines/blob/main/GIT.md)
