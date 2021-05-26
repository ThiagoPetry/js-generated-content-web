/* ====== TROCA BANNER ====== */
function btn(x) {		
	var qtd = document.getElementById("seguraBanner").childElementCount;
    for(i = 1; i <= qtd; i++) {
    	bannerweg = "bannerweg" + i;
    	document.getElementById(bannerweg).style.display = "none";
    }
    bannerweg = "bannerweg" + x;
    document.getElementById(bannerweg).style.display = "block";
}