function talk(){

  var know={

    "hello": "hi there , how are you today?", 

    "hi" : "hi there ,  whats up",

    "how are you" : "good", 

    "hey" : "hey, whats up", 

    "what is your name" : "My name is Kira, what is yours?", 

    "i love you" : "okay, 

    "bad" : "sorry, how can i help?", 

    "nothing" : "that sounds boring, want a cup of coffee?",

    "yes" : "okay, order successful. your coffee will arrive in 10 minutes 54 seconds.", 

    "no" : "your loss, i only offer once", 

    "what" : "nothing", 

    "bye" : "good bye", 

    "yea it is" : "okay", 

    "yes it is" : "okay", 

    "yeah it is" : "okay", 

    "thanks" : "you are welcome", 

    "me too" : "okay", 

    "okay" : ";-)", 

    "yea" : "okay, order successful. your coffee will arrive in 10 minutes 54 seconds.", 

    "yes" : "okay, order successful. your coffee will arrive in 10 minutes 54 seconds.", 

    "thank you" : "anytime", 

    "and you" : "i am a robot!", 

    "are you a robot" : "yes", 

    "who made you" : "Brian...follow him on twitter @bqbreach.", 

    "who are you" : "Kira", 

    "kira" : "yes", 

    "do you know me" : "yes", 

    "who am i" : " creator calls you cup", 

    "good night" : "good night too", 

    "good" : "am glad to hear that. Mine too."

  };

  

  var user = document.getElementById("user").value;

  

  

  let trigger = user.toLowerCase().replace(/[^\w\s\d]/gi, "");

trigger = trigger

    .replace(/ a /g, " ")

    .replace(/i feel /g, "")

    .replace(/whats/g, "what is")

    .replace(/please /g, "")

    .replace(/ please/g, "");

  

  document.getElementById("user").value = "";

  document.getElementById("bot").innerHTML += "You: " + trigger + "<br>";

  

  if(trigger in know){

    document.getElementById("bot").innerHTML += "Kira: " + know[trigger] + "<br>";

  }

  else {

    document.getElementById("bot").innerHTML += "Kira: I don't know that.<br>";

  }

}
