/* ====== MOVIMENTA ROLETA DIREITA ====== */
function direita() {
	total = 11;
	totaltela = 4;
	valor = parseInt(document.getElementById("btnD").getAttribute("name"));
	
	if(valor == total) {
		anterior = valor - totaltela;			
		document.getElementById("btnD").setAttribute("name", 1);
		document.getElementById("btnE").setAttribute("name", anterior);
			
	} else if(valor > totaltela) {
		pro = valor + 1;
		anterior = valor - totaltela;		
		document.getElementById("btnD").setAttribute("name", pro);
		document.getElementById("btnE").setAttribute("name", anterior);
			
	} else if(valor <= totaltela) {
		pro = valor + 1;
		anterior = valor - totaltela + total; 			
		document.getElementById("btnD").setAttribute("name", pro);
		document.getElementById("btnE").setAttribute("name", anterior);
	}
				
	addMar = 0;
	oculta = anterior;
	mostra = anterior + totaltela;	
	itemoculta = "btnProd" + oculta;
	document.getElementById(itemoculta).style.display = "none";	
	cont = 1;

	for (x = 1; x <= totaltela; x++) {
		itemmuda = anterior + x;				
		if(itemmuda > total){
			item = "btnProd" + cont;
			cont++;				
			document.getElementById(item).style.display = "block";	
			document.getElementById(item).style.marginLeft  = addMar + "%";
			
		} else {
			item = "btnProd" + itemmuda;			
			document.getElementById(item).style.display = "block";	
			document.getElementById(item).style.marginLeft  = addMar + "%";
		}	
		addMar = addMar + 23;
	}
}

/* ====== MOVIMENTA ROLETA ESQUERDA ====== */
function esquerda() {
	total = 11;
	totaltela = 4;
	valor = parseInt(document.getElementById("btnE").getAttribute("name"));

	if (valor == 1) {
		pro = 11;
		anterior = valor + totaltela;
		document.getElementById("btnE").setAttribute("name", pro);
		document.getElementById("btnD").setAttribute("name", anterior);
	} else if (valor > (total - totaltela)) {
		pro = valor - 1;
		anterior = valor - (total - totaltela);
		document.getElementById("btnE").setAttribute("name", pro);
		document.getElementById("btnD").setAttribute("name", anterior);
	} else if (valor <= (total - totaltela)) {
		pro = valor - 1;
		anterior = valor + totaltela;
		document.getElementById("btnE").setAttribute("name", pro);
		document.getElementById("btnD").setAttribute("name", anterior);
	}

	addMar = 0;
	oculta = anterior;
	itemoculta = "btnProd" + oculta;
	document.getElementById(itemoculta).style.display = "none";	
	cont = 1;

	for (x = 1; x <= totaltela; x++) {
		itemmuda = pro + x;
		if(itemmuda > total){
			item = "btnProd" + cont;
			cont++;
			document.getElementById(item).style.display = "block";	
			document.getElementById(item).style.marginLeft  = addMar + "%";
		} else {
			item = "btnProd" + itemmuda;			
			document.getElementById(item).style.display = "block";	
			document.getElementById(item).style.marginLeft  = addMar + "%";
		}
		addMar = addMar + 23;
	}
}
/* ====== FIM ====== */