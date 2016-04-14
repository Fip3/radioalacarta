var fecha = new Date();

function fechar(){
	var numero,url;
	
	fecha.setFullYear(document.getElementById("year").value);
	fecha.setMonth(document.getElementById("month").value);
	fecha.setDate(document.getElementById("day").value);
	fecha.setHours(document.getElementById("hour").value);
	fecha.setMinutes(document.getElementById("minute").value);
	fecha.setSeconds(document.getElementById("second").value);
	numero = Math.floor(parseInt(fecha.getTime()) / 1000);
	url = "http://radioalacarta.cooperativa.cl/#" + numero;
	document.getElementById("link").innerHTML = "<a href=\"" + url + "\"> " + url + "</a>";
}

document.getElementById("boton").addEventListener("click",fechar);
