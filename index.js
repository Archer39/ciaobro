const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = ""
var date = new Date()
    client.on("ready", () => {
    console.log("BOT is running!");
    console.log("------------ LOG ------------ > " + date);
    console.log();
});
    client.on("message", (message) => {
        if (message.author.bot) return;
        if (message.content.startsWith(prefix + "AR")) {
var messaggio = message.content;
var numerodado = messaggio.replace(prefix, "").replace("AR", "").split("+")[0].replace("+", "");
var numeroaddizione = messaggio.replace(prefix, "").replace("AR", "").replace(numerodado, "").replace("+", "");
var date = new Date()
        console.log("------------------> " + date)
        console.log("Un utente ha chiesto di lanciare un dado e al risultato addizionare un numero. Il suo nome è: " + message.author.username)
        console.log("L'ID dell'utente è: " + message.author.id)
        console.log("L'ha chiesto nel canale: " + message.channel.name)
        console.log("L'ID del canale è: " + message.channel)
        console.log("Sto lanciando un Dado!")
        console.log("Il numero da addizionare al risultato del dado è: " + numeroaddizione)
        console.log("Il numero delle faccie del dado è: " + numerodado)
            message.react(':game_die:');
            message.channel.send("Sto lanciando il Dado per " + message.author);
var dado = Math.floor(Math.random() * (+numerodado)) + 1
        console.log("Il numero uscito è " + dado)
            message.channel.send(":game_die:");
            //message.channel.send("Il numero uscito è " + dado);
                var risultato = (+dado) + (+numeroaddizione);
                message.channel.send("> ***Questo è il tuo mana:***" + risultato);
        }
});

   client.on("message", (message) => {
        if (message.author.bot) return;
        if (message.content.startsWith(prefix + "ar")) {
var messaggio = message.content;
var numerodado = messaggio.replace(prefix, "").replace("ar", "").split("+")[0].replace("+", "");
var numeroaddizione = messaggio.replace(prefix, "").replace("ar", "").replace(numerodado, "").replace("+", "");
var date = new Date()
        console.log("------------------> " + date)
        console.log("Un utente ha chiesto di lanciare un dado e al risultato addizionare un numero. Il suo nome è: " + message.author.username)
        console.log("L'ID dell'utente è: " + message.author.id)
        console.log("L'ha chiesto nel canale: " + message.channel.name)
        console.log("L'ID del canale è: " + message.channel)
        console.log("Sto lanciando un Dado!")
        console.log("Il numero da addizionare al risultato del dado è: " + numeroaddizione)
        console.log("Il numero delle faccie del dado è: " + numerodado)
            message.react(':game_die:');
            message.channel.send("Sto lanciando il Dado per " + message.author);
var dado = Math.floor(Math.random() * (+numerodado)) + 1
        console.log("Il numero uscito è " + dado)
            message.channel.send(":game_die:");
            //message.channel.send("Il numero uscito è " + dado);
                var risultato = (+dado) + (+numeroaddizione);
                message.channel.send("**Questo è il tuo risultato** : " + risultato);
        }
}); 

    client.on("message", (message) => {
        if (message.author.bot) return;
        if (message.content.startsWith(prefix + "Ar")) {
var messaggio = message.content;
var numerodado = messaggio.replace(prefix, "").replace("Ar", "").split("+")[0].replace("+", "");
var numeroaddizione = messaggio.replace(prefix, "").replace("Ar", "").replace(numerodado, "").replace("+", "");
var date = new Date()
        console.log("------------------> " + date)
        console.log("Un utente ha chiesto di lanciare un dado e al risultato addizionare un numero. Il suo nome è: " + message.author.username)
        console.log("L'ID dell'utente è: " + message.author.id)
        console.log("L'ha chiesto nel canale: " + message.channel.name)
        console.log("L'ID del canale è: " + message.channel)
        console.log("Sto lanciando un Dado!")
        console.log("Il numero da addizionare al risultato del dado è: " + numeroaddizione)
        console.log("Il numero delle faccie del dado è: " + numerodado)
            message.react(':game_die:');
            message.channel.send("Sto lanciando il Dado per " + message.author);
var dado = Math.floor(Math.random() * (+numerodado)) + 1
        console.log("Il numero uscito è " + dado)
            message.channel.send(":game_die:");
            //message.channel.send("Il numero uscito è " + dado);
                var risultato = (+dado) + (+numeroaddizione);
                message.channel.send("**Questo è il tuo risultato** : " + risultato);
        }
});

   client.on("message", (message) => {
        if (message.author.bot) return;
        if (message.content.startsWith(prefix + "aR")) {
var messaggio = message.content;
var numerodado = messaggio.replace(prefix, "").replace("aR", "").split("+")[0].replace("+", "");
var numeroaddizione = messaggio.replace(prefix, "").replace("aR", "").replace(numerodado, "").replace("+", "");
var date = new Date()
        console.log("------------------> " + date)
        console.log("Un utente ha chiesto di lanciare un dado e al risultato addizionare un numero. Il suo nome è: " + message.author.username)
        console.log("L'ID dell'utente è: " + message.author.id)
        console.log("L'ha chiesto nel canale: " + message.channel.name)
        console.log("L'ID del canale è: " + message.channel)
        console.log("Sto lanciando un Dado!")
        console.log("Il numero da addizionare al risultato del dado è: " + numeroaddizione)
        console.log("Il numero delle faccie del dado è: " + numerodado)
            message.react(':game_die:');
            message.channel.send("Sto lanciando il Dado per " + message.author);
var dado = Math.floor(Math.random() * (+numerodado)) + 1
        console.log("Il numero uscito è " + dado)
            message.channel.send(":game_die:");
            //message.channel.send("Il numero uscito è " + dado);
                var risultato = (+dado) + (+numeroaddizione);
                message.channel.send("**Questo è il tuo risultato** : " + risultato);
        }
}); 
 
client.login("MzI0Njg0NjExOTQ0ODQxMjE5.XipLAw.oW1_6sgh7Fw73Hf4E6bIzcpiJ94");