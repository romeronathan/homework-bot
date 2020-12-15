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
      "***Homework Due:***\n\n" +
        // Java
        "__**JAVA PROGRAMMING II:**__\n" +
       "\n" +
        //CSS
        "__**Web Design/CSS: **__\n" +
        "\n" +
        //PHP
        "__**PHP Basics:**__\n" +
        "\n" +
        //Javascript
        "__**JAVASCRIPT I:**__\n" +
        "\n" +    
        //Android Development
        "__**Android Development I:**__\n" +
        "\n" 
       
    );
  } else if (command === "help") {
    message.channel.send(
      "***Command List (for now)***\n" +
        "!homework\n" +
        "!lectures\n" +
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
        "__**JAVA PROGRAMMING:**__\n\n" +
        "\n" +
        //HTML AND CSS
        "__**HTML AND CSS: **__\n" +
        "\n" +
        //DATA FUNDEMENTALS
        "__**DATA FUNDEMENTALS:**__\n" +
        //INTRO TO PROGRAMMING
        "__**INTRO TO PROGRAMMING:**__\n" +
        "\nQuiz every Friday\n" +
        //GRAPHIC DESIGN
        "__**GRAPHIC DESIGN**__\n" +
        "\n" +
        // AW AND ETHICS IN THE DIGITAL
        "__**LAWS AND ETHICS IN THE DIGITAL AGE: **__\n" +
        ""
    );
  } 
    else if (command === "finals") {
      message.channel.send(
        "***Finals Schedule***\n" +
            // Java
          "__**JAVA PROGRAMMING:**__\n" +
         "\nMonday December 14th 1:00PM-2:05PM\n"+
          //HTML AND CSS
          "\n__**HTML AND CSS: **__\n" +
          "\nReleased Sunday December 13th (3:00AM-6:00AM) - Due Tuesday December 15th 11:59PM\n" +
          //DATA FUNDEMENTALS
          "\n__**DATA FUNDEMENTALS:**__\n" +
          "\nReleased Monday December 14th 9:00AM - Due Thursday December 17th 5:00PM\n" +
          //INTRO TO PROGRAMMING
          "\n__**INTRO TO PROGRAMMING:**__\n" +
          "\nFriday December 18th 10:00AM-11:15AM\n" +    
          // GRAPHIC DESIGN
          "\n__**GRAPHIC DESIGN:**__\n" +
          "\nDue Tuesday December 15th at Midnight\n" +
          // LAW AND ETHICS
          "\n__**LAWS AND ETHICS IN THE DIGITAL AGE: **__\n" +
        "\nTuesday December 15th 9:00AM-12:00PM\n"
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
