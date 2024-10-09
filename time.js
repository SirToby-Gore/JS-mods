/**
 * ## `sleep`
 * this is part time.js part of JS-mods made by Toby Gore
 * 
 * This has no return value
 * 
 * This needs to be used with an async function, with an await
 * 
 * Example:
 * ```JavaScript
 * async function doSomething() {
    await sleep(2000); // Sleep for 2 seconds
    console.log("After sleeping");  
 }
 * ```
 * ### Args
 * * `ms`
 *      - the amount of time to sleep in milliseconds
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}