function initiate(){
	var button = document.getElementById('save');
	button.addEventListener('click', newitem);
	show();
}

function newitem(){
	var keyword = document.getElementById('keyword').value;
	var value = document.getElementById('text').value;
	sessionStorage.setItem(keyword, value);
	document.getElementById('keyword').value = '';
	document.getElementById('text').value = '';
	//sessionStorage.setItem(keyword, value);
	
	show();
}

function show(keyword){
	var databox = document.getElementById('databox');
	/*var value = sessionStorage.getItem(keyword);
	databox.innerHTML = '<div>' + keyword + ' - ' + value + '</div>';
	*/
	databox.innerHTML = '<div><input type="button" onclick="removeAll()" value="Erase Everything"></div>';
	for(var f = 0; f < sessionStorage.length; f++){
		var keyword = sessionStorage.key(f);
		var value = sessionStorage.getItem(keyword);
		databox.innerHTML += '<div>' + keyword + ' - ' + value + '<br><input type="button" onclick="removeItem(\''+keyword+ '\')" value="Remove"></div>';
}
}

function removeItem(keyword){
	if(confirm('Are you sure?')){
		sessionStorage.removeItem(keyword);
		show();
	}
}

function removeAll(){
	if(confirm('Are you sure?')){
		sessionStorage.clear();
		show();
	}
}

addEventListener('load', initiate);