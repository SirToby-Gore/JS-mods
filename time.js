function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    console.log("Before sleeping");
    await sleep(2000); // Sleep for 2 seconds
    console.log("After sleeping");
}

main();