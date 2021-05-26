/* ====== MENU ESQUERDO ====== */
function menuEsquerdo() {
	var exibe = "";
	var itens = [
	{
		"id": 0,
		"item": "SOBRE A WEG",
		"link": "https://www.weg.net/institutional/BR/pt/#",
	},
	{
		"id": 1,
		"item": "PRODUTOS",
		"link": "https://www.weg.net/institutional/BR/pt/#",
	},
	{
		"id": 2,
		"item": "SOLUÇÕES",
		"link": "https://www.weg.net/institutional/BR/pt/#",
	},
	{
		"id": 3,
		"item": "INVESTIDORES",
		"link": "https://ri.weg.net/",
	},
	{
		"id": 4,
		"item": "SUPORTE",
		"link": "https://www.weg.net/institutional/BR/pt/#",
	}];

	inicio = "<li><a class='left' href='";
	meio = "'>"
	fim = "</a></li>"; 

	for(x in itens) {
		exibe += inicio + itens[x].link + meio + itens[x].item + fim;
		document.getElementById("menuEsq").innerHTML = exibe;
	}
}

/* ====== MENU DIREITO ====== */
function menuDireito() {
	var exibe1 = "";
	var itens = [
	{
		"id": 0,
		"item": "Login",
		"link": "https://www.weg.net/catalog/weg/BR/pt/login",	
	},
	{
		"id": 1,
		"item": "Trabalhe Conosco",
		"link": "https://www.weg.net/institutional/BR/pt/career",
	},
	{
		"id": 2,
		"item": "Treinamento",
		"link": "https://www.weg.net/institutional/BR/pt/training",
	},
	{
		"id": 3,
		"item": "Notícias",
		"link": "https://www.weg.net/institutional/BR/pt/all-news/all",
	}];

	inicio = "<li><a class='right' href='";
	meio = "'>"
	fim = "</a></li>"; 

	for(x in itens) {
		exibe1 += inicio + itens[x].link + meio + itens[x].item + fim;
		document.getElementById("menuDir").innerHTML = exibe1;
	}
}

/* ====== ROLETA ====== */
function menuRoleta() {
	var exibe = "", c = 1;
	var itens = [
	{
		"id": 0,
		"btnProd": "<p>Serviços</p>", 
	},
	{
		"id": 1,
		"btnProd": "<p>Motores Elétricos</p>", 
	},
	{
		"id": 2,
		"btnProd": "<p>Motorredutores</p>", 
	},
	{
		"id": 3,
		"btnProd": "<p>Geração, Transmissão e Distribuição</p>", 
	},
	{
		"id": 4,
		"btnProd": "<p>Automação e Controle Industrial</p>",
	},
	{
		"id": 5,
		"btnProd": "<p>Building & Infraestrutura</p>", 
	},
	{
		"id": 6,
		"btnProd": "<p>Critical Power</p>", 
	},
	{
		"id": 7,
		"btnProd": "<p>Segurança de Máquinas e Sensores Industriais</p>", 
	},	
	{
		"id": 8,
		"btnProd": "<p>Painéis Elétricos</p>",
	},
	{
		"id": 9,
		"btnProd": "<p>Tintas e Vernizes</p>", 
	},
	{
		"id": 10,
		"btnProd": "<p>Partes e Peças</p>",
	}];

	inicio = "<div id='btnProd";
	meio = "' class='btnProd'>";
	fim = "</div>"; 

	for(x in itens) {
		exibe += inicio + c + meio + itens[x].btnProd + fim;
		document.getElementById("roleta").innerHTML = exibe;
		c++;
	}
}

/* ====== SECÃO 1 ====== */
function primeiraSecao() {
	var exibe = "", fim = "</div>";
	var inicioDiv = [
	{
		"id": 0,
		"inicio": "<div class='container-info-title'>",
		"item": "<h1>Quer saber como transformamos energia em soluções?</h1>", 
	},
	{
		"id": 1,
		"inicio": "<div class='container-info-text'>",
		"item": "<p>Conheça nossas soluções com máquinas elétricas, automação e sistemas de energia para a indústria e descubra como os nossos negócios se interligam para melhorar sua empresa.</p>",
	},
	{
		"id": 2,
		"inicio": "<div class='container-info-button'>",
		"item": "<a href='#'><span>DESCUBRA MAIS, VEJA O INFOGRÁFICO ❯</span></a>",
	}];

	for(x in inicioDiv) {
		exibe += inicioDiv[x].inicio + inicioDiv[x].item + fim;
		document.getElementById("mostraInfo").innerHTML = exibe;
	}
} 

