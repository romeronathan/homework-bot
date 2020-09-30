const Discord = require("discord.js");
const { timers } = require("jquery");

//const GuildModel = require("./model/Guild");
//const { connect } = require("mongoose");
//const { Client } = require("discord.js");
const client = new Discord.Client();
//const { TOKEN } = require("./config.json");
const config = require("./config.json");
const prefix = "!";
var numb;

client.once("ready", () => {
  console.log("Connected as  + ${client.user.tag}");

  client.user.setActivity("with Javascript");
});

client.on("message", (message) => {
  var content = message.content.split(" ");
  let timer;
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  if (command === "homework") {
    message.channel.send(
      "***Homework Due:***\n" +
        // Java
        "__**JAVA PROGRAMMING:**__\n" +
        "Lab 1 & 2 Due October 1st.\n\n" +
        //HTML AND CSS
        "__**HTML AND CSS: **__\n" +
        "Mobile Panini Due October 9th.\n" +
        "Quiz 1 Due October 11th.\n" +
        "Dianes Run Due October 16th. \n\n" +
        //DATA FUNDEMENTALS
        "__**DATA FUNDEMENTALS:**__\n" +
        "Data Fundamentals Assignment 1# Due October 7th.\n\n" +
        //INTRO TO PROGRAMMING
        "__**INTRO TO PROGRAMMING:**__\n" +
        "Quiz 2 Due October 2nd.\n" +
        "Assignment 1 Due October 2nd.\n\n" +
        // GRAPHIC DESIGN
        "__**GRAPHIC DESIGN:**__\n\n" +
        "__**LAWS AND ETHICS IN THE DIGITAL AGE: **__"
    );
  }
  // lectures
  else if (command === "lectures") {
    message.channel.send(
      "***Lecture Links***\n" +
        // Java
        "__**JAVA PROGRAMMING:**__\n" +
        "\n\n" +
        //HTML AND CSS
        "__**HTML AND CSS: **__\n" +
        "https://ca.bbcollab.com/collab/ui/session/join/74599474850c44b987852d5e32192287\n\n" +
        //DATA FUNDEMENTALS
        "__**DATA FUNDEMENTALS:**__\n" +
        "\n\n" +
        //INTRO TO PROGRAMMING
        "__**INTRO TO PROGRAMMING:**__\n" +
        "https://ca.bbcollab.com/collab/ui/session/join/618590d6702b4bd78f9b863a02bd85d530454923285\n\n" +
        // LAW AND ETHICS IN THE DIGITAL
        "__**LAWS AND ETHICS IN THE DIGITAL AGE: **__\n" +
        "https://ca.bbcollab.com/collab/ui/session/join/de0b1f4221734e649c41f6fec30dd148"
    );
  }
  //CountDown
  else if (content[0] == "!countdown") {
    // Set interval on getting numb value
    numb = content[1];

    timer = setInterval(function () {
      // Check to make sure numb value is in between 1-30, clear if not.
      if (numb > 31 || numb < -1) {
        message.channel.send(
          "Sorry, that number is invalid. Try again with any number 1-30!"
        );
        clearInterval(timer);
      }
      // Once numb gets to -1, clear interval
      else if (numb === -1) {
        clearInterval(timer);
      }
      // If numb is 1-30, start countdown.
      else if (numb < 31 && numb > -1) {
        message.channel.send(numb);
        numb -= 1;
      }
    }, 1000);
  }
  if (content[0] == "!stop") {
    message.channel.send("Timer Stopped!");
    numb = -1;
    clearInterval(timer);
  }
  // Coin flip
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
  } // Fuck You Brooke
  else if (command === "brooke") {
    message.channel.send("Fuck you, Brooke!");
  }
});

client.login(process.env.TOKEN);
