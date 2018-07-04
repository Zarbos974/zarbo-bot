const Discord = require('Discord.js');
const bot = new Discord.Client();

var prefix = ("µ")

bot.on('ready', function() {
    bot.user.setActivity("plus fort");
    console.log("Connection is ok , ready to use");
});

bot.login("NDYzNTk1Njc1MzAxNTc2NzE1.DhzB9Q.EBslDhL2zvgItOGVQsR50y2CVv0");


bot.on('message', message => {
    if (message.content === prefix + "help"){
       message.channel.sendMessage("Liste des commandes: \n -*help");
    }
    
    if (message.content === "Salut"){
        message.reply("Bien le bonjour. :)");
        Console.log("Commande Salut effectué");
    }
});

