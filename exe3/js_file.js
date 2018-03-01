
function f1(){
	var text = document.getElementById("txt").value;
	document.getElementById("txt").value="";
	var list = document.getElementById("l_id");
	var item = document.createElement("li");
	item.textContent = `${text}`;
		list.appendChild(item);

	item.onclick = function f2(){
		list.removeChild(item);
	}
}


