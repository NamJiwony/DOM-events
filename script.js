var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var listItem = document.getElementsByTagName("li");
var list = ul.children;

function deleteButton(li) {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	btn.className = "delete";
    li.appendChild(btn);
}

for (i=0; i<list.length; i++) {
 deleteButton(list[i]);
}

function addClass(li) {
	this.classList.toggle("done");
}

for (i=0; i<list.length; i++) {
 list[i].addEventListener("click", addClass);
}


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", addClass);
	deleteButton(li);
	ul.appendChild(li);
	input.value = "";
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteListItem(event) {
	if(event.target.tagName == "BUTTON") {
		if(event.target.className == "delete"){
	    var li = event.target.parentNode;
	    var ul = li.parentNode;		
		ul.removeChild(li);
	 }
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", deleteListItem);