const Discord = require("discord.js");
const client = new Discord.Client();
const version = "1.0"; //version
const prefix = "$"; //add your prefix here
const token = "YOURBOTTOKEN"; //add your token here

client.once('ready', () => {
    console.log(`Proxybot.js v${version}`); //logs once bot is loaded
});

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if (command === "proxies") {
        if (!args.length) { //if no arguments
            return message.author.send(`No Selection of proxies, Do ${prefix}help for help.`);
        } else if (args[0] === "http") { //argument is http

            message.react("👍");

            const http = new Discord.RichEmbed()
                .setTitle("Proxies")
                .setColor(0x00AE86)
                .setDescription("HTTP Proxies - [Download](https://api.proxyscrape.com/?request=getproxies&proxytype=http&timeout=10000&country=all&ssl=all&anonymity=all)")
                .setFooter("Github Proxybot.js", "https://cdn.discordapp.com/embed/avatars/0.png")
                .setTimestamp()

            return message.author.send(http);

        } else if (args[0] === "https") { //argument is https

            message.react("👍");

            const https = new Discord.RichEmbed()
                .setTitle("Proxies")
                .setColor(0x00AE86)
                .setDescription("HTTPS Elite Proxies - [Download](https://api.proxyscrape.com/?request=displayproxies&proxytype=http&timeout=10000&country=all&ssl=yes&anonymity=elite)")
                .setFooter("Github Proxybot.js", "https://cdn.discordapp.com/embed/avatars/0.png")
                .setTimestamp()

            return message.author.send(https);

        } else if (args[0] === "socks4") { //argument is socks4

            message.react("👍");

            const socks4 = new Discord.RichEmbed()
                .setTitle("Proxies")
                .setColor(0x00AE86)
                .setDescription("SOCKS4 Proxies - [Download](https://api.proxyscrape.com/?request=displayproxies&proxytype=socks4&timeout=10000&country=all)")
                .setFooter("Github Proxybot.js", "https://cdn.discordapp.com/embed/avatars/0.png")
                .setTimestamp()

            return message.author.send(socks4);

        } else if (args[0] === "socks5") { //argument is socks5

            message.react("👍");

            const socks5 = new Discord.RichEmbed()
                .setTitle("Proxies")
                .setColor(0x00AE86)
                .setDescription("SOCKS5 Proxies - [Download](https://api.proxyscrape.com/?request=displayproxies&proxytype=socks5&timeout=10000&country=all")
                .setFooter("Github Proxybot.js", "https://cdn.discordapp.com/embed/avatars/0.png")
                .setTimestamp()
            return message.author.send(socks5);

        } else { //argument not recognized
            message.author.send(`Unrecognized`)
        }
    } else if (command === "help") { //help command

        const embed = new Discord.RichEmbed()
            .setTitle("Help Command")
            .setColor(0x00AE86)
            .setDescription(`
Proxybot.js v${version} - github.com/pxoss/proxybot.js
${prefix}proxies [Extention]
http - Grabs HTTP Proxies
https - Grabs HTTPS Elite Proxies
socks4 - Grabs SOCKS4 Proxies
socks5 - Grabs SOCKS5 Proxies
`)
            .setFooter("Github Proxybot.js", "https://cdn.discordapp.com/embed/avatars/0.png")
            .setTimestamp()

        message.channel.send(embed);

    }
});

setInterval(function() {
    client.login(token);
}, 6000); //loops login every minute
