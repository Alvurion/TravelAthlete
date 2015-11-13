function login() {
	var loginVal=$("#login").val();
	
	tests.login=loginVal;
	results.login=loginVal;
	
	//Guardar loginVal de forma permanente en "results_login"
	localStorage.setItem("results_login",loginVal);
	//Guardar valor 0 de forma permanente en "results_corrects"
	localStorage.setItem("results_corrects",0);
	//Guardar valor 0 de forma permanente en "results_answered"
	localStorage.setItem("results_answered",0);
	loadContents();
}



function loadContents(){
	page.load(0);
	
	var pageDiv;
	for(var i=1;i<tests.total;i++) {
		pageDiv=page.create(i);
		$("body").append(pageDiv);
		page.load(i);
	}

 	$("#prev-0").remove();
 	$("#next-"+(tests.total-1)).attr("href","#page-0");
	
	//Guardar en results.login el valor de guardado en "results_login"
 	results.login=localStorage.getItem("results_login");
	//Rellenar todos los elementos de class .login con el texto "LOGIN: " y el valor results.login
 	$(".login").text("LOGIN: "+results.login);
	//Guardar en results.corrects el valor de guardado en "results_corrects"
 	results.corrects=localStorage.getItem("results_corrects");
	//Guardar en results.answered el valor de guardado en "results_answered"
 	results.answered=localStorage.getItem("results_answered");
 	
	$(".res-1").text(""+results.corrects+"/"+results.answered);
	if(results.answered!=0)
		$(".res-2").text(""+(results.corrects*100/results.answered).toFixed(2)+"%");
	else
		$(".res-2").text("0%");

	fitImg();//para ajustar a los anchos de la pantalla
 	
	$("body").enhanceWithin();
	
	$("#request").hide();
	$("#form-0").show();	
}

function rellenaLista_frasesFutbol(lista){	
	$.each(lista, function(){
		var li = $('<li>');
		var cast='<h2>'+this.castellano+'</h2>';
		var ing='<p>'+this.ingles+'</p></li>'
		li.append(cast,ing);
		$("#listafrasesFutbol > div.listaulFutbol ul").append(li);
	})	
}
function rellenaLista_frasesBaloncesto(lista){	
	$.each(lista, function(){
		var li = $('<li>');
		var cast='<h2>'+this.castellano+'</h2>';
		var ing='<p>'+this.ingles+'</p></li>'
		li.append(cast,ing);
		$("#listafrasesBaloncesto > div.listaulBaloncesto ul").append(li);
	})	
}
function rellenaLista_frasesTenis(lista){	
	$.each(lista, function(){
		var li = $('<li>');
		var cast='<h2>'+this.castellano+'</h2>';
		var ing='<p>'+this.ingles+'</p></li>'
		li.append(cast,ing);
		$("#listafrasesTenis > div.listaulTenis ul").append(li);
	})	
}
function rellenaLista_frasesSurf(lista){	
	$.each(lista, function(){
		var li = $('<li>');
		var cast='<h2>'+this.castellano+'</h2>';
		var ing='<p>'+this.ingles+'</p></li>'
		li.append(cast,ing);
		$("#listafrasesSurf > div.listaulSurf ul").append(li);
	})	
}
function rellenaLista_frasesVida(lista){	
	$.each(lista, function(){
		var li = $('<li>');
		var cast='<h2>'+this.castellano+'</h2>';
		var ing='<p>'+this.ingles+'</p></li>'
		li.append(cast,ing);
		$("#listafrasesVida > div.listaulVida ul").append(li);
	})	
}
function rellenaLista_frasesAlimentacion(lista){	
	$.each(lista, function(){
		var li = $('<li>');
		var cast='<h2>'+this.castellano+'</h2>';
		var ing='<p>'+this.ingles+'</p></li>'
		li.append(cast,ing);
		$("#listafrasesAlimentacion > div.listaulAlimentacion ul").append(li);
	})	
}
function rellenaLista_frasesEnfermeria(lista){	
	$.each(lista, function(){
		var li = $('<li>');
		var cast='<h2>'+this.castellano+'</h2>';
		var ing='<p>'+this.ingles+'</p></li>'
		li.append(cast,ing);
		$("#listafrasesEnfermeria > div.listaulEnfermeria ul").append(li);
	})	
}
function rellenaLista_frasesHorarios(lista){	
	$.each(lista, function(){
		var li = $('<li>');
		var cast='<h2>'+this.castellano+'</h2>';
		var ing='<p>'+this.ingles+'</p></li>'
		li.append(cast,ing);
		$("#listafrasesHorarios > div.listaulHorarios ul").append(li);
	})	
}


