let flecheDroite = document.querySelector(".arrow_right") 
let flecheGauche = document.querySelector(".arrow_left")
let numeroImage = 1;



flecheDroite.addEventListener("click", () => {
	let selectedDot = document.querySelector(".dot_selected");
	let dotsContainer = document.querySelector(".dots");  
    let nextDot = selectedDot.nextElementSibling || dotsContainer.firstElementChild;
    let imageActuel = document.querySelector(".banner-img");

	if (numeroImage > 3) {
		numeroImage = 0
	}
	
	selectedDot.classList.remove('dot_selected');
    nextDot.classList.add('dot_selected');
	numeroImage ++;
	imageActuel.setAttribute("src", "./assets/images/slideshow/slide"+ numeroImage +".jpg")
	console.log(numeroImage)

})

flecheGauche.addEventListener("click", () => {
	let selectedDot = document.querySelector(".dot_selected");
	let dotsContainer = document.querySelector(".dots")  
    let nextDot = selectedDot.previousElementSibling || dotsContainer.lastElementChild;
	let imageActuel = document.querySelector(".banner-img");
	
	if (numeroImage < 1) {
		numeroImage = 4
	}
	
	selectedDot.classList.remove('dot_selected');
    nextDot.classList.add('dot_selected');
	numeroImage --;
	imageActuel.setAttribute("src", "./assets/images/slideshow/slide"+ numeroImage +".jpg")

})








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
