const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

const createLogFiles = () => {

    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log('Created Logs directory:', logsDir);
    } else {
        console.log('Logs directory already exists.');
    }

    process.chdir(logsDir);

    for (let i = 1; i <= 10; i++) {
        const logFileName = `logfile${i}.txt`;
        const logMessage = `This is log file number ${i}`;
        fs.writeFileSync(logFileName, logMessage);
        console.log('Created file:', logFileName);
    }
};

createLogFiles();