function check(i) {
//	alert("check 1");
	
	results.answered++;
	
	var answer=$("input[name='radio-choice-"+i+"']:checked").val();
	if(answer==tests.test[i].correct) {
		alert("CORRECT");
		results.corrects++;
		$("#button-"+i+"-1").hide();
		
	}
	else {
		alert("WRONG");
		$("#button-"+i+"-1").hide();
		
	}
	
	$(".res-1").text(""+results.corrects+"/"+results.answered);
	$(".res-2").text(""+(results.corrects*100/results.answered).toFixed(2)+"%");
	
	$("label[id|='label-radio-choice-"+i+"']").each( //each es para que lo haga con cada uno de los radio button
		function(index) {
			if(index!=tests.test[i].correct) {
				$(this).css("color","red");
			}
			else
				$(this).css({"color":"white","background-color":"green","font-size":"24px"});
		}
	);

	$("#button-"+i+"-1").attr("onclick","");
	
	//Guardar en results.corrects el valor de guardado en "results_corrects"
	localStorage.setItem("results_corrects",results.corrects);
	//Guardar en results.answered el valor de guardado en "results_answered"
	localStorage.setItem("results_answered",results.answered);
//	alert("check 7");
}

function medalla(){
	var porcen= results.corrects*100/results.answered;
	
	//Si no se ha tocado nada del test, ya que 0/0=IND
	if(results.corrects==0 && results.answered==0)
		porcen=0;
	
	alert("CANTIDAD: "+frasesAlimentacion.total);
	//alert("Cant2: "+appConstants.cantidad);
	
	//Bronce
	if (porcen<=34){
		$("#oro").hide();
		$("#plata").hide();
		$("#bronce").show();
		alert("Debes mejorar! tu porcentaje de acierto del "+porcen+"%");
		
	}
	else{
		//Plata
		if (porcen>34 && porcen<=67){
			$("#oro").hide();
			$("#plata").show();
			$("#bronce").hide();
			alert("No está mal! pero puedes hacerlo mejor, tu porcentaje de acierto es: "+porcen+"%");
			
		}
		else{
			//Oro
			$("#oro").show();
			$("#plata").hide();
			$("#bronce").hide();
			alert("Eres TOP! tu porcentaje de acierto es: "+porcen+"%");
			
		}
		
	}
	
}

function getRandomArbitrary(min, max, limite) {
	
    for(var i=0; i<limite; i++) {
    	var valor=Math.floor(Math.random()*(max-min)+min);
    	alert("Valor numero "+i+": "+valor);
        if(i==0){
        	valores[i]=valor;
        	alert("Valor inicial: "+valores[i]);
        }
        else{
        	for(k=0;k<i;k++){
        		if(valor==valores[k]){
        			alert("Repetido: ");
        			k=i;
        			i--;
        		}
        	}
        	if(k==i){
        		valores[i]=valor;
        		alert("Valor guardado numero "+i+": "+valores[i]);
        	}
        }
    }
    
    for(var l=0; l<limite; l++){
    	alert("Valores["+l+"]: "+valores[l]);
    }
    
    
}