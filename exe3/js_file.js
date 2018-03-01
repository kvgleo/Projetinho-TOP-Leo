
function f1(){
	var text = document.getElementById("txt").value;
	var list = document.getElementById("list1");
	var item = document.createElement("li");
	item.createTextNode(text);
	//item = "`${text}`";
		list.appendChild(item);
}


