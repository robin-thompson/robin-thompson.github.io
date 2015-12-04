function expandmobnav()
{
	if( document.getElementById('mob-nav').style.left=="0px"){
		document.getElementById('mob-nav').style.left="-350px";
		document.getElementById("hidemobnav").style.display="none";
	}else{
		document.getElementById('mob-nav').style.left="0px";
		document.getElementById("hidemobnav").style.display="block";
	}
}
