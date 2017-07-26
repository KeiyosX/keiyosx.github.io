var gallery = ["Ahmad Pictures/picture0.jpg","Ahmad Pictures/picture1.jpg","Ahmad Pictures/picture2.jpg","Ahmad Pictures/picture3.jpg","Ahmad Pictures/picture4.jpg","Ahmad Pictures/picture5.jpg"];

function fillGallery(){
	for(var i=0; i<gallery.length; i++){
		var elemId = "pic" + i;
		console.log("<img src'"+gallery[i]+" width='29px' onmouseover=showInMain(" + i + ")' />");
		document.getElementById(elemId).innerHTML = "<img src='"+gallery[i]+"' width='29px' onmouseover='showInMain(" + i + ")' />";
			}
}

function showInMain(num){
	var imageSource = "Ahmad Pictures/picture" + num + ".jpg";
	document.getElementById('mainImage').src = imageSource;
	return false;
}