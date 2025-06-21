// Let’s combine `closure + async/await` into a fun little challenge 🔥
// ## 🧪 **Challenge: Toggle Status with Delay**
// You’ll build a function that:

// 1. Keeps track of a **status** (`"online"` or `"offline"`)
// 2. When called, it:

//    * Logs `"Switching to [next status]..."`,
//    * Waits 2 seconds,
//    * Then logs `"Now [status]"`

// ---

// ### 🔧 Starter Template:

// ```javascript
// function createStatusToggler() {
//   let status = "offline";

//   return async function toggle() {
//      your logic here
//   };
// }

// const toggleStatus = createStatusToggler();

// toggleStatus(); // Switching to online... → (after 2s) Now online
// toggleStatus(); // Switching to offline... → (after 2s) Now offline
// ```

// ---

// ### ✅ What to Implement Inside:

// 1. Flip the status (`offline` → `online` and vice versa)
// 2. Use `await` to simulate a delay
// 3. Log progress messages as shown

// ---

// ### ⏳ Simulate delay helper (you can use this inside your code):

// ```javascript
// function wait(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// ```

// ---

// ## 🧠 Your Turn:

// Try completing the `toggle()` function!
// Once you're done, paste your solution — I’ll check and give feedback.


function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function createStatusToggler(data) {
    // let status = "online";
    let status = data;
    console.log(status);

    return async function toggle() {
        if (status === "offline") {
            status = "online";
            console.log(`Switching to ${status}...`);
        } else {
            status = "offline";
            console.log(`Switching to ${status}...`);
        }

        await wait(2000); // Delay
        console.log(`Now ${status}`);
    };
}

const toggleStatus = createStatusToggler("online");

toggleStatus(); // Switching to offline...
                        // Now offline