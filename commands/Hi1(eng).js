const Discord = require('discord.js');
const client  = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: "Hi",
    execute(message){
        message.channel.send(`GuGu! Hi! ${message.author.username}`);
    }
}