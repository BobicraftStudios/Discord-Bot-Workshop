const { Events } = require("discord.js");

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(member){
        console.log('Ready! Logged as ' + member.user.tag);
    },
}