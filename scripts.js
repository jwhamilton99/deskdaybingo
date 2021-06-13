var items = ["Windows PC",
	"LED Lights",
	"Cluttered Desktop",
	"Fidget Toys",
	"Boom Arm",
	"External Storage",
	"Mechanical Keyboard",
	"Panobook or Confidant",
	"Game Console",
	"Bellhop Bell",
	"Podcasting Mic",
	"Podcast or Relay Artwork",
	"Free Space: Apple Product(s)",
	"Desktop Computer",
	"Posters or Art",
	"Cable Management",
	"USB Audio Interface",
	"MagSafe Charger",
	"Pro Display XDR",
	"HomePod",
	"Laptop Computer",
	"Dongles",
	"Coffee/Tea Mug",
	"Logitech MX Master",
	"Mac Pro"];


var toggled = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

function loaded() {
	var spacesContainer = document.getElementById("spacesContainer");
	for(var i = 0; i < items.length; i++) {
		var space = document.createElement("div");
		
		var p = document.createElement("p");
		p.innerHTML = items[i];
		space.appendChild(p);
		
		space.className = "space";
		space.onclick = function() {
			
			if(this.style.backgroundColor == "black") {
				this.style.backgroundColor = "transparent";
				this.style.color = "black";
				this.style.border = "2px solid black"
			} else {
				this.style.backgroundColor = "black";
				this.style.color = "white";
				this.style.border = "2px solid white"
			}
		};
		spacesContainer.appendChild(space);
	}
}