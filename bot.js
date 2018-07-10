var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
            // Just add any case commands if you want to..
            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: 'LOL!'
                });
            break;
            case 'fart':
                bot.sendMessage({
                    to: channelID,
                    message: '*Braaaaaaaaap*'
                });
            break;

            // DONGOLA BOOK VERSES

            case 'dongola1':
                bot.sendMessage({
                    to: channelID,
                    message: '**Chapter 1** ```[1] Dongola of Dongola, the final Dongola, son of Dongola, we beseech thee! [2] Your flatulence great, your dick long and large!  [3] Dongola committed Farticide so we may braap. [4] Dongola. [5] Dongola period.  [6] Thus we begin the tale of Dongola, who committed the ever painful farticide to save mankind, so that they may fart thots to oblivion and play videogvmes!  [7] Dongola! True ruler of Evropa! Supreme Gvmer of Spain! [8] Through your word, we shall retake Constantinopolis and seat on the Hagia Sofias throne as Fvrt King!! [9] Twas the time betwix the hardened storms of yesteryear and the vivid waves of tomorrow land was birthed a child in the village of Dongola [10] The child, born of his father, Dongola, would become the ultimate sacrifice for mankind [11] The child was named Dongola, and he was to commit Farticide to free us all [12] Praise be to Dongola! Bringer of Farticide! [13] BRAAAAPP ``` '
                });
            break;
         }
     }
});