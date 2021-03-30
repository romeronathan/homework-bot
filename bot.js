const Discord = require("discord.js");

const client = new Discord.Client();
const prefix = "!";

client.once("ready", () => {
  console.log("Connected as  + ${client.user.tag}");
  client.user.setActivity("with the MAD Club");
  
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
      "Last updated: ***Mar 30th*** \n" +
        // Java
        "__**JAVA PROGRAMING II:**__\n" +
      "Labs 13, 14, 15 due Apr 6th \n" +
      "Journal 3 due Apr 6 \n" +
        //CSS
        "__**Web Design/CSS: **__\n" +
      "Assignment 9 due Apr 7th \n" +
      "Quizzes due Every Friday \n" +
        //PHP
        "__**PHP Basics:**__\n" + 
      "Module 11 A-D due Apr 3rd \n" +
      "Quiz 10 due Apr 11th \n" +
        //Javascript
        "__**JAVASCRIPT I:**__\n" + 
      "Assignment 5b due Apr 5th \n" +
      "Quiz 5 due April 1st \n" +
        //Android Development
        "__**Android Development I:**__\n" +
        "Lab 16 & 17 due Apr 2nd \n"
    );
  } else if (command === "help") {
    message.channel.send(
      "***Command List (for now)***\n" +
        "!homework\n" +
        "!lectures\n" +
        "!schedule\n" +
        "!tests\n" +
        "!finals\n" +
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
        //Java
        "__**JAVA PROGRAMMING II:**__\n" +
        "N/A\n" +
        "\n\n" +
        //CSS
        "__**Web Design/CSS: **__\n" +
        "N/A\n\n" +
        //PHP
        "__**PHP Basics:**__\n" +
        "N/A\n\n" +
        //Javascript
        "__**JAVASCRIPT I:**__\n" +
        "N/A\n\n" +
        //Android Development 
        "_**Android Development I:**_\n" +
        "N/A\n\n" 
    );
  } //list off upcoming tests
  else if (command === "tests") {
    message.channel.send(
      "***Upcoming Tests***\n" +
        // Java
        "__**JAVA PROGRAMMING II:**__\n" +
        "\n" +
        //CSS
        "__**Web Design/CSS: **__\n" +
        "\n" +
        //PHP
        "__**PHP Basics:**__\n" +
        "\n" +
        //JAVASCRIPT
        "__**JAVASCRIPT I:**__\n" +
        "\n" +
        //Android
        "__**Android Development I:**__\n" +
        "\n" 
    );
  } 
      //Finals Schedule
    else if (command === "finals") {
      message.channel.send(
        "***Finals Schedule***\n" +
            // Java
          "__**JAVA PROGRAMMING II:**__\n" +
         "Take Home Exam due Apr 23rd \n" +
          //CSS
          "\n__**Web Design/CSS: **__\n" +
         "Take Home Exam due Apr 21st \n" +
          //PHP
          "\n__**PHP Basics:**__\n" +
          "Synchronous Exam on Apr 19th @ 8am \n" +
          //Javascript
          "\n__**JAVASCRIPT I:**__\n" +
          "Take Home Exam due Apr 22nd \n" +
          //Android
          "\n__**Android Development I:**__\n" +
          "Take Home Exam due Apr 23rd \n"
    );
  }
    else if (command === "schedule") {
      message.channel.send(
        "https://media.discordapp.net/attachments/759615840684867584/788088015233744936/unknown.png"
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
  else if (command === "josh") {
    message.channel.send("Don't let Josh meet your mom");
  }

   // Egirl
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
