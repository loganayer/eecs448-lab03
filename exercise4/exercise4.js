function change()
{
    //find the values of our inputs
    var r1 = document.getElementById('r1').value;
    var g1 = document.getElementById('g1').value;
	var b1 = document.getElementById('b1').value;
    var r2 = document.getElementById('r2').value;
	var g2 = document.getElementById('g2').value;
    var b2 = document.getElementById('b2').value;
	var r1 = document.getElementById('r1').value;
    var wid = document.getElementById('w').value;
	
	document.getElementById('p').style.backgroundColor = rgb(r1, g1, b1);
	document.getElementById('p').style.borderColor = rgb(r2, g2, b2);
	document.getElementById('p').style.width = wid;
}

function rgb(r, g, b){
  return "rgb("+r+","+g+","+b+")";
}