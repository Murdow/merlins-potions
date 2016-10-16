var mobileMenuIcon = document.getElementById("mobileMenuIcon");
var mobileMenu = document.getElementById("mobileMenu");
var closeMenuIcon = document.getElementById("closeIcon");
var closeLightboxBtn = document.getElementById("closeBtn");
var lightbox = document.getElementById("lightbox");
var alphaBg = document.getElementById("alphaBg");

mobileMenuIcon.addEventListener("click", function() {
	mobileMenu.style.display = "block";
}, false);

closeMenuIcon.addEventListener("click", function() {
	mobileMenu.style.display = "none";
}, false);

closeLightboxBtn.addEventListener("click", function() {
	alphaBg.style.display = "none";
	lightbox.style.display = "none";
}, false);




/*Json Reader*/
var xmlhttp = new XMLHttpRequest();
var url = "js/potions.json";
var myArr;

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        myArr = JSON.parse(xmlhttp.responseText);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function buildLightboxContent(arr, index) {
	var potionsIndex = index;

	if(potionsIndex === 1) {
	    var img = "<img src='imgs/thumbnails/" + arr.potions.one.image + "'>";
	    var list = "";
	    for(var i = 0; i < arr.potions.one.ingredients.length; i++) {
	    	list +="<li>" + arr.potions.one.ingredients[i] + "</li>";
	    }
	    var textContainer = "<div id='textContainer'><h2>" + arr.potions.one.name + "</h2><h3>Use/Effect</h3><p>" + arr.potions.one.effect + "</p><h3>Ingredients:</h3><ul>" + list + "</ul><p id='lightboxPrice'>Price:</p><p id='lightBoxPriceValue'>$" + arr.potions.one.price + "</p><button>ADD TO CART</button></div>";	    
	}
	if(potionsIndex === 2) {
	    var img = "<img src='imgs/thumbnails/" + arr.potions.two.image + "'>";
	    var list = "";
	    for(var i = 0; i < arr.potions.two.ingredients.length; i++) {
	    	list +="<li>" + arr.potions.two.ingredients[i] + "</li>";
	    }
	    var textContainer = "<div id='textContainer'><h2>" + arr.potions.two.name + "</h2><h3>Use/Effect</h3><p>" + arr.potions.two.effect + "</p><h3>Ingredients:</h3><ul>" + list + "</ul><p id='lightboxPrice'>Price:</p><p id='lightBoxPriceValue'>$" + arr.potions.two.price + "</p><button>ADD TO CART</button></div>";	    
	}
	if(potionsIndex === 3) {
	    var img = "<img src='imgs/thumbnails/" + arr.potions.three.image + "'>";
	    var list = "";
	    for(var i = 0; i < arr.potions.three.ingredients.length; i++) {
	    	list +="<li>" + arr.potions.three.ingredients[i] + "</li>";
	    }
	    var textContainer = "<div id='textContainer'><h2>" + arr.potions.three.name + "</h2><h3>Use/Effect</h3><p>" + arr.potions.three.effect + "</p><h3>Ingredients:</h3><ul>" + list + "</ul><p id='lightboxPrice'>Price:</p><p id='lightBoxPriceValue'>$" + arr.potions.three.price + "</p><button>ADD TO CART</button></div>";	    
	}
	if(potionsIndex === 4) {
	    var img = "<img src='imgs/thumbnails/" + arr.potions.four.image + "'>";
	    var list = "";
	    for(var i = 0; i < arr.potions.four.ingredients.length; i++) {
	    	list +="<li>" + arr.potions.four.ingredients[i] + "</li>";
	    }
	    var textContainer = "<div id='textContainer'><h2>" + arr.potions.four.name + "</h2><h3>Use/Effect</h3><p>" + arr.potions.four.effect + "</p><h3>Ingredients:</h3><ul>" + list + "</ul><p id='lightboxPrice'>Price:</p><p id='lightBoxPriceValue'>$" + arr.potions.four.price + "</p><button>ADD TO CART</button></div>";	    
	}
	if(potionsIndex === 5) {
	    var img = "<img src='imgs/thumbnails/" + arr.potions.five.image + "'>";
	    var list = "";
	    for(var i = 0; i < arr.potions.five.ingredients.length; i++) {
	    	list +="<li>" + arr.potions.five.ingredients[i] + "</li>";
	    }
	    var textContainer = "<div id='textContainer'><h2>" + arr.potions.five.name + "</h2><h3>Use/Effect</h3><p>" + arr.potions.five.effect + "</p><h3>Ingredients:</h3><ul>" + list + "</ul><p id='lightboxPrice'>Price:</p><p id='lightBoxPriceValue'>$" + arr.potions.five.price + "</p><button>ADD TO CART</button></div>";	    
	}
	if(potionsIndex === 6) {
	    var img = "<img src='imgs/thumbnails/" + arr.potions.six.image + "'>";
	    var list = "";
	    for(var i = 0; i < arr.potions.six.ingredients.length; i++) {
	    	list +="<li>" + arr.potions.six.ingredients[i] + "</li>";
	    }
	    var textContainer = "<div id='textContainer'><h2>" + arr.potions.six.name + "</h2><h3>Use/Effect</h3><p>" + arr.potions.six.effect + "</p><h3>Ingredients:</h3><ul>" + list + "</ul><p id='lightboxPrice'>Price:</p><p id='lightBoxPriceValue'>$" + arr.potions.six.price + "</p><button>ADD TO CART</button></div>";	    
	}
	document.getElementById("lightboxContent").innerHTML = img + textContainer;
	alphaBg.style.display = "block";
	lightbox.style.display = "block";
}

var potionsBox = document.getElementsByClassName("box");

for(var i = 0; potionsBox.length; i++) {
	potionsBox[i].addEventListener("click", openLightbox, false);
}

function openLightbox() {

	var index;

	if(this.id === "potion01")
		index = 1;
	else if(this.id === "potion02")
		index = 2;
	else if(this.id === "potion03")
		index = 3;
	else if(this.id === "potion04")
		index = 4;
	else if(this.id === "potion05")
		index = 5;
	else if(this.id === "potion06")
		index = 6;

	buildLightboxContent(myArr, index);
}