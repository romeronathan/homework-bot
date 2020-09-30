const Discord = require("discord.js");
const { timers } = require("jquery");

//const GuildModel = require("./model/Guild");
//const { connect } = require("mongoose");
//const { Client } = require("discord.js");
const client = new Discord.Client();
//const { TOKEN } = require("./config.json");
const config = require("./config.json");
const prefix = "!";

client.once("ready", () => {
  console.log("Connected as  + ${client.user.tag}");

  client.user.setActivity("with Javascript");
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === "homework") {
    message.channel.send(
      "Homework Due:\n" +
        "Java Lab 1 & 2 Due October 1st.\n" +
        "HTML & CSS Mobile Panini Due October 9th.\n" +
        "HTML & CSS Dianes Run Due October 16th.. "
    );
  } // Egirl
  else if (command === "egirl") {
    message.channel.send("Sorry, did you mean Brooke?");
  } // Toby
  else if (command === "toby") {
    for (let index = 0; index < 3; index++) {
      message.channel.send(
        "https://cdn.discordapp.com/emojis/758697595731574784.png?v=1"
      );
    }
  } // Peter
  else if (command === "peter") {
    for (let index = 0; index < 3; index++) {
      message.channel.send(
        "https://cdn.discordapp.com/emojis/758395138501902366.png?v=1"
      );
    }
  } // Chad
  else if (command === "chad") {
    for (let index = 0; index < 3; index++) {
      message.channel.send(
        "https://cdn.discordapp.com/emojis/758714825911697429.png?v=1"
      );
    }
  } // Pog
  else if (command === "pog") {
    for (let index = 0; index < 3; index++) {
      message.channel.send(
        "https://cdn.discordapp.com/emojis/757996670205296759.png?v=1"
      );
    }
  } // Cai
  else if (command === "cai") {
    for (let index = 0; index < 3; index++) {
      message.channel.send(
        "https://cdn.discordapp.com/emojis/760150527123128320.png?v=1"
      );
    }
  } // Fuck You Brooke
  else if (command === "brooke") {
    message.channel.send("Fuck you, Brooke!");
  } //CountDown
  else if (command === "countdown") {
    var numb = 10;
    var timer = setInterval(function () {
      if (numb <= 0) {
        clearInterval(timer);
      }
      message.channel.send(numb);
      numb -= 1;
    }, 1000);
  } // Coin flip
  else if (command === "flip") {
    x = Math.floor(Math.random() * 2) == 0;
    if (x) {
      message.channel.send("heads");
    } else {
      message.channel.send("tails");
    }
  }
  // 420 blaze it
  else if (command === "420blazeit") {
    message.channel.send(
      "https://cdn.drawception.com/images/panels/2015/3-16/tL5q6W5WOE-2.png"
    );
  }
});

client.login(process.env.TOKEN);

/*if (message.content === "!addhomework") {
    const doc = newGuildModel({ id: message.guild.id });
    await doc.save();
    message.reply("Made new homework entry!");
  } else if (message.content === "!homework") {
    const req = await GuildModel.findOne({ id: message.guild.id });
    if (!req) return message.reply("No homework found!");
    return message.reply("Here is the homework: + ${req.addhomework}");
  }
});

(async () => {
  await connect(
    "mongodb+srv://bob:computer1998@cluster0.oue7q.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useFindAndModify: false,
    }
  );
  return client.login(TOKEN);
})();*/
