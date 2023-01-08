let bannerText =
  "1508 - Creative Technologist - 1508 - Creative Technologist - 1508 - Creative Technologist - 1508 - Creative Technologist - ";

let introductionText =
  "Hello, my name is Lucia Montesinos and I want to be part of 1508.";

let applicationText =
  "I can become a valuable member of your team as I am a curious, problem-solving-oriented young woman with a flair for creativity, and very passionate about exploring ways of interacting with technology to provide better experiences.\n\nI am originally from Madrid, where I got a bachelor’s in Software Engineering. I came to Denmark to study my master’s in Human-centered Artificial Intelligence and halfway through I fell in love with a Dane, so now I am looking to build a professional life here too. In my free time, I love playing the drums, and I’m currently learning how to play the bass guitar (fun fact: I used to play semi-professionally the drums in a few bands back in Madrid). I also like to consider myself a jigsaw puzzle master (I know, very different hobbies). Right now, I am a volunteer making an app for an NGO fighting against sexual and street harassment.\n\nI am applying for this job at 1508 because I also want to make an impact in the world with meaningful and positive changes, and I dare to say 1508 is an active driver in this movement. I love to question the established and make use of technology to explore new possibilities for solving challenges. I believe I could be a great fit for 1508 because, based on the work you have done with so many renowned companies, it seems like the perfect surrounding to unravel my full potential, both professionally and personally.\n\nI am able to transform ideas into concepts, always with a user-centered perspective, by making use of different prototyping methods both at a low and high level. I tend to challenge different ways of interaction in these prototypes, such as by making use of machine learning. However, I also have a sense of pertinence, so I know when to stick to more traditional prototypes. When it comes to software development, I have 2 years of working experience using Flutter, a powerful Dart-based framework that allows me to say that I can easily make apps for iOS, Android, Windows, Mac and web all at once! (I know, quite a bold statement!). On top of that I have worked multiple times with js-based web development. I currently enjoy working with p5.js and I just recently started to explore other graphic libraries such as Three.js or Matter.js. I have experience within Agile environments and I am used to working with multidisciplinary teams, so I know the importance of good communication, both internally and with the clients.\n\nAs it is always better to experience things than be told about them, I invite you to check my portfolio, https://luciamontesinos.com , where I’ve added some of the most interesting projects I’ve done. You will see how the projects there are a great example of how I am not afraid of exploring technology to find the best approaches to problems.\n\nI am looking forward to hearing from you,";

var banner = bannerText.split("");
var pos = 0;
var avatarSize = 150;

var buton;

let regular1508;

function goToPorfolio() {
  window.open(
    "https://luciamontesinos.com",
    "_blank" // <- This is what makes it open in a new window.
  );
}

function preload() {
  regular1508 = loadFont("1508-Regular.ttf");
  avatar = loadImage("luciaAvatar.png");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  frameRate(10);
  fill(0);
  textFont(regular1508);
  button = createButton("Check portfolio");
  button.mouseClicked(goToPorfolio);
  button.size(200, 50);
  button.position(displayWidth * 0.8, displayHeight * 0.9);
  button.style("font-size", "20px");
  button.style("font-family", "1508-Regulat.ttf");
  button.style("background-color", color(255, 255, 255));
}

function draw() {
  background(255);

  image(
    avatar,
    displayWidth * 0.05,
    displayHeight / 5 - avatarSize / 2,
    avatarSize,
    avatarSize
  );

  textAlign(LEFT, CENTER);
  textSize(18);
  text(
    applicationText,
    displayWidth * 0.05,
    displayHeight / 3.1,
    displayWidth * 0.9
  );

  textSize(30);
  text(
    introductionText.substring(0, pos + 1),
    avatarSize + avatarSize / 1.5,
    displayHeight / 5
  );

  pos++;

  if (pos > introductionText.length) {
    text(introductionText, avatarSize + avatarSize / 1.5, displayHeight / 5);
  }

  textAlign(CENTER, CENTER);
  banner.push(banner.shift());
  banner.join("");
  text(banner.join(""), width / 2, 50);
}
