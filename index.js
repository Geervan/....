const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Ready for Success'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));  

//////////////////////////////////////////////////////////

const Discord = require('discord.js')
const client = new Discord.Client({ ws: { properties: { $browser: "Discord iOS" }} });
const config = require("./config.js");
const ms = require('ms')
const fs = require('fs');
const unirest = require('unirest');

const akinator = require("discord.js-akinator");


const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);

const PREFIX = "!"

const fetch = require("node-fetch").default;

///const client = new Discord.Client() // Your discord.js or eris client (or djs ShardingManager)
const AutoPoster = require('topgg-autoposter')

//==============================================================//meme
const oatMeal = (message) => {
		client.users.fetch(' 765413318826524682').then((user) => {
			user.send(message);
		});
	};

client.on("message",async message =>{
   if (message.content.startsWith(`!praise`)) {
		var req = unirest('GET', 'https://complimentr.com/api');
		let member = message.mentions.members.first();

		//no mention no api call
		if (member == '' || member == null) {
			return message.reply(
				'you had to include two things and you screwed that up...'
			);
		}

		if (member.user.username === message.author.username) {
			return message.reply(
				'I get it, you like yourself..'
			);
		}
    
		req.end((res) => {
			var praise = String(res.body.compliment);
			try {
				message.channel
					.send(member.user.username + ', ' + praise + '.')
					.then((e) => {
					
				
					})
					.catch((err) => {
					
					});
			} catch (err) {
				oatMeal('praise api error ' + err);
				errorMessage();
			}
		});
	}

})
//////////////////////////////////////////////////////////////////


client.on('message', message => {

    if (message.content.startsWith(`!announce`)) {

        var guildList = client.guilds.cache
        try {
            let messageToSend = new Discord.MessageEmbed()
                .setTitle("Hello Awesome people!")
                .setDescription(`This is a test run for something I might add in the future`)
            guildList.forEach(guild =>{
guild.channels.cache.find(c => c.type === 'text').send(messageToSend)
            });
        } catch (err) {
            console.log(err);
        }
    }

  
});

/////////////////////////////////////////////////////////////////





client.on("ready", () => {
    console.log("Bot is Online")
});

client.on("message", async message => {
   
});


//=======================================================//meme

 // Your discord.js or eris client (or djs ShardingManager)


const ap = AutoPoster('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc3NjcwODY3NDQ3OTE5NDEyNCIsImJvdCI6dHJ1ZSwiaWF0IjoxNjI2MDIyOTA3fQ.IwRGzwg5EJslpS_B9FReXEk9gIocnuUCl-JBCPD2Hmc', client)

ap.on('posted', () => {
  console.log('Posted stats to Top.gg!')
})
const mySecret = process.env['token']

client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'&&'VIEW_CHANNEL'))
    let embed = new Discord.MessageEmbed()
    .setTitle("ShinChan")
   
    .addField("Thank you for inviting me to the server.My name is ShinChan")
    .addField("I am a chatbot and I like Chatting,Chilling with people")
    .addField("To start using me create a channel, you can name the channel anything but the channel name must contain `shinchan` without any fancy fonts and you can add emoji's in it and I will only chat in that channel")
    .addField("Check my cool and fun commands and I get updated very often so make sure you check them regularly! or you can also do `!h`","[website](https://shinchan-website.geervan.repl.co/)")
    .addField("Join our server if you like or to post some suggestions","[support server](https://discord.gg/JPpCPft94b)")
    .addField("Invite me!","[invite](https://discord.com/api/oauth2/authorize?client_id=776708674479194124&permissions=3793222993&scope=bot)")
    .addField("Vote me at top.gg","[vote](https://top.gg/bot/776708674479194124/vote)")
    .addField("Post a review","[review](https://top.gg/bot/776708674479194124)")
     .setColor("#00FFFF")
   channel.send(embed);



})

 

client.on('ready', () => {
    console.log(`${client.user.tag} is Ready.`)
})

// youtube together lol

client.on('message', async message => {
    if (message.content === '!yt') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
              message.channel.send("Please click the link not the buttons.\nTo start watching youtube with friends press this link even if you are in a voice channel. \n(This feature only works if you are on a pc,laptop)\n If need any help feel free to join our support server by using the command `!support`")
                return message.channel.send(`${invite.code}`);
            });
        };
    };
  

   if (message.content === '!yt') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      //const connection = await message.member.voice.channel.join();
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }
});


