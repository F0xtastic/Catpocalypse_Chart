/***********************
 *      Characters      *
 ***********************/
const characters = [
  {
    name: "Lake Wren",
    height: "6'0\"",
    breed: "shorthair tuxedo",
    images: ["Lake.png", "LakeClothed.png"],
    link: "https://sugarcoatedmechanic.tumblr.com/",
 
  },
  {
    name: "Liv Wren",
    height: "6'2\"",
    images: ["Liv.png", "LivClothed.png", "LivClothed1.png"],
    link: "https://sweetandsoursaws.tumblr.com/",
 
  },
  {
    name: "Lark Wren",
    height: "6'0\"",
    breed: "shorthair calico",
    images: ["Lark.png", "LarkClothed.png", "LarkClothed1.png", "LarkHuman.png"],
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

];
  


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