/* ====== BOTÕES PARA TROCAR OS BANNERs ====== */
function trocaBanner() {
	var exibe = "";

	for(x = 1; x <= 8; x++) {
		exibe += '<button class="btns" onclick="btn(' + x + ')"></button>';
	}
	document.getElementById("trocaBanner").innerHTML = exibe;
}

/* ====== BANNERs ====== */
function menuBanner() {
	var exibe = "", c = 0;
	var banners = [
	{
		"id": 0,
		"title": "WEG DRIVE SCAN",
		"text": "Excelência em conectividade.<br>Eficiência no monitoramento.",
		"btn": "CONHEÇA ❯",
	},
	{
		"id": 1,
		"title": "QUER SABER O VALOR DO INVESTIMENTO E O QUANTO PODE ECONOMIZAR?",
		"text": "Baixe o app e simule seu projeto.",
		"btn": "GOOGLE PLAY ❯",
		"btnT": "<span>APP STORE ❯",
	},
	{
		"id": 2,
		"title": "WEG MOTOR SCAN</h1>",
		"text": "Eficiente como sempre. Completo como nunca.",
		"btn": "SAIBA MAIS ❯",
	},
	{
		"id": 3,
		"title": "WEG MOTOR FLEET MANAGEMENT",
		"text": "Gerenciamento da frotas de acionamentos na indústria.",
		"btn": "CONHEÇA ❯",
	},
	{
		"id": 4,
		"title": "W60",
		"text": "Alta performance e confiabilidade para condições severas de operação.",
		"btn": "SAIBA MAIS ❯",
	},
	{
		"id": 5,
		"title": "WEG DIGITAL SOLUTIONS",
		"text": "Uma nova forma de combinar pessoas, empresas e produtos inteligentes.",
		"btn": "CONHEÇA AS SOLUÇÕES ❯",
	},
	{
		"id": 6,
		"title": "VOCÊ JÁ CONHECE <br><strong>NOSSAS VÍDEOS AULAS?</strong>",
		"text": "Invista na sua capacitação profissional sem sair de casa com o <strong>conteúdo exclusivo em nosso canal no YouTube.</strong>" +
		"<br>Novas aulas disponíveis!",
		"btn": "CLIQUE AQUI E ACESSE ❯",
	},
	{
		"id": 7,
		"title": "NOSSA EFICIÊNCIA GARANTE A SUA ECONOMIA",
		"text": "Conheça nossas soluções",
		"btn": "ACESSE ❯",
	}
	];

	inicio = "<div id='bannerGrade";
	meio = "' class='bannerGrade'>";
	fim = "</div>";
	conteudoD = "<div class='container-banner-dir'><h1>";
	conteudoE = "<div class='container-banner-esq'><h1>";
	fimH = "</h1><p>";
	fimP = "</p><span>";
	fimS = "</span>";

	for(x in banners) {
		c++;
		if(c == 1 || c == 5 || c == 6) {
			exibe += inicio + c + meio + conteudoD + banners[x].title + fimH + banners[x].text + fimP + banners[x].btn + fimS + fim + fim;
			document.getElementById("bannerweg" + c).innerHTML = exibe;	
		} else if(c == 2) {
			exibe += inicio + c + meio + conteudoE + banners[x].title + fimH + banners[x].text + fimP + banners[x].btn + fimS + banners[1].btnT + fimS + fim + fim;
			document.getElementById("bannerweg" + c).innerHTML = exibe;	
		} else {
			exibe += inicio + c + meio + conteudoE + banners[x].title + fimH + banners[x].text + fimP + banners[x].btn + fimS + fim + fim;
			document.getElementById("bannerweg" + c).innerHTML = exibe;
		}
		exibe = "";
	}
} 

