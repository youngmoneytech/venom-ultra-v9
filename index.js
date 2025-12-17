// ===== Venom Ultra v9 Main File =====
require('dotenv').config();
require('./config.js');

const { startBot } = require('./lib/start'); // Main bot starter
const fs = require('fs');
const { color } = require('./lib/myfunc');

// Watch index.js for updates and auto-reload
let file = require.resolve(__filename);
fs.watchFile(file, () => {
    fs.unwatchFile(file);
    console.log(color(`Update '${__filename}'`));
    delete require.cache[file];
    require(file);
});

// Start the bot
startBot({
    owner: global.owner,
    botName: global.bot_name,
    menuImage: global.menu_image,
    prefix: global.prefix
});

console.log(color(`${global.bot_name} is now running!`));
