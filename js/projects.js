
var projects = [
  {
    Name: "Space Adventures of Mr. Bonesy",
    Details: {
      Role: "Solo Developer",
      TeamSize: "1 person",
      Duration: "8 Weeks",
      Tech: "Unreal 5 & C++"},
    Type: "Project",
    Thumbnail: "images/mrbonesy.png",
    Headline: "Help Mr. Bonesy traverse the dangers of space using the power of math!",
    Tags: "UNITY,C#,ANDROID,UI DESIGN,PROGRAMMING,ART",
    MainScreenshot: "../images/mrbonesy-preview.gif",
    Links: [{
      Image: "../images/github-logo.png",
      Link: "https://github.com/nashmia-riaz/mr-bonesy/releases/tag/v0.1a" ,
      Text: "Try the Demo"
    }],
    Description:
  "<p>In order to learn and showcase my knowledge of the Unreal Engine, I came up with a procedurally generated game idea. The game follows Mr. Bonesy (not be confused with the infamous Alien cat called Jonesy) as he traverses the dangers of space in his little UFO. The controls are stuck on auto pilot, except Mr. Bonesy can avoid planets in his path by solving a math equation. Mr. Bonesy must survive in space as long as possible.</p>"+
  "<h2>Spline Generation</h3><p>The main feature of game is the procedural generation of a Catmull Rom spline. The code for this was heavily taken from Wikipedia and brought into the game. However, for the purpose of the game, the spline was procedurally generated beyond the 4-points allowed by the code. Moreover, the spline is also generated in 3D space by calculated and incremented randomly upon the previously generated point. This is all stored in an array, and the Tick funciton is called to interpolate between points while moving the player along the path. Once you reach a point in spline, a random point is added at the end to keep going. </p>"+
  "<div class=\"in-text-image\"><img src='../images/mrbonesy-spline.png'></div>"+
  "<p>A substantial problem seen here very quickly was there were instantly where the player was sent directly above their previous position, and the camera would flip as shown below:</p>"+
  "<div class=\"in-text-image\"><img src='../images/mrbonesy-camera-flip.gif'></div>"+
  "<p>In order to solve this, a check was added so that the z-position was only incremented upon if either X or Y, or both were being randomized upon. This way, we would create a gentler slope and the camera no longer flipped.</p>"+
  "<h2>Obstacle Avoidance</h2><p>Next up, we added our obstacles. A blueprint of a planet would randomly be spawned on the spline. The idea is that the player must be able to solve a QTE to avoid this. The obstacle avoidance path will be simple: if the player answers correctly, 3 new points are added to the spline right after the concerning obstacle point. These 3 points take into consideration the planet's size, the player's size and give it a little margin, and then navigate the player around it.</p>"+
  "<div class=\"in-text-image\"><img src='../images/mrbonesy-diagram.png'></div>"+
  "<p>The path recalculation is calculated for the point P(x+3). This is because Catmull Rom spline maps the motion from P2 to P3. while considering points P1 - P4. When we reach P3, new path is calculated for the point P5 that is outside our current spline. This way, the motion is kept smooth between individual splines paths.</p>"+
  "<div class=\"in-text-image\"><img src='../images/mrbonesy-obstacle-avoidance.gif'></div>"+
  "<p>Once this was done, I made blueprints for the different planets. These planets would rotate randomly, and detect collision with the player. Upon collision, we re-enable the planet's geometry collection's physics and apply a radial force upon it so it shatters and the pieces float away. I generated a fracture for each of the 30 different planets in game and firstly worked with blueprints to add my code as follows:</p>"+
  "<div class=\"in-text-image\"><img src='../images/mrbonesy-blueprint.png'></div>"+
  "<p>I didn't want to copy-paste these blueprints for each of my 30 planets, so I started bring it over to C++. This process took some time as I was new but was pretty straightforward using Unreal's documentation. I then swap out the blueprint's geometry collection with one of the 30 fractures I created earlier upon spawning it in.</p>"+
  "<h2>QTE Equation Generation</h2><p>I knew I wanted simple math from the equations. I started off by generating 2 single digits and picking a random operation from addition, multiplication, subtraction and division. I would then store the answer in my QTE manager, and manage only numerical input from the player. Only numerical input was detected. SetupInputComponent was used to bind any key being pressed under my player controller, and then it was further scanned to see if the key being pressed is a number. Then, this number was stored as our input/answer. The input stored would be checked to see if it matches the answer's length before being validated. This way, player was allowed to put in 2 numbers if the answer length had 2 numbers (e.g, if the equation was 6 + 8, where the answer would be 14).</p>"+
  "<div class=\"in-text-image\"><img src='../images/mrbonesy-equation.png'></div>"+
  "<p>However, this needed further refinement. The equation could ask you to subtract a bigger number from a smaller one, which would result in a negative answer. It could also ask you to randomly divide 2 numbers, resulting in a fraction or even error where divided by 0. For an education game designed for kids, these scenarios seem too advanced.</p>"+
  "<p>The solutions were simple. In case of subtraction, the X2 was generated after X1, and the randomization range was updated so that this number would be greater than X1. For the division, X2 was contained to be always greater than 0, and was generated first. X1 was then generated by multiplying X2 with a random number. This way, the equation are kept relatively simple.</p>"+
  "<h2>UI Design</h2><p>The UI was pretty straightforward. When approaching a planet, the player will see a flashing danger sign. The player is then shown an equation and input is taken to see if they can solve it. The flashing UI was generated as a blueprint and therefore animated. There was some trouble linking the animations in the code, but eventually Transient and BindWidgetAnim UProperties were added to the variables. The animations were then linked, played as needed and even had dynamic event functions linked to when some animations would start or finish.</p>"+
  "<p>One strange problem I ran into here was I wanted to show a division symbol ÷ for the equation, but the symbol would not print properly when I assigned it from C++. It would show as such: </p>"+
  "<div class=\"in-text-image\"><img src='../images/mrbonesy-division.png'></div>"+
  "<p>The solution for this was to convert the character to TChar from UTF8 in Unreal before I passed it as a string to the UI.</p>"+
  "<h2>Refinements</h2><p>I then worked towards refining my game. I wanted to add a camera shake if the player put in the wrong answer. Only when the camera shake is over should the answer reset and re-enable player input. I did this by using C++ timers in Unreal and binding a function for when the timer would expire.</p>"+
  "<p>I also made my own custom skybox for the game. I did this by creating a cubemap, fixing the perspective by mapping it on to a sphere in Blender and then exporting it as a cubemap using Nvidia Texture Tools.</p>"+
  "<div class=\"in-text-image\"><img src='../images/mrbonesy-skybox.png'></div>"+
  "<p>Player's highscore is also saved in the game using Unreal's save and load system. A custom class is created called MyLocalPlayerSaveGame that simply stores the highscore number, and compares it with the player's score upon game over. If the player has surpassed the highscore, it is written over the previous value.</p>"+
  "<p>Lastly, I added a transition animation between the levels to smoothly go from menu to game scene. It was not really needed since the game is so simple and the level loads immediately.</p>"+
  "<h2>Summary</h2>Overally, very fun to achieve all this in Unreal for my first project. The game does not seem very playable as it seems too simply. The environment is also very empty, which can be fixed in the future by spawning in clusters of props. The difficulty is also stagnant at the moment, which can be fixed by making it progressive."
}, 
  {
    Name: "Distance Dash",
    Details: {
      Role: "Game Engineer II",
      TeamSize: "Interdisciplinary team: 8 people",
      Duration: "7 Months",
      Tech: "Roblox & Typescript"},
    Type: "Project",
    Thumbnail: "images/distance-dash.png",
    Headline: "Use your knowledge of physics to launch groceries and supplies to eager animal friends!",
    Tags: "UNITY,C#,ANDROID,UI DESIGN,PROGRAMMING,ART",
    MainScreenshot: "../images/distance-dash-preview.gif",
    Links: [{
      Image: "../images/roblox-logo.png",
      Link: "https://www.roblox.com/games/13470104112/Distance-Dash-New-Physics-Challenge" ,
      Text: "Try it on Roblox"
    }],
    Description:
      "<p>I worked on Distance Dash as part of my contract for <a href='https://www.filamentgames.com/'>Filament Games</a>. This was my first Roblox project and having it structed in Typescript made it super easy to pick up.</p>"+
      "<p>This is an educational game that aims to teach kids about Newton's laws of physics. It revolves around a simulation where a starting and stopping force is applied to a vehicle and it moves along a road using custom simulated physics. </p>"+
      "<p>It has two phases: the goal of Phase 1 is to communicate with your partner, set your mass and forces and bring your vehicles to a perfect stop at the finish line at the same time. Phase 2 focuses on reverse engineering Phase 1, where players must individually predict the result of the simulation.</p>"+
      "<p>My responsibilities included working on different features of the game. Such work would include implementing UI functionality, player communication features as well as tweaking assets placed in the scene.</p>"+
      "<p>For example, my first main task was to implement and extend an elaborate matchmaking system. It allows players to invite another player to be their partner. Further invites are disabled to prevent spam unless the player cancels their previous invite. Once the partner accepts said invite, the two players are then highlight and move towards a teleporter so they can begin their physics simulations.</p>"+
      "<p>I was also tasked with implementing a custom chat system within the game. The chat system allows the two players to communicate with each other by using pre-determined questions and answers. Answer options would change depending on what question the partner asked, and answers would also include dynamic values such as the force and mass that the player selected. These values update automatically.</p>"+
      "<p>Another system that I worked on was the prompts system. Different NPCs placed across the map would have little UIs on them that would display helpful hints. Star feature of this system was it was made to be dynamic so more prompts could be created or destroyed at runtime depending on the level's requirements.</p>"+
      "<p>Lastly, I was also tasked with extending previously written code by implementing a new level for the game, called Phase 2. Phase 2 runs similarly to Phase 1 but the player has to predict the outcome instead of trying to reach the optimum result be using the correct forces and mass. Additionally, I also had to polish previously implemented features to bring the product across the finish line. Such polishing included new tweens and animations, additional UI features and integral bug fixing.</p>"+
      "<p>It was a pleasure to work on this contract and you can try out the final game on <a href='https://www.roblox.com/games/13470104112/Distance-Dash-New-Physics-Challenge'>Roblox</a>.</p>"
  }, 
  {
    Name: "Bombs Away!",
    Details: {
      Role: "Lead Developer",
      TeamSize: "3 people",
      Duration: "24 Months",
      Tech: "Unity and C#"},
    Type: "Project",
    Thumbnail: "images/bombs-away.png",
    Headline: "An educational game about coordinates and cats!",
    Tags: "UNITY,C#,ANDROID,UI DESIGN,PROGRAMMING,ART",
    MainScreenshot: "../images/bombs-away.gif",
    Links: [{
      Image: "../images/playstore-logo.png",
      Link: "https://play.google.com/store/apps/details?id=com.ThePurramid.BombsAway" ,
      Text: "Try it on the Play Store"
    }],
    Description:
      "<p>Bombs Away! is an educational game to help teach K-12 students about coordinates, quadrants and cats!</p>"+
      "<p>The founder of Purramid Games reached out to me after seeing some of my work, more prominently the Catronaut game. They had been working on an idea for a cat game except this time it would teach kids how to math!</p>"+
      "<p>I was tasked with using the game design rules to come up with the wireframes, from which we slowly worked up to the mockups and artwork. We worked closely with a pedagogical expert to make sure the designs were comprehendable and integral in learning for students.</p>"+
      "<p>Once we were happy with our mockups, I was then tasked with the development. As a solo developer, I was tasked with extending Unity's existing UI and developing new systems to work modularly with our design. Players are given random coordinates on the grid and they must figure out its location. They can scroll on the grid, use two fingers to zoom, drag and drop litter boxes. The system is designed as to not repeat coordinates given to the player.</p>"+
      "<p>We then brought on voice actor and other artists to help us polish our work. Our work included working with the VA to bring about a tutorial for the game. My work included working closely with the Unity's Mecanim system to bring in interactable animations that are in sync with the VA's voice lines.</p>"+
      "<p>As of writing this, Bombs Away! has been my most extensive work with the Unity game engine and within the game development process. Not only did I work on the UX, wireframes, UI design and character animations, I also had to work with the core engine and extend it to make it work with the game idea, all the while making sure my code is up to the current standards, deploys moden design patterns and is extendable. You can try out the game on the <a href='https://play.google.com/store/apps/details?id=com.ThePurramid.BombsAway'>Play Store</a>.</p>"
  },
  {
    Name: "Dock-It", 
    Details: {
      Role: "Solo Developer",
      TeamSize: "1 person",
      Duration: "2 Months",
      Tech: "Unity and C#"
    },
    Type: "Gallery",
    Thumbnail: "images/dock-it.png",
    Headline: "A shared list-keeping app that helps you focus on what needs to be done.",
    Tags: "UNITY,C#,ANDROID,FIREBASE,UI DESIGN,PROGRAMMING,ART",
    MainScreenshot: "../images/dock-it-screenshot.png",
    Images: ["dock-it/1.png","dock-it/2.png","dock-it/3.png","dock-it/4.png"],
    Links: [{
      Image: "../images/playstore-logo.png",
      Link: "https://play.google.com/store/apps/details?id=com.NashMakesGames.DockIt&pcampaignid=web_share" ,
      Text: "Try it on the Play Store"
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
    Details: {
      Role: "Solo Developer",
      TeamSize: "1 person",
      Duration: "1.5 Months",
      Tech: "Unity and C#"
    },
    Type: "Project",
    Thumbnail: "images/catronaut.png",
    Headline: "A hyper-casual game about a cat astronaut floating through the endless void of space.",
    Tags: "UNITY, C#, ANDROID, GOOGLE PLAY SERVICES,PROGRAMMING",
    MainScreenshot: "../images/catronaut-screenshot.png",
    Links: [{
      Image: "../images/playstore-logo.png",
      Link: "https://play.google.com/store/apps/details?id=com.NashMakesGames.TheCatronaut&hl=en&gl=US" ,
      Text: "Get it on the Play Store"
    },{
      Image: "../images/github-logo.png",
      Link: "https://github.com/nashmia-riaz/catronaught" ,
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
    Name: "Perdita", 
    Details: {
      Role: "Solo Developer",
      TeamSize: "1 person",
      Duration: "6 Months",
      Tech: "Unity and C#"
    },
    Type: "Project",
    Thumbnail: "images/perdita.png",
    Headline: "Explore the horrors of a procedurally generated maze!",
    Tags: "ML-AGENTS,REINFORCEMENT LEARNING,UNITY,C#,PROGRAMMING",
    MainScreenshot: "../images/perdita-preview.gif",
    Links: [{
      Image: "../images/github-logo.png",
      Link: "https://github.com/nashmia-riaz/horror-maze-game" ,
      Text: "View the source code"
    }],
    Description:
      "<p>Perdita was part of my Masters thesis at City University of London. My thesis title was exploring the 'Effects and Limitations of Machine Learning on AI Solving a Grid-Based Maze'.</p>"+
      "<p>The idea spawned off as part of my MSc Computer Graphics assignment. I used OpenGL and C++ to create a grid-based maze.</p>"+
      "<div class=\"in-text-image\" id=\"maze-generation\"><img src=\"../images/maze-generation.gif\"></div>"+
      "I then added A* algorithm on the AI to solve the maze. The goal of the AI at this point was to catch up with the player. It was made so that the monster would follow sound. If the player ran, the monster would follow. The player could throw flares to light up their path, which would also act as a distraction for the AI."+
      "<p>So far, the AI was a simple Finite State Machine (FSM). I further expanded this project in Unity, starting over to create a grid using 4 different prefabs. I then build the NavMesh on my maze, and had the AI act as a NavMesh agent. Thus, recreating my project in Unity. I also redid the 3D model for the enemy I had by rigging it and adding different animations.</p>"+
      "<iframe  src='https://www.youtube.com/embed/M_fZy3haWoA' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"+
      "<p>Next up, I trained my AI using reinforcement learning with <a href='https://github.com/Unity-Technologies/ml-agents'>ML-Agents</a>; a machine learning API provided by Unity. I started with a simple 2x2 random grid and trained the AI over more complex grids, ending on a 4x4 random grid with a moving target. The results were quite surprising as I didn't expect the AI to train so well with so many variables (random map, and a moving target).</p>"+
      "<iframe src='https://www.youtube.com/embed/aoEre15-P74' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"+
      "<p>The AI does 'explore' the map and try to find the target, but it is still quite limiting as compared to the FSM. The AI would very often 'get lost' and FSM with A* algorithm still seems to be the more 'intelligent' and efficient way for pathfinding on an AI.</p>"+
      "<p>Lastly, I did finish the game by adding in settings to adjust sound and brightness. I also added a minimap and an expanded map. The minimap was an orthographic camera that would follow the player, whereas the expanded map would show the whole maze with the explored parts as revealed and unexplored parts of the maze as hidden.</p>"+
      "<p>You can see the game in action below: </p>"+
      "<iframe src='https://www.youtube.com/embed/qJXNt4YlFnM' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>"
  },
  {
    Name: "Silent Knight", 
    Details: {
      Role: "Developer",
      TeamSize: "2 people",
      Duration: "3 Months",
      Tech: "Unity and C#"
    },
    Type: "Project",
    Thumbnail: "images/silent-knight.png",
    Headline: "Run through the endless dungeon as the silent knight",
    Tags: "UNITY,C#,ANDROID,DEMO,PROGRAMMING",
    MainScreenshot: "../images/silent-knight-preview.gif",
    Links: [{
      Image: "../images/controller.png",
      Link: "https://nashmia-riaz.github.io/Silent-Knight/" ,
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
    Details: {
      Role: "Lead Developer",
      TeamSize: "2 people",
      Duration: "18 Months",
      Tech: "Unity and C#"
    },
    Type: "Project",
    Thumbnail: "images/knockout-nation.png",
    Headline: "Be the king of basketball in this multiplayer knockout game!",
    Tags: "UNITY,C#,ANDROID,GOOGLE PLAY SERVICES,PROGRAMMING",
    MainScreenshot: "../images/knockout-nation-preview.gif",
    Links: [{
      Image: "../images/playstore-logo.png",
      Link: "https://play.google.com/store/apps/details?id=com.nineoften.knockoutnation&hl=en&gl=US" ,
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
  },
  {
    Name: "Damage Control",
    Details: {
      Role: "Developer",
      TeamSize: "4 people",
      Duration: "3 Days",
      Tech: "Unity and C#"
    },
    Type: "Gallery",
    Thumbnail: "images/damage-control.png",
    Headline: "Riveting goal to fix the damage caused by your video game hero!",
    Tags: "UNITY,C#,WEBGL,PROGRAMMING",
    MainScreenshot: "../images/damagecontrol/damage-control-preview.gif",
    Images: ["damagecontrol/Level1.JPG", "damagecontrol/Level2.JPG","damagecontrol/Level3.JPG"],
    Links: [{
      Image: "../images/controller.png",
      Link: "https://nashmia-riaz.github.io/DamageControl/" ,
      Text: "Try out the demo!"
    }],
    Description:
      "<p>A proud hero valiantly crusades across the land, eager to defeat all evil in his wake! Unfortunately, you are not he. You are the man behind the scenes, forced to toil after the hero and clean up his mess. Follow the hero's destructive wake, making sure to repair the collateral damage he's inadvertently caused and restore the beauty of the land once more. Make sure he can return as the hero and not reviled as a villain! Click and drag objects onto their other halves to reassemble them.</p>"+
      "<div class=\"in-text-image\"><img src=\"../images/damagecontrol/damage-control-preview.gif\"></div>"+
      "<p>This was a very fun project as part of Global Game Jam 2020. My friends and I spent a weekend crafting up this game, where we tried to make our own assets and animations as possible and get a game going from the ground up. The theme for that year's GGJ was 'repair', so our idea spawned off of all the destruction Link does breaking pots in Legend of Zelda. Our story follows a secret mage that cleans up after him.</p>"+
      "<p>My work was focused on some art assets such as the UI and backgrounds, as well as helping out with sprite animations. I also coded the menus, endless scrolling objects within the game and any animations in between. Finally, I helped manage the git PRs and code merging.</p>"+
      "<p>My wonderful teammates for this game also included (in alphabetical order) <a href='https://blastinghavoc.github.io/index.html'>Jacob Taylor</a>, <a href='http://5droom.co.uk'>Jihae Han</a>, <a href='#'>Konstantin Ivanovich</a> and <a href='https://www.linkedin.com/in/mark-trump-6b3981120/'>Mark Trump</a>.</p>"+
      "<p>The game has 3 different levels unlockable based on your highscore. They have different aesthetics and assets to keep the player engaged. You can try out the demo linked above!</p>"
  },
  {
    Name: "Stack It Up",
    Details: {
      Role: "Solo Developer",
      TeamSize: "1 person",
      Duration: "3 Weeks",
      Tech: "Unity and C#"
    },
    Type: "Project",
    Thumbnail: "images/stack-it-up.png",
    Headline: "Experience the thrills of a fast food employee trying to stack burgers!",
    Tags: "UNITY,C#,PROGRAMMING,UI DESIGN",
    MainScreenshot: "../images/stack-it-up-preview.gif",
    Images: ["damagecontrol/Level1.JPG", "damagecontrol/Level2.JPG","damagecontrol/Level3.JPG"],
    Links: [{
      Image: "../images/controller.png",
      Link: "https://nashmia-riaz.github.io/StackItUp/" ,
      Text: "Try out the demo!"
    }],
    Description:
      "<p>As part of my Game Design class during my Masters, we were assigned to come up with an elevator pitch and prototype for an imaginary company. A tie in game for a brand. As a huge fan of Overcooked, I had the idea to make Stack It Up; a simplified burger stacking game for mobile.</p>"+
      "<p>I started off by making the UI mockups for the game. I presented these with my pitch for a chaotic burger stacking game, simplified as a rendition of those top-down car games where you had to avoid traffic that we all grew up with.</p>"+
      "<div class=\"in-text-image\"><img src=\"../images/stack-it-up-screens.png\"></div>"+
      "<p>I then created the 2D assets and coded the algorithm. I created 2 game modes; a casual arcade game mode where you just have to fill in one order at a time. And a endless game mode where you have to fill in orders as their timers run out.</p>"+
      "<p>The algorithm for the first one is simple. I have 4 different recipes for burgers. The player can select any one and practice creating it over and over again. As the game progresses, the speed at which the ingredients fall increases as well; thus increasing the difficulty. Tapping on the burger reveals its contents and pauses the game.</p>"+
      "<p>The endless game mode is a little more complex. For this, I created classes for each order, which contains it's recipe and timer. The player is supposed to get the right order before it expires and they lose a life.</p>"+
      "<p>The last addition to the game has been adding a random bias. Between 5 ingredients and 3 lanes, often times the game doesn't spawn the ingredient that the player needs. So, the game manager works off of a random bias to increase the chances of spawning the ingredient that's needed, and switches this bias as the player progresses.</p>"+
      "<p>You can try out the demo linked above!</p>"
  }
];