/* ====== SECÃO 2 e 3 ====== */
function videoSecao() {   
	var videoS = [
	{
		"id": 0,
		"divID": "video",
		"div": "<div class='info-video-text'>",
		"title": "<h1>Nós somos a WEG, movidos por energia, tecnologia, desafios e por oportunidades.</h1>",
		"frame": "<iframe id='frame-video' src='https://www.youtube.com/embed/Es8QSe48H3Y' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
		"btn": "",
	},
	{
		"id": 1,
		"divID": "scan",
		"div": "<div class='motor-text'>",
		"title": "<h1>Conheça o WEG Motor Scan, a solução para o monitoramento de performance de motores elétricos</h1>",
		"frame": "<iframe id='frame-video' src='https://www.youtube.com/embed/cxQQab2YbtM' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>",
		"btn": "<div class='motor-btn'><a href='#'><input type='button' class='button-motor' value='CLIQUE AQUI E SAIBA MAIS'></a></div>",
	}];

	exibe = "";
	fim = "</div>";

	for(x in videoS) {
		var teste = "info-" + videoS[x].divID;
		exibe += videoS[x].div + videoS[x].title + fim + videoS[x].frame + videoS[x].btn + fim;
		document.getElementById(teste).innerHTML = exibe;
		exibe = "";
	} 
}

/* ====== SECÃO 4 ====== */
function listaSolucoes() {
	var exibe = "", exibet = "";
	var tabela = [
	{
		"id": 0,
		"lista1": "> Eficiência Energética",
		"lista2": "> WEG Digital Solutions",
	},
	{
		"id": 1,
		"lista1": "> Energia",
		"lista2": "> Energia Solar",
	},
	{
		"id": 2,
		"lista1": "> Geração com resíduos sólidos",
		"lista2": "> Agronegócio",
	},
	{
		"id": 3,
		"lista1": "> Mineração",
		"lista2": "> Açúcar & Etanol",
	},
	{
		"id": 4,
		"lista1": "> Construção Civil",
		"lista2": "> Siderurgia",
	},
	{
		"id": 5,
		"lista1": "> Água",
		"lista2": "> Papel & Celulose",
	},
	{
		"id": 6,
		"lista1": "> Oil & Gas",
		"lista2": "> Naval",
	},
	{
		"id": 7,
		"lista1": "> Mobilidade Elétrica",
		"lista2": "> Smart Grid",
	}];

	inicio = "<li><a href='#'>";
	titulo = "<h1>Conheça nossas áreas de soluções</h1>";
	imagem = "<div class='solucoes-img'><h1>Eficiência Energética</h1><p>Conheça as soluções WEG em Eficiência Energética que irão otimizar o seu negócio.</p></div>";
	fim = "</a></li>";

	for(x in tabela) {
		exibe += inicio + tabela[x].lista1 + fim;
		document.getElementById("lone").innerHTML = exibe;
		exibet += inicio + tabela[x].lista2 + fim;
		document.getElementById("ltwo").innerHTML = exibet;
	}
	document.getElementById("title-solucoes").innerHTML = titulo;
	document.getElementById("img-solucoes").innerHTML = imagem;
}

/* ====== SECÃO 5 ====== */
function payback() {
	var exibe = "", exibet = "", fim = "</div>", junta = "";
	var payback = [
	{
		"item": "<h1>Payback Solar</h1>",
	},
	{
		"item": "<div class='text-img-payback'><h1>Baixe nosso aplicativo e calcule o retorno financeiro que teria adotando as soluções em Energia Solar WEG.</h1></div>",
	}];

	var inputPay = [
	{
		"input": "<input type='button' class='ios' value='IOS'></a>",
		"link": "<a href='https://apps.apple.com/br/app/payback-solar/id1099645279'>",
	},
	{
		"input": "<input type='button' class='android' value='ANDROID'></a>",
		"link": "<a href='https://play.google.com/store/apps/details?id=net.weg.paybacksolar'>",
	}];

	var troca = [
	{
		"div": "text",
	},
	{
		"div": "img",
	},
	{
		"div": "buttons",
	}];

	inicio = "<div class='";
	meio = "-payback'>"
	fim = "</div>";

	exibe += inicio + troca[0].div + meio + payback[0].item + fim;
	document.getElementById("payback").innerHTML = exibe;
	exibe += inicio + troca[1].div + meio + payback[1].item + inicio + troca[2].div + meio + inputPay[0].link + inputPay[0].input + inputPay[1].link + inputPay[1].input + fim;
	document.getElementById("payback").innerHTML = exibe;
} 

