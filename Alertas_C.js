function ejecutar(){
	c1=document.c.c1.value;
    if (c1.length==0) {
		document.c.v1.style.background="red";
		alert("Error,se debe indicar un nombre ...");
	}
}
function campo_c1(){
	document.c.c1.style.background="green";
}

function ejecutar(){
	c2=document.c.c2.value;
    if (c2.length==0) {
		document.c.c2.style.background="red";
		alert("Error,se debe indicar un apellido ...");
	}
}
function campo_c2(){
	document.c.c2.style.background="green";
}

function ejecutar(){
	c3=document.c.c3.value;
    if (c3.length==0) {
		document.c.c3.style.background="red";
		alert("Error,se debe indicar un correo ...");
	}
}
function campo_v3(){
	document.c.c3.style.background="green";
}