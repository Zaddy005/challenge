// Let’s level you up with a real-world style challenge using `async/await` + **API fetching** + **error handling** 🚀
// ---
// ## 🧪 Challenge: Fetch and Display a User’s Name
// ### ✅ Requirements:

// 1. Use this free test API endpoint:
//    [`https://jsonplaceholder.typicode.com/users/1`](https://jsonplaceholder.typicode.com/users/1)

// 2. Write an `async` function called `getUserName()` that:

//    * Uses `fetch` to get the user data
//    * Awaits the `.json()` response
//    * Logs the user's name to the console

// 3. Handle errors gracefully:

//    * If the fetch fails or the response isn't ok, catch the error and log:

//      ```js
//      "❌ Failed to fetch user"
//      ```

// ---

// ### 💡 Example Output (if everything goes well):

// ``` log
// 👤 User Name: Leanne Graham
// ```

// ---

// ### 🔧 Starter:

// ```javascript
// async function getUserName() {
//     try {
//          your code here
//     } catch (err) {
//         console.log("❌ Failed to fetch user");
//     }
// }

// getUserName();
// ```

// ---

// Give it a try!
// Once you're done, paste your solution here and I’ll give you feedback.

// !!!!! Solution !!!!!
// async function getUserName() {
//     try {
//         // your code here
//         let response = await fetch(`https://jsonplaceholder.typicode.com/users/1`);
//         if (!response.ok) throw new Error("Request failed");
//         let user = await response.json();
//         console.log("👤 User Name:", user.name);
//     } catch (err) {
//         console.log("❌ Failed to fetch user");
//     }
// }

// getUserName();

// part 2
// Awesome 😎 Let's take it one level higher — here's your **Bonus Challenge**:

// ---

// ## 🎯 Bonus Challenge: Dynamic Fetch with User ID + Button Click (Browser-Based)

// ### 🧪 What You'll Build:
// * A function that:
//   1. Takes a **user ID**
//   2. Fetches the user from the same API
//   3. Logs the name (or error)
// * Add a **button** to your HTML that:

//   * When clicked, asks for a user ID (via `prompt`)
//   * Then calls the function with that ID

// ---

// ### ✅ Example Flow:

// 1. You open the browser and click the button
// 2. It asks: `"Enter user ID:"`
// 3. You type: `3`
// 4. Console shows:

//    ```
//    👤 User Name: Clementine Bauch
//    ```


// ### 🧩 HTML + JS Starter:

// <html
// <!DOCTYPE html>
// <html>
// <head>
//   <title>Fetch User</title>
// </head>
// <body>

// <button id="fetchUserBtn">Fetch User</button>

// <script>
// async function fetchUserById(id) {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         if (!response.ok) throw new Error("Request failed");

//         const user = await response.json();
//         console.log("👤 User Name:", user.name);
//     } catch (err) {
//         console.log("❌ Failed to fetch user");
//     }
// }

// document.getElementById("fetchUserBtn").addEventListener("click", () => {
//     const id = prompt("Enter user ID:");
//     if (id) {
//         fetchUserById(id);
//     }
// });
// </script>

// </body>
// </html>



async function fetchUserById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) throw new Error("Request failed");

        const user = await response.json();
        console.log("👤 User Name:", user.name);
    } catch (err) {
        console.log("❌ Failed to fetch user");
    }
}

document.getElementById("fetchUserBtn").addEventListener("click", () => {
    const id = prompt("Enter user ID:");
    if (id) {
        fetchUserById(id);
    }
});