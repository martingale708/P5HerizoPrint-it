const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
let position = 0;
 const flecheGauche =document.querySelector(".arrow_left");
//  console.log(flecheGauche);
 const flecheDroite = document.querySelector(".arrow_right");
//  console.log(flecheDroite);
 const dot = document.querySelectorAll(".dot");
//  console.log(dot)
 const paragraphe = document.querySelector("#banner p");
//  console.log(paragraphe);
 const BaliseImage = document.querySelector(".banner-img");
//  console.log(BaliseImage);

 flecheGauche.addEventListener("click", function(){
    dot[position].classList.remove("dot_selected")
	  if(position == 0){
		position=slides.length-1;
	  } else{
		position--;
 	  }
 	  dot[position].classList.add("dot_selected")
 	  BaliseImage.src =(`./assets/images/slideshow/${slides[position].image}`)
	  console.log(BaliseImage)
	  paragraphe.innerHTML = slides[position].tagLine
  } )

 flecheDroite.addEventListener("click", function(){
 	dot[position].classList.remove("dot_selected")
	  if(position ==slides.length-1){
		position=0;
	  } else{
		position++;
	  }
 	  dot[position].classList.add("dot_selected")
	  BaliseImage.src =("./assets/images/slideshow/" + slides[position].image)
	  paragraphe.innerHTML = slides[position].tagLine  
 })
