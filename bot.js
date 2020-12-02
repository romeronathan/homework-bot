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
        "__**JAVA PROGRAMMING:**__\n" +
       "\nLab #19 Dec 3rd 10:00 AM\n"+
       "\nLab #20, #21 & #22 Dec 3rd 10:00 AM\n" +
        //HTML AND CSS
        "__**HTML AND CSS: **__\n" +
        "Tutorial 6 (Pg 451-495) Dec 4th\n" +
        "Quiz #10 & Review Assignment (Pg 510-511) Dec 11th\n" +
        //DATA FUNDEMENTALS
        "__**DATA FUNDEMENTALS:**__\n" +
        "\n" +
        //INTRO TO PROGRAMMING
        "__**INTRO TO PROGRAMMING:**__\n" +
        "\n" +    
        // GRAPHIC DESIGN
        "__**GRAPHIC DESIGN:**__\n" +
        "\n" +
        // LAW AND ETHICS
        "__**LAWS AND ETHICS IN THE DIGITAL AGE: **__\n" +
      "Case Study Due Dec 4th if you email Ryan"
       
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
         "\nMonday December 14th 1:00PM-4:00PM\n"+
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
          "\nReleased Tuesday December 8th 11:00AM - Due Tuesday December 15th at Midnight\n" +
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