/* ====== SECÃO 6 ====== */
function motorEletrico() {
	var exibe = "";
	var motor = [
	{
		"div": "text-eletrico",
		"item": "<h1>Descubra como o motor elétrico pode tornar a sua indústria mais eficiente.</h1>",
	},
	{
		"div": "text-img-motor_ele",
		"item": "<h1>Acesse nosso aplicativo de cálculo de eficiência energética e simule os ganhos com a troca de motores elétricos.</h1>",
	},
	{
		"div": "button-motor_ele",
		"item": "<a href='https://www.weg.net/institutional/BR/pt/'><input type='button' class='saibamais' value='SAIBA MAIS'></a>",
	}];

	inicio = "<div class='";
	meio = "'>"
	fim = "</div>";
	divPai = "<div class='img-eletrico'>";

	for(x in motor) {
		if(x == 1) {
			exibe += divPai + inicio + motor[x].div + meio + motor[x].item + fim;
			document.getElementById("motor-eletrico").innerHTML = exibe;
		} else {
			exibe += inicio + motor[x].div + meio + motor[x].item + fim;
			document.getElementById("motor-eletrico").innerHTML = exibe;
		}
	}
}

/* ====== SECÃO 7 ====== */
function novidadesE() {
	var exibe = "";
	var tiE = [
	{
		"texto": "<h1>Acompanhe as novidades</h1></div>",
	}];
	var novE = [
	{
		"div": "title-novidades",
		"texto": "<h1>WEG TINTAS lança nova solução para Construção Civil</h1>",
	},
	{
		"div": "descricao-novidades",
		"texto": "<p>Esta tinta é um acabamento poliuretano acrílico alifático para aplicações em paredes e fachadas externas.</p>",

	}];

	inicio = "<div class='";
	meio = "'>";
	fim = "</div>";

	for(x in novE) {
		exibe += inicio + novE[x].div + meio + novE[x].texto + fim;
		document.getElementById("novConE").innerHTML = exibe;
	}
	exibe = tiE[0].texto;
	document.getElementById("novTiE").innerHTML = exibe;
}

function novDtop() {
	var exibe = "", exibeT = "";
	var noticiaT = [
	{
		"div": "text-noticia",
		"texto": "<h2>WEG fornece pacote elétrico para usina de etanol de milho da Alcooad</h2>",
	},
	{
		"div": "text-noticia",
		"texto": "<p>Localizada no Estado do Mato Grosso, a planta terá capacidade para produzir…</p>",
	},
	{
		"div": "text-noticia",
		"texto": "<h2>WEG fornece solução completa para geração de energia nas PCH’s Coração e Tupitinga</h2>",
	},
	{
		"div": "text-noticia",
		"texto": "<p>Conjunto de turbinas e geradores fazem parte dos…</p>",
	}
	];

	inicio = "<div class='";
	meio = "'>";
	fim = "</div>";

	for(x in noticiaT) {
		if(x < 2) {
			exibe += inicio + noticiaT[x].div + meio + noticiaT[x].texto + fim; // 2x aq  // Ele corta o titulo pq limpa
			document.getElementById("texTop").innerHTML = exibe;
		} else {
			exibeT += inicio + noticiaT[x].div + meio + noticiaT[x].texto + fim; // 2x aq
			document.getElementById("textBottom").innerHTML = exibeT;
		}

	}
}

/* ====== ALL FUNCTIONS ====== */
function exibeFuncao() {
	menuEsquerdo();
	menuDireito();
	menuRoleta();
	primeiraSecao();
	videoSecao(); 
	menuBanner(); 
	listaSolucoes(); 
	payback();
	motorEletrico();
	novidadesE();
	novDtop();
	trocaBanner();
}
/* ====== FIM ====== */