var gallery = ["ahmadPictures/picture0.jpg","ahmadPictures/picture1.jpg","ahmadPictures/picture2.jpg","ahmadPictures/picture3.jpg","ahmadPictures/picture4.jpg","ahmadPictures/picture5.jpg"];

function fillGallery(){
	for(var i=0; i<gallery.length; i++){
		var elemId = "pic" + i;
		console.log("<img src'"+gallery[i]+" width='29px' onmouseover=showInMain(" + i + ")' />");
		document.getElementById(elemId).innerHTML = "<img src='"+gallery[i]+"' width='29px' onmouseover='showInMain(" + i + ")' />";
			}
}

function showInMain(num){
	var imageSource = "ahmadPictures/picture" + num + ".jpg";
	document.getElementById('mainImage').src = imageSource;
	return false;
}