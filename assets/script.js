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
 const arrowLeft =document.querySelector(".arrow_left");
//  console.log(flecheGauche);
 const arrowRight = document.querySelector(".arrow_right");
//  console.log(flecheDroite);
 const dot = document.querySelectorAll(".dot");
//  console.log(dot)
 const paragraph = document.querySelector("#banner p");
//  console.log(paragraphe);
 const imageTag = document.querySelector(".banner-img");
//  console.log(BaliseImage);

 arrowLeft.addEventListener("click", function(){
    dot[position].classList.remove("dot_selected")
	  if(position == 0){
		position=slides.length-1;
	  } else{
		position--;
 	  }
	  slide();
  } )

 arrowRight.addEventListener("click", function(){
 	dot[position].classList.remove("dot_selected")
	  if(position ==slides.length-1){
		position=0;
	  } else{
		position++;
	  }
	  slide();
 	 
 })

 function slide(){
	dot[position].classList.add("dot_selected")
	imageTag.src =(`./assets/images/slideshow/${slides[position].image}`)
   paragraph.innerHTML = slides[position].tagLine
 }
