var list = document.getElementById('list');
var add = document.getElementById('addElem');
add.addEventListener('click', function(e) {
	var element = document.createElement('li');
	var eleLen = document.getElementsByTagName('li').length;
	element.innerHTML += 'item' + ' ' + eleLen;
list.appendChild(element);
});