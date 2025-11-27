// Import the built-in OS module to access system information
const os = require("os");

// Header text
console.log("System info \n");
console.log("-".repeat(50)); // Print 50 dashes as a separator

// -------------------- PLATFORM DETAILS --------------------
console.log("Platform Details: ");

console.log("Platform: ", os.platform());   // Operating system platform (win32, linux, darwin)
console.log("Architecture: ", os.arch());   // CPU architecture (x64, arm, etc.)
console.log("OS type: ", os.type());        // OS name (Windows_NT, Linux, Darwin)
console.log("OS Release: ", os.release());  // OS version number
console.log("Hostname: ", os.hostname());   // Machine name on the network

// -------------------- CPU DETAILS --------------------
console.log("\nCPU info : ");

const cpus = os.cpus(); // Array containing information about each CPU core

console.log("CPU Model : ", cpus[0].model); // Model name (all cores have same model)
console.log("Number of cores : ", cpus.length); // Total number of CPU cores
console.log("CPU Speed : ", cpus[0].speed);     // Speed of CPU core in MHz

console.log("-".repeat(50)); // Separator line

// -------------------- MEMORY DETAILS --------------------
const totalMem = os.totalmem(); // Total system memory in bytes
const freeMem = os.freemem();   // Free/available memory in bytes

// Convert bytes → GB (divide by 1024^3)
console.log(
  "Total Memory : ",
  (totalMem / 1024 / 1024 / 1024).toFixed(2), // Convert and limit to 2 decimals
  "GB"
);

console.log(
  "Free Memory : ",
  (freeMem / 1024 / 1024 / 1024).toFixed(2), // Convert and format
  "GB"
);

console.log("-".repeat(50)); // Separator line

// -------------------- SYSTEM UPTIME --------------------
const uptime = os.uptime(); // Uptime in seconds

// Convert seconds → days, hours, minutes
const days = Math.floor(uptime / 86400);          // 86400 seconds in a day
const hours = Math.floor((uptime % 86400) / 3600); // Remaining hours
const minutes = Math.floor((uptime % 3600) / 60);  // Remaining minutes

console.log(`${days} days ${hours} hours ${minutes} minutes`);
