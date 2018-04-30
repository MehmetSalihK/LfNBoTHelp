const Discord = require('discord.js');
const Client = new Discord.Client();
const OwnerID = "130515926117253122";

const prefix = "-"

// welcome message

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
	if (message.member.hasPermission("ADMINISTRATOR")) {
        const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setDescription(message.author.username + " dit: " + args.join(" "));
		message.channel.send({embed})
	}
   } else
		
	if (command === "cat") {
	   const { body } = await superagent
	   .get('aws.random.cat/meow');
	   const embed = new Discord.RichEmbed()
	   .setColor(0x954D23)
	   .setTitle("Meow :cat:")
	   .setImage(body.file)
	   message.channel.send({embed})
   } else

   if (command === "announcement") {
	   if (message.member.hasPermission("ADMINISTRATOR")) {
		   const color = args[0]
				
		   const text = args.slice(1).join(" ");
		   if (text.length < 1) return message.channel.send("Can not announce nothing");
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor("0x" + color)
		   .setTitle("Important Announcement:")
		   .setDescription(text);
		   message.channel.send("@everyone")
		   message.channel.send({embed})
	   }
   } else

	if (command == "helpadmin") {
		message.delete (30);
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Liste de commandes: ADMIN")
		.addField("Donnera la liste de commande actuelle", "-help")
		.addField("Voire tu a combien de ping pour le bot", "-ping")
		.addField("Voire les régles de ce serveur", "-regle")
		.addField("Voire les réseaux sociaux", "-bup")
		.addField("Savoire tes info personnel", "-info")
		.addField("Voire tes Roles", "-role")
		.addField("Pour la musique", "m!play [URL]")
		.addField("Faire une raport a quelqu'un", "-raport")
		.addField("Supprimer le chat (ADMIN)", "-clearchat")
		.addField("Va faire dire au bot quelque chose (ADMIN)", "-say [text]")
		.addField("Va faire dire au bot une annonce et taguer tout le monde (ADMIN)", "-announcement [text]");
		message.channel.send({embed}).then(d_msg => { d_msg.delete(9999); });
	}

	if (command == "aide") {
		message.delete (30);
		const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setTitle("Liste de commandes:")
		.addField("Donnera la liste de commande actuelle", "-help")
		.addField("Voire tu a combien de ping pour le bot", "-ping")
		.addField("Voire les régles de ce serveur", "-regle")
		.addField("Voire les réseaux sociaux", "-bup")
		.addField("Savoire tes info personnel", "-info")
		.addField("Voire tes Roles", "-role")
		.addField("Pour la musique", "m!play [URL]")
		.addField("Faire une raport a quelqu'un", "-raport")
		.addField("Supprimer le chat (ADMIN)", "-clearchat")
		.addField("Va faire dire au bot quelque chose (ADMIN)", "-say [text]")
		.addField("Va faire dire au bot une annonce et taguer tout le monde (ADMIN)", "-announcement [text]");
		message.channel.send({embed}).then(d_msg => { d_msg.delete(9999); });
	}
	
	if (command == "help") {
		message.delete (30);
		const embed = new Discord.RichEmbed()
  .setAuthor("[ADMIN]" + message.author.username + "[ADMIN]", "https://imgur.com/hd1v8Pr.png")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x00ffff)
  .setDescription("__***:heavy_check_mark::red_circle:BIENVENUE A NOTRE SERVEUR:red_circle::heavy_check_mark:***__")
  .setFooter(" Pour la commande d'aide [-aide]", "https://imgur.com/rAgsGxu.png")
  .setImage("https://imgur.com/StHMUDI.png")
  .setThumbnail(message.author.avatarURL)
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .setURL("https://www.youtube.com/user/parislikuscu")
  .addField("__```Invite lfnbot:```__",
	"https://goo.gl/rwu1wK")
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  .addField("__```Join server:```__", "https://goo.gl/gSGYa3", true)
  /*
   * Blank field, useful to create some space.
   */
		message.channel.send({embed}).then(d_msg => { d_msg.delete(9999); });
	}

	if (command == "role") {
		message.delete (30);
		const embed = new Discord.RichEmbed()
		.addField(message.author.username, "Roles: " + message.member.roles.map(role => role.name).join(" || ")) // user, roles
	   .setColor(0x00ffff)
	   .setThumbnail(message.author.avatarURL)
		message.channel.send({embed});
	}

});

Client.login("NDI5NzQ1ODg4MTUyNTE4Njcx.DbQLgQ.VJOkU7cu9WeJU6iZegmvnZbBe9Q");
