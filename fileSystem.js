// 1. Create a new txt file using the same fs module method we have
// learned before.
const fs = require("fs");
fs.writeFileSync("task.txt", "this file where created by node js");
// 2. Create a copy of the newly created txt file using a method from
// the fs module.
fs.copyFileSync("task.txt", "task2.txt");
// 3. Rename one of the files using a method from the fs module.
fs.renameSync("task2.txt", "task2Renamed.txt");
// 4. Get a list of all the file names of the current directory using a
// method from the fs module.
console.log(fs.readdirSync("./"));

// 5. Find out and implement another method for the fs module.
fs.mkdirSync("./", "test");
