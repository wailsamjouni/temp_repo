const os = require("os");

// User info
const user = os.userInfo();
// console.log(user);

// System uptime in seconds
// console.log(os.uptime());

const infos = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(infos);