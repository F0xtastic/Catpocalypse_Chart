/***********************
 *      Characters      *
 ***********************/
const characters = [
  {
    name: "Lark Wren",
    height: "6'0\"",
    images: ["Lark.png", "LarkClothed.png", "LarkClothed1.png", "LarkHuman.png"],
    link: "https://sweetandsoursaws.tumblr.com/",

  },
  {
    name: "Lake Wren",
    height: "6'0\"",
    images: ["Lake.png"],
    link: "https://sugarcoatedmechanic.tumblr.com/",
 
  },
  {
    name: "Charlie Walker",
    height: "5'5\"",
    images: ["Charlie.png", "CharlieClothed.png"],
    link: "https://cdwalker.tumblr.com/",

  },
  {
    name: "Willow Asis",
    height: "5'0\"",
    images: ["Willow.png", "WillowClothed.png"],
    link: "https://kingdomofbellows.tumblr.com/",

  },
  {
    name: "Dustine Asis",
    height: "6'5\"",
    images: ["DustineHairless.png", "DustineClothed.png"],
    link: "https://kingdomofbellows.tumblr.com/"
  },
  {
    name: "Irene Asis",
    height: "5'10\"",
    images: ["Irene.png", "IreneClothed.png"],
    link: "https://kingdomofbellows.tumblr.com/"
  },
  {
    name: "Lucifer",
    height: "5'4\"",
    images: ["Lucifer.png", "LuciferClothed.png"],
    link: "https://burningfeathersx.tumblr.com/"
  },
  {
    name: "Duncan",
    height: "6'3\"",
    images: ["Duncan.png", "DuncanClothed.png"],
    link: "https://mademypeace.tumblr.com/"
  },
  {
    name: "Devang",
    height: "6'10\"",
    images: ["Devang.png", "DevangClothed.png"],
    link: "https://disasterghaster.tumblr.com/"
  },
  {
    name: "Röka Drochàrd",
    height: "6'0\"",
    images: ["RokaClothed.png"],
    link: "https://actualtirefire.tumblr.com/"
  },
  {
    name: "Viktor Dresden",
    height: "6'4\"",
    images: ["Viktor.png", "ViktorClothed.png"],
    link: "https://geistersoldat.tumblr.com/"
  },
  {
    name: "Rene",
    height: "5'8\"",
    images: ["René.png", "RenéClothed.png"],
    link: "https://letsdrinktotruelove.tumblr.com/"
  },
  {
    name: "Rook",
    height: "6'4\"",
    images: ["Rook.png", "RookClothed.png", "RookHuman.png"],
    link: "https://averyrook.tumblr.com/"
  },
  {
    name: "Sinswyn",
    height: "",
    images: ["SinswynClothed.png"],
    link: ""
  },
  {
    name: "Lux Imperator",
    height: "3'0\"",
    images: ["LuxClothed.png"],
    link: "https://luximperator.tumblr.com/"
  },
  {
    name: "Mr. Ring-a-Ding",
    height: "6'0\"",
    images: ["RADClothed.png"],
    link: "https://luximperator.tumblr.com/"
  },
  {
    name: "Doc Worth",
    height: "6'5\"",
    images: ["Worth.png", "WorthClothed.png"],
    link: "https://sodoffyabuggers.tumblr.com/"
  },
];
/*
  {
    name: "Liv Wren",
    height: "6'2\"",
    images: ["Liv.png", "LivClothed.png", "LivClothed1.png"],
    link: "https://sweetandsoursaws.tumblr.com/",
 
  },
  {
    name: "Duck Wren",
    height: "",
    images: ["Duck.png", "DuckClothed.png", "DuckCat.png", "DuckHuman.png"],
    link: "https://sweetandsoursaws.tumblr.com/",

  },
  {
    name: "Raven&nbsp;Wren",
    images: ["Raven.png", "RavenEyes.png","RavenClothed.png", "RavenCat.png", "RavenHuman.png"],
    height: "4'0\"",
    link: "https://sweetandsoursaws.tumblr.com/",

  },
  {
    name: "Goose Wren",
    height: "",
    images: ["Goose.png", "GooseClothed.png", "GooseCat.png", "GooseHuman.png"],
    link: "https://sweetandsoursaws.tumblr.com/",

  },
*/

/***********************
 *  Use the Template   *
 ***********************/

const container = document.querySelector("#chart");
const template = document.querySelector("#character-template");
let classTicker = -1;

characters.forEach(character => {

    classTicker = (classTicker + 1);
    let cTString = classTicker.toString()
    
    const clone = template.content.cloneNode(true);
  
  clone.querySelector(".label").innerHTML =
    `<h1>${character.name}</h1><br>Height: ${character.height}`;

  clone.querySelector(".link").href = character.link;

  const slides = clone.querySelector(".slides");
  character.images.forEach(src => {
    const img = document.createElement("img");
    img.src = `images/${src}`;
    img.classList.add("mySlides" + classTicker);
    slides.appendChild(img);
  });
  const buttonGen = clone.querySelector(".slidebutton");


  const slideButton1 = document.createElement("button");
  slideButton1.onclick= function() {plusDivs(-1, cTString)};
  slideButton1.innerHTML="&#10094;";
  slideButton1.classList.add("slidebutton1");
  buttonGen.appendChild(slideButton1);

  const slideButton2 = document.createElement("button");
  slideButton2.onclick = function() {plusDivs(1, cTString)};
  slideButton2.innerHTML ="&#10095;";
  slideButton2.classList.add("slidebutton2");
  buttonGen.appendChild(slideButton2);

  container.appendChild(clone);

});