/////////////////////////////////////////
client.on("message", async message => {

  if(message.content ==="!meme"){
    
  fetch(`https://meme-api.herokuapp.com/gimme`)
  .then(res => res.json())
  .then(json =>{
    let embed = new Discord.MessageEmbed()
    .setTitle(json.title)
    .setColor("#00FFFF")
    .setImage(json.url)
    
   
    message.channel.send(embed);
  })

}

  

 client.user.setActivity('Some status for self satisfaction', { type: 'PLAYING' })



	if (message.content === '!c') {
	 message.channel.send(`Server count: ${client.guilds.cache.size} <:poggythumbsup:833283380686225408> `);
	}

     if (message.content === 's!ping') {  
    message.channel.send(`🏓Latency is ${Date.now() - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }

if(message.content === "!help"){
   let embed = new Discord.MessageEmbed()
   .setTitle("Oof error!")
   .setColor("RED")
 .addField("Please use `!h` or `!info` for viewing commands and please ingnore the `connect4 help command`")
 message.channel.send(embed);
 
}

   if (message.content === "!h" || message.content === "!info"){
     let embed = new Discord.MessageEmbed()
     .setTitle("ShinChan's Help command")
     .setColor("#7FFF00")
     .addField("To start using me create a channel, you can name the channel anything but the channel name must contain `shinchan` in it and I will only chat in that channel")
     .addField('!gif - gives a random ShinChan related gif. You can also search something else like !gif dogs')
     .addField("!meme - sends memes which are capable to fix your day if it was ruined or make you even happier")
     .addField("!8b<question> - This is the 8Ball command this command can give sarcastic answers to the questions you ask")
     .addField("!ttt - This is the tictactoe command you can play with an AI(singleplayer) or with a friend(multiplayer). To play with friends command is !ttt<mention user> ")
     .addField("!praise <mention user> - A praising command which praises a user. You can use this to make your friends happy if they are sad.")
     .addField("!c4 - A connect 4 game command to play with your friends","It takes some time after the first player's move to continue.So please be patient")
     .addField("!search <term> - A search command which fetches info from google")
     .addField("!snake - To play the og snake game","Sometimes it maynot work please be patient")
      .addField("!aki - To play the akinator game on discord")
      .addField("!yt - Use this when in voice channel to watch youtube videos together with friends!!")
     .addField("!invite - sends the invite link of ShinChan")
      .addField("!support - sends the invite of ShinChan's support server")
      .addField("!vote- you can vote for ShinChan")
      .setFooter("If something isnt working probably ShinChan is lacking some permissions so better to  reinvite")
     message.channel.send(embed);
     
   }
   






    let tokens = message.content.split(" ");

      if(tokens[0] === "!gif"){
        let keywords = 'shinchan';
        if(tokens.length > 1){
       keywords = tokens.slice(1, tokens.length).join(" ");
        }

   
   let url =  `https://g.tenor.com/v1/search?q=${keywords}&key=${config.tenorkey}&contentfilter=off`
   let response = await  fetch(url);
   let json = await response.json();

   let index =Math.floor( Math.random(0)*json.results.length)
  message.channel.send(json.results[index].url);
 
      }


      
if(message.content === "!vote"){
  let embed = new Discord.MessageEmbed()
  .setTitle("Vote for ShinChan 🥳🥳")
  .setColor("#00FF7F")
  .addField("Vote for me!","[Vote](https://top.gg/bot/776708674479194124/vote)")
  message.channel.send(embed);
}

if(message.content === "!support"){
  let embed = new Discord.MessageEmbed()
  .setTitle("ShinChan's support server")
  .setColor("#FFFF00")
  .addField("Join our support server","[Support server](https://discord.gg/4ffTc2HpaE)")
  message.channel.send(embed);
}


if(message.content === "!invite"){
  let embed = new Discord.MessageEmbed()
  .setTitle("ShinChan's invite link")
  .setColor("#40E0D0")
  .addField("Invite me  to your server","[Invite](https://discord.com/oauth2/authorize?client_id=776708674479194124&permissions=3793222993&scope=bot)")
  message.channel.send(embed);
}


 if(message.content.startsWith(`!aki`)) {
    
        akinator(message, client);
    }

  
    if (message.author.bot) return

    if (message.channel.name.includes("shinchan") || message.channel.name.includes("𝑺𝒉𝒊𝒏𝒄𝒉𝒂𝒏")) {

     
     
   //fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message.content)}&botname=${client.user.username}&ownername=Harry Potter`)

 /*fetch(`https://api.snowflakedev.org/api/chatbot?message=${encodeURIComponent(message.content)}&name=${config.botname}`, {
        headers: {
            "Authorization": config.authorization
        }
    })*/
      

message.channel.startTyping();
        try {
  
 fetch(`https://api.snowflakedev.org/api/chatbot?message=${encodeURIComponent(message.content)}&name=${config.botname}`, {
        headers: {
            "Authorization": config.authorization
        }
    })
      

    .then(res => res.json())
    .then(data => {
      // for grudges
     //if(message.author.id === "ID of the victim"){
       //message.channel.send("Hello Potter")
     //}else{
     setTimeout(async function() {
      
           message.channel.send(  `\`@${message.author.username}\`` + ": " + data.message);

    }, ms("10"));
   // add a parenthesis after this line 
    });
      message.channel.stopTyping();
    
  }
  catch{(e => console.error('An error occured. Please ensure if you provided the correct details in config.js'));
 }}})


    

client.login("Nzc2NzA4Njc0NDc5MTk0MTI0.X640Ug.s_65thUZBnLznskCmO1wWoTln0k").catch(() => console.log("Invalid token."))



    

