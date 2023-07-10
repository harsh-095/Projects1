// Import the filesystem module]
import * as fs from 'node:fs';
function f(){
    

let directory_name = "example_dir";

// Function to get current filenames
// in directory
let filenames = fs.readdirSync(directory_name);

console.log("\nFilenames in directory:");
filenames.forEach((file) => {
	console.log("File:", file);
});
}