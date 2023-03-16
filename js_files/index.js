
document.getElementsByClassName("image")[0].addEventListener("click", () => {
        window.open("../html_pages/alphabets.html");
});

document.getElementsByClassName("article")[0].addEventListener("click", () => {
        window.open("../html_pages/alphabets.html");
});

document.getElementsByClassName("image")[1].addEventListener("click", () => {
        window.open("../html_pages/number_table.html");
});

document.getElementsByClassName("article")[1].addEventListener("click", () => {
        window.open("../html_pages/number_table.html");
});

document.getElementsByClassName("image")[2].addEventListener("click", () => {
        window.open("../html_pages/ADD.html");
});
document.getElementsByClassName("article")[2].addEventListener("click", () => {
        window.open("../html_pages/ADD.html");
});

document.getElementsByClassName("image")[3].addEventListener("click", () => {
        window.open("../html_pages/alpha-game.html");
});
document.getElementsByClassName("article")[3].addEventListener("click", () => {
        window.open("../html_pages/alpha-game.html");
});

document.getElementsByClassName("image")[4].addEventListener("click", () => {
        window.open("../html_pages/alpha-song.html");
});
document.getElementsByClassName("article")[4].addEventListener("click", () => {
        window.open("../html_pages/alpha-song.html");
});

	var popup_login = document.getElementById('popup_form');
        var pop= document.getElementById('my-cards');
	var close = document.getElementById('close_btn');

	window.addEventListener("load", function(){

		setTimeout(function(){

			popup_login.classList.add('anyname');
			pop.classList.add('anyname');
			

		 },3000) 


	}) 
	close.addEventListener("click", function(){
			popup_login.classList.remove('anyname');
			pop.classList.remove('anyname');

		 }) 