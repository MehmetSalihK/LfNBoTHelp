const Discord = require('discord.js');
const Client = new Discord.Client();
const OwnerID = "130515926117253122";

const prefix = "-"

// welcome message

Client.on("guildMemberAdd", member => {
   member.guild.defaultChannel.send("Bienvenue à: " + member.guild.name + " J'espère que vous l'apprécierez ici")
});

Client.on("guildMemberRemove", member => {
   member.guild.defaultChannel.send("Au revoir: " + member.user.username + " de " + member.guild.name)
});

Client.on("guildCreate", guild => {
	console.log("Quelqu'un a ajouté le bot de test à un serveur créé par: " + guild.owner.user.username)
});

Client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	
	let args = message.content.split(" ").slice(1);
	
	if (command === "ping") {
		message.delete (30);
		message.channel.send(`Pong! Time took: ${Date.now() - message.createdTimestamp} ms`).then(d_msg => { d_msg.delete(9999); });
	} else

	if (command === "say") {
		message.delete()
        const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setDescription(message.author.username + " dit: " + args.join(" "));
		message.channel.send({embed})
	} else

	if (command == "helppv") {
		message.delete (30);
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Liste de commandes ADMIN:")
		.addField("Donnera la liste de commande actuelle", "-help")
		.addField("Voire tu a combien de ping pour le bot", "-ping")
		.addField("Va faire dire au bot quelque chose (ADMIN)", "-say [text]")
		.addField("Va faire dire au bot une annonce et taguer tout le monde (ADMIN)", "-announcement [text]")
		.addField("Voire les régles de ce serveur", "-regle")
		.addField("Voire les réseaux sociaux", "-bup")
		.addField("Supprimer le chat (ADMIN)", "-clearchat")
		.addField("Pour la musique", "m!play [URL]")
		.addField("Faire une raport a quelqu'un", "-raport");
		message.channel.send({embed}).then(d_msg => { d_msg.delete(9999); });
	}

	if (command == "help") {
		message.delete (30);
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Liste de commandes ADMIN:")
		.addField("Donnera la liste de commande actuelle", "-help")
		.addField("Voire tu a combien de ping pour le bot", "-ping")
		.addField("Va faire dire au bot quelque chose (ADMIN)", "-say [text]")
		.addField("Va faire dire au bot une annonce et taguer tout le monde (ADMIN)", "-announcement [text]")
		.addField("Voire les régles de ce serveur", "-regle")
		.addField("Voire les réseaux sociaux", "-bup")
		.addField("Supprimer le chat (ADMIN)", "-clearchat")
		.addField("Pour la musique", "m!play [URL]")
		.addField("Faire une raport a quelqu'un", "-raport");
		message.channel.send({embed}).then(d_msg => { d_msg.delete(9999); });
	}

});

Client.login("NDI5NzQ1ODg4MTUyNTE4Njcx.DbQLgQ.VJOkU7cu9WeJU6iZegmvnZbBe9Q");
