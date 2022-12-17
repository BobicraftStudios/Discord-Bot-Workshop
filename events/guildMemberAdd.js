const { Events, AttachmentBuilder } = require("discord.js");
const { createCanvas, loadImage } = require('canvas');

module.exports = {
    name: Events.GuildMemberAdd,
    once: false,
    async execute(member){
        const channel = member.guild.channels.cache.find(ch => ch.name === 'welcome');
        if(!channel) return;

        const canvas = createCanvas(700, 250);
        const ctx = canvas.getContext('2d');
        const background = await loadImage('./assets/welcome.png')
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#74037b'
        ctx.strokeRect(0, 0, canvas.width, canvas.height)
        ctx.font = '28px sans-serif';
        ctx.fillStyle = "#ffffff";
        ctx.fillText('Bienvenide al server', canvas.width/2.5, canvas.height/3.5);
        ctx.font = '48px sans-serif';
        ctx.fillStyle = "#ffffff";
        ctx.fillText(member.displayName, canvas.width/2.5, canvas.height/1.8);
        ctx.beginPath();
        ctx.arc(125, 125, 100, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.clip();
        const avatar = await loadImage(member.user.displayAvatarURL({extension: 'png'}))
        ctx.drawImage(avatar, 25, 25, 200, 200);
        const attachment = new AttachmentBuilder()
            .setFile(canvas.toBuffer())
            .setName('welcome-image.png')
        channel.send({content: "HOLA", files: [attachment]})
        console.log("Message sent.")
    },
}