
var projects = [
  {
    Name: "Dock-It",
    Type: "Gallery",
    Thumbnail: "images/dock-it.png",
    Headline: "A shared list-keeping app that helps you focus on what needs to be done.",
    Tags: "UNITY,C#,ANDROID,FIREBASE,UI DESIGN,PROGRAMMING,ART",
    MainScreenshot: "../images/dock-it-screenshot.png",
    Images: ["dock-it/1.png","dock-it/2.png","dock-it/3.png","dock-it/4.png"],
    Links: [],
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
    },{
      Image: "../images/github-logo.png",
      Link: "#" ,
      Text: "View source code"
    }],
    Description:
      "<p>Catronaut is a hyper-casual game about my cat Marty floating through space.</p>"+
      "<p>The game has creative controls where the cat moves in a counter-clockwise circle endlessly. Tapping and holding on the screen makes the cat go in a clockwise motion. Therefore, the player must alternate to move forward in a squiggly motion.</p>"+
      "<div class=\"in-text-image\"><img src=\"../images/catronaut-preview.gif\"></div>"+
      "<p>One of the features of this game is the obstacle spawning. The planets spawn on the top and bottom edges of the screen. In between, debris and astroids are likely to spawn. The gap between each obstacle is 2x the width of the previous one, therefore allowing enough space for the player to squeeze through.</p>"+
      "<div class=\"in-text-image\"><img src=\"../images/catronaut-obstacles.png\"></div>"+
      "<p>It also has visual refinements like animations, a trail on the player, music and a very thorough menu. It's available to play on the Play Store right now!</p>"
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
    "<div class=\"in-text-image\"><img src=\"../images/tutel-streaming-6.png\"></div>"
  },
  {
    Name: "Silent Knight",
    Type: "Project",
    Thumbnail: "images/silent-knight.png",
    Headline: "Run through the endless dungeon as the silent knight",
    Tags: "UNITY,C#,ANDROID,DEMO,PROGRAMMING",
    MainScreenshot: "../images/silent-knight-preview.gif",
    Links: [{
      Image: "../images/controller.png",
      Link: "#" ,
      Text: "Play the demo"
    }],
    Description:
      "<p>Silent Knight is an endless isometric scroller. It's a simple one-button game designed for mobile.</p>"+
      "<p>One of the key aspects of the design for this game was object pooling. Earlier on, we ran into some major optimization problems and batching fixed it.</p>"+
      "<p>The game also has an intelligent object spawner. There are three kinds of obstacles; easy, medium and hard. Easy traps only spawn as a single block, whereas medium and hard spawn as double and triple respectively. Player must time their jumps to avoid the traps as they progress. Tapping and holding on the screen results in a longer jump.</p>"+
      "<div class=\"in-text-image\"><img src=\"../images/silent-knight-traps.png\"></div>"+
      "<p>The camera tracking was also tricky as the game is isometric. It was set up at a 45 degree angle using the trignometry rule. The player sets the distance and the angle, the camera will position itself automatically and follow the player around.</p>"

  },
  {
    Name: "Knockout Nation",
    Type: "Project",
    Thumbnail: "images/knockout-nation.png",
    Headline: "Be the king of basketball in this multiplayer knockout game!",
    Tags: "UNITY,C#,ANDROID,GOOGLE PLAY SERVICES,PROGRAMMING",
    MainScreenshot: "../images/knockout-nation-preview.gif",
    Links: [{
      Image: "../images/playstore-logo.png",
      Link: "#" ,
      Text: "Download from the Play Store"
    }],
    Description:
      "<p>Knockout Nation is a multiplayer basketball game build for mobile. The goal is to be the last player standing. Miss a shot and you lose a life. Lose all lives and you are out!</p>"+
      "<p>The game added on the knockout concept by several other different mini-games like Shootout, Knockout Quickplay and 21. Each of these have different rules based on shooting and scoring.</p>"+
      "<p>Launching the game for the first time prompts the player into a tutorial that shows them how to shoot. This can also be accessed via the settings. The tutorial is animated into showing the controls.</p>"+
      "<p>The player was also allowed powerups where they could get another player to freeze for x amount of seconds or skip their turn entirely.</p>"+
      "<p>The game was designed to be multiplayer using Google Play Services' Multiplayer API at the time. It feature a P2P architecture where each player would shoot the ball using an angle and force. This would determine the balls trajectory and shoot it accordingly using Unity's Physics. The initial angle and force is relayed to the other players and replicated accordingly.</p>"+
      "<p>Therefore, the game featured multiple maps and avatars. Over 74 avatars and 8 maps; each themed to go together. This was for the in-game store</p>"+
      "<div class=\"in-text-image\"><img src=\"../images/knockout-nation-avatars.png\"></div>"+
      "<div class=\"in-text-image\"><img src=\"../images/knockout-nation-courts.png\"></div>"+
      "<p>But alas; right before we launched Google announced that they were shutting down their API. This lead to a new problem; keeping the game functioning without the multiplayer. So, we added in AI. The AI would randomly select a force and angle and shoot, and this would be shown on screen. Bot with higher difficulty were more likely to get the ball in the hoop, which meant that biased randomization was added in.</p>"+
      "<p>This was one of my first big game projects and a huge learning curve for me to overcome. Always grateful to my client who gave me this opportunity at the time. :)</p>"
  }
];
