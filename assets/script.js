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

// Variables flèches
let leftArrow = document.querySelector(".arrow_left");
let rightArrow = document.querySelector(".arrow_right");

// Variables points
let dotsContainer = document.querySelector(".dots");
let selectedDot = document.querySelector(".dot_selected");


// variables image/phrase
let imageElement = document.querySelector(".banner-img");
let tagLineElement = document.getElementById("image-text");

// index
let index = 0;

// Fonction pour effectuer la transition vers la prochaine image (vers la droite)
function RightArrowClick() {
	if (index === slides.length - 1 ) {

		index = 0;

		// Changement de point (retour au début)
		selectedDot.classList.remove('dot_selected');
		dotsContainer.firstElementChild.classList.add('dot_selected');
		selectedDot = dotsContainer.firstElementChild;

	} else {

		index++;
		
		// Changement de point (suite)
		selectedDot.classList.remove('dot_selected');
		selectedDot.nextElementSibling.classList.add('dot_selected');
		selectedDot = selectedDot.nextElementSibling;
	}
	// Changement image
	const image = slides[index].image;
	imageElement.setAttribute("src", "./assets/images/slideshow/" + image);

	// Changement phrase
	const tagLine = slides[index].tagLine;
	tagLineElement.innerHTML = tagLine;
}

// Fonction pour afficher l'image précédente (vers la gauche)

function LeftArrowClick() {
	if (index === 0 ) {

		index = slides.length -1;

		// Changement de point (retour à la fin)
		selectedDot.classList.remove('dot_selected');
		dotsContainer.lastElementChild.classList.add('dot_selected');
		selectedDot = dotsContainer.lastElementChild;

	} else {

		index--;
		
		// Changement de point (suite)
		selectedDot.classList.remove('dot_selected');
		selectedDot.previousElementSibling.classList.add('dot_selected');
		selectedDot = selectedDot.previousElementSibling;
	}
    // Changement image
	const image = slides[index].image;
	imageElement.setAttribute("src", "./assets/images/slideshow/" + image);
  
	// Changement phrase
	const tagLine = slides[index].tagLine;
	tagLineElement.innerHTML = tagLine;
}


rightArrow.addEventListener("click", () => {
	RightArrowClick();
})

leftArrow.addEventListener("click", () => {
	LeftArrowClick();
})




















/*flecheDroite.addEventListener("click", () => {
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

})*/








