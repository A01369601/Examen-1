function ejecutar(){
	d1=document.d.v1.value;
    if (d1.length==0) {
		document.d.d1.style.background="red";
		alert("Error,se debe indicar un nombre ...");
	}
}
function campo_d1(){
	document.d.d1.style.background="green";
}

function ejecutar(){
	d2=document.c.d2.value;
    if (d2.length==0) {
		document.d.d2.style.background="red";
		alert("Error,se debe indicar un monto ...");
	}
}
function campo_d2(){
	document.d.d2.style.background="green";
}

function ejecutar(){
	d3=document.d.d3.value;
    if (d3.length==0) {
		document.d.d3.style.background="red";
		alert("Error,se debe indicar tu edad ...");
	}
}
function campo_d3(){
	document.d.d3.style.background="green";
}