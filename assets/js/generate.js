/***********************
 *      Characters      *
 ***********************/
const characters = [
  {
    name: "Lark Wren",
    height: "6'0\"",
    breed: "shorthair calico",
    images: ["Lark.png", "LarkClothed.png", "LarkClothed1.png", "LarkHuman.png"],
    link: "https://sweetandsoursaws.tumblr.com/",

  },
  {
    name: "Lake Wren",
    height: "6'0\"",
    breed: "shorthair tuxedo",
    images: ["Lake.png", "LakeClothed.png"],
    link: "https://sugarcoatedmechanic.tumblr.com/",
 
  },
  {
    name: "Charlie Walker",
    height: "5'5\"",
    breed: "shorthair calico",
    images: ["Charlie.png", "CharlieClothed.png"],
    link: "https://cdwalker.tumblr.com/",

  },
  {
    name: "Willow Asis",
    height: "5'0\"",
    breed: "blue point siamese",
    images: ["Willow.png", "WillowClothed.png"],
    link: "https://kingdomofbellows.tumblr.com/",

  },
  {
    name: "Dustine Asis",
    height: "6'5\"",
    breed: "blue lynx siamese",
    images: ["DustineHairless.png", "DustineClothed.png"],
    link: "https://kingdomofbellows.tumblr.com/"
  },
  {
    name: "Irene Asis",
    height: "5'10\"",
    breed: "blue point siamese",
    images: ["Irene.png", "IreneClothed.png"],
    link: "https://kingdomofbellows.tumblr.com/"
  },
  {
    name: "Lucifer",
    height: "5'4\"",
    breed: "shorthair",
    images: ["Lucifer.png", "LuciferClothed.png"],
    link: "https://burningfeathersx.tumblr.com/"
  },
  {
    name: "Duncan",
    height: "6'3\"",
    breed: "chocolate scottish fold",
    images: ["Duncan.png", "DuncanClothed.png"],
    link: "https://mademypeace.tumblr.com/"
  },
  {
    name: "Devang",
    height: "6'10\"",
    breed: "smoke longhair",
    images: ["Devang.png", "DevangClothed.png"],
    link: "https://disasterghaster.tumblr.com/"
  },
  {
    name: "Röka Drochàrd",
    height: "6'0\"",
    breed: "shorthair",
    images: ["RokaClothed.png"],
    link: "https://actualtirefire.tumblr.com/"
  },
  {
    name: "Viktor Dresden",
    height: "6'4\"",
    breed: "flame point siamese",
    images: ["Viktor.png", "ViktorClothed.png"],
    link: "https://geistersoldat.tumblr.com/"
  },
  {
    name: "Rene",
    height: "5'8\"",
    breed: "Somali",
    images: ["René.png", "RenéClothed.png"],
    link: "https://letsdrinktotruelove.tumblr.com/"
  },
  {
    name: "Rook",
    height: "6'4\"",
    breed: "LaPerm",
    images: ["Rook.png", "RookClothed.png", "RookHuman.png"],
    link: "https://averyrook.tumblr.com/"
  },
  {
    name: "Sinswyn",
    height: "3'4\"",
    breed: "seal sepia point",
    images: ["SinswynClothed.png"],
    link: "https://galdramaour.tumblr.com/"
  },
  {
    name: "Lux Imperator",
    height: "3'0\"",
    breed: "Lykoi",
    images: ["LuxClothed.png"],
    link: "https://luximperator.tumblr.com/"
  },
  {
    name: "Mr. Ring-a-Ding",
    height: "5'4\"",
    breed: "Lykoi",
    images: ["Ring.png", "RingClothed.png"],
    link: "https://luximperator.tumblr.com/"
  },
  {
    name: "Doc Worth",
    height: "6'5\"",
    breed: "brush Donskoy",
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
    `<h1>${character.name}</h1>
    <br><b>Height:</b> ${character.height}
    <br><b>Breed:</b> ${character.breed}`;

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