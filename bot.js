const Discord = require("discord.js");

const client = new Discord.Client();
const prefix = "!";

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
  // List off homework due
  if (command === "homework") {
    message.channel.send(
      "***Homework Due:***\n" +
        // Java
        "__**JAVA PROGRAMMING:**__\n" +
        "Lab 4 (Convert Celsius to Fahrenheit) Due October 8th.\n" +
        "Lab 5 (Compute Volume of a Cylinder) Due October 8th.\n" +
        "Lab 6 (Sum the digits in an Integer) Due October 8th.\n" +
        //HTML AND CSS
        "__**HTML AND CSS: **__\n" +
        "Mobile Panini Due October 9th.\n" +
        "Quiz 2 Due October 11th.\n" +
        "Dianes Run Due October 16th. \n" +
        "Quiz 3 Due October 18th.\n\n" +
        //DATA FUNDEMENTALS
        "__**DATA FUNDEMENTALS:**__\n" +
        "Assignment #1 Due October 7th.\n\n" +
        "Assignment #2 Due October 14th.\n" +
        //INTRO TO PROGRAMMING
        "__**INTRO TO PROGRAMMING:**__\n\n" +
        // GRAPHIC DESIGN
        "__**GRAPHIC DESIGN:**__\n\n" +
        "Assignment #1 Due October 8th (Thursday)\n " +
        "__**LAWS AND ETHICS IN THE DIGITAL AGE: **__"
    );
  } else if (command === "help") {
    message.channel.send(
      "***Command List (for now)***\n" +
        "!homework\n" +
        "!lectures\n" +
        "!flip\n" +
        "!countdown\n" +
        "!toby\n" +
        "!chad\n" +
        "!peter\n"
    );
  }
  // List off lecture links
  else if (command === "lectures") {
    message.channel.send(
      "***Lecture Links***\n" +
        // Java
        "__**JAVA PROGRAMMING:**__\n" +
        "https://lms.stclaircollege.ca/webapps/collab-ultra/tool/collabultra?course_id=_43173_1&mode=view\n" +
        "\n\n" +
        //HTML AND CSS
        "__**HTML AND CSS: **__\n" +
        "https://lms.stclaircollege.ca/webapps/collab-ultra/tool/collabultra?course_id=_42067_1&mode=view\n\n" +
        //DATA FUNDEMENTALS
        "__**DATA FUNDEMENTALS:**__\n" +
        "\n\n" +
        //INTRO TO PROGRAMMING
        "__**INTRO TO PROGRAMMING:**__\n" +
        "https://lms.stclaircollege.ca/webapps/collab-ultra/tool/collabultra?course_id=_42029_1&mode=view\n\n" +
        //GRAPHIC DESIGN
        "_**GRAPHIC DESIGN**_\n" +
        "https://lms.stclaircollege.ca/webapps/collab-ultra/tool/collabultra?course_id=_43101_1\n\n" +
        // AW AND ETHICS IN THE DIGITAL
        "__**LAWS AND ETHICS IN THE DIGITAL AGE: **__\n" +
        "https://lms.stclaircollege.ca/webapps/collab-ultra/tool/collabultra?course_id=_43102_1&mode=view"
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
        "https://cdn.discordapp.com/emojis/761232519839481886.png?v=1"
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
  }
});

client.login(process.env.TOKEN);
