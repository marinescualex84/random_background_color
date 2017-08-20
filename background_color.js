function getColor1() {
	var color = Math.random().toString(16).slice(2, 8);
	return '#' + color;
}

function getColor2() {
	var color2 = Math.random().toString(16).slice(2, 8);
	return '#' + color2;
}

function getColor3() {
	var color3 = Math.random().toString(16).slice(2, 8);
	return '#' + color3;
}

document.querySelector('#button').addEventListener('click', addColor);
function addColor() {
	document.querySelector('.first').style.backgroundColor = getColor1();
	document.querySelector('.second').style.backgroundColor = getColor2(); 
	document.querySelector('.third').style.backgroundColor = getColor3();
	document.querySelector('.first').innerHTML = ('<p>COLOR: ' + document.querySelector('.first').style.backgroundColor + '</p>');
	document.querySelector('.second').innerHTML = ('<p>COLOR: ' + document.querySelector('.second').style.backgroundColor + '</p>');
	document.querySelector('.third').innerHTML = ('<p>COLOR: ' + document.querySelector('.third').style.backgroundColor + '</p>');
}