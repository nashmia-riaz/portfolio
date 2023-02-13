
var projects = [
  {
    Name: "Dock-It",
    Type: "Project",
    Thumbnail: "images/dock-it.png",
    Headline: "A shared list-keeping app that helps you focus on what needs to be done.",
    Tags: "UNITY,C#,ANDROID,FIREBASE,UI DESIGN,WIP,PROGRAMMING,ART",
    MainScreenshot: "../images/dock-it-screenshot.png",
    Links: [{
      Image: "../images/playstore-logo.png",
      Link: "#" ,
      Text: "Get it on the Play Store"
    },{
      Image: "../images/github-logo.png",
      Link: "#" ,
      Text: "View source code"
    }],
    Description:
      "<p>Dock-it is a minimal list keeping app that allows you to share your list with friends.</p>"+
      "<p>I first had the idea when I had trouble keeping track of groceries needed within my household. There was a need for a shared list app where I could keep track of the tasks with another user. There are many apps already on the store that let you share lists with your friends, but they are quite complex and hard to manage for simpler tasks.</p>"+
      "<p>My first task was to design the wireframe and UI so it's intuitive and user-friendly. The list-keeping is kept simple, with not much obstructing the interface. Simple use of icons and buttons to edit list items, add and swipe to delete items from the list.</p>"+
      "<p>An additional feature was added where once you have crossed off an item, it moves to the bottom of the list. New items appear at the top. This way, the user can focus on what needs to be done and the app automatically gets clutter out of the way.</p>"+
      "<p>Lastly, for sharing the list, Firebase is used. Any items or lists created are automatically added to the Firebase database. It listens for any updates to the list. Lists are shared using a key that's generated when a user creates the list, and the owner can then also revoke the access which will simply change this key.</p>"+
      "<p>Two of the most challenging aspects of this project that were a learning curve for me was a. Coding asynchronously in Unity and b. Setting the appropriate rules for Firebase. It has been a very fun project that will soon be released on the Play Store.</p>"

  },
  {
    Name: "Catronaut",
    Type: "Project",
    Thumbnail: "images/catronaut.png",
    Headline: "A hyper-casual game about a cat astronaut floating through the endless void of space.",
    Tags: "UNITY, C#, ANDROID, GOOGLE PLAY SERVICES,PROGRAMMING",
    MainScreenshot: "../images/catronaut-screenshot.png",
    Links: [{
      Image: "../images/playstore-logo.png",
      Link: "#" ,
      Text: "Get it on the Play Store"
    }],
    Description:
      "<p>Dock-it is a minimal list keeping app that allows you to share your list with friends.</p>"+
      "<p>I first had the idea when I had trouble keeping track of groceries needed within my household. There was a need for a shared list app where I could keep track of the tasks with another user. There are many apps already on the store that let you share lists with your friends, but they are quite complex and hard to manage for simpler tasks.</p>"+
      "<p>My first task was to design the wireframe and UI so it's intuitive and user-friendly. The list-keeping is kept simple, with not much obstructing the interface. Simple use of icons and buttons to edit list items, add and swipe to delete items from the list.</p>"+
      "<p>An additional feature was added where once you have crossed off an item, it moves to the bottom of the list. New items appear at the top. This way, the user can focus on what needs to be done and the app automatically gets clutter out of the way.</p>"+
      "<img class=\"game-screenshot\" src=\"../images/catronaut-obstacles.png\">"+
      "<p>Lastly, for sharing the list, Firebase is used. Any items or lists created are automatically added to the Firebase database. It listens for any updates to the list. Lists are shared using a key that's generated when a user creates the list, and the owner can then also revoke the access which will simply change this key.</p>"+
      "<p>Two of the most challenging aspects of this project that were a learning curve for me was a. Coding asynchronously in Unity and b. Setting the appropriate rules for Firebase. It has been a very fun project that will soon be released on the Play Store.</p>"

  },
  {
    Name: "Tutel Streaming",
    Type: "Gallery",
    Thumbnail: "images/tutel-streaming/1.png",
    Headline: "Logo and branding for low-latency streaming service.",
    Tags: "ART,LOGO DESIGN,BRANDING",
    MainScreenshot: "images/tutel-streaming/1.png",
    Images: ["tutel-streaming/2.png", "tutel-streaming/3.png", "tutel-streaming/4.png"],
    Links: [],
    Description:"<p>Tutel Streaming is an upcoming streaming service that provides low-latency screen sharing. The client requested a cute illustrated logo modeled after <a href='https://www.youtube.com/watch?v=oxzEdm29JLw&ab_channel=Jeremehhh'>Tutel</a>.</p>"+
    "<p>The logo is pretty straightforward. The palette is picked from the logo itself. Samples for different usages were also given to the client.</p>"+
    "<div class=\"in-text-image\"><img src=\"../images/tutel-streaming/5.png\"></div>"+
    "<p>Lastly, a second variation was also given where Tutel is peeking from water.</p>"+
    "<div class=\"in-text-image\"><img src=\"../images/tutel-streaming/6.png\"></div>"
  }
];
