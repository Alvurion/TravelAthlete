var appConstants = {
//	serverURL: "http://158.227.64.57:8080/"+"TTA1516_LS-EX_8S/", //EHU public
	localPermanentStorageFolder: "/sdcard/TravelAthlete/",
};

var numPreguntas = 5;

var nombreTest=null;
var max=0;

var logged_in=0;

var creado=0;

var valores = [];

var results = {
	login: null,
	corrects: 0,
	answered: 0
};


var page = {
	create: function(i) {
		var pageDiv=$('<div data-role="page" id="page-'+i+'"></div>');
		var headerDiv=
			'<div data-role="header" data-position="fixed" data-theme="b" >'+
				'<h1 style="margin-left:0;margin-right:0;white-space: nowrap;overflow: visible;">PRACTICE!</h1>'+
			'</div>';
		var contentDiv=
			'<div data-role="content">'+
				'<h3 class="login"></h3>'+
				'<form id="form-'+i+'">'+
					'<fieldset data-role="controlgroup" data-iconpos="right">'+
					'<legend id="question-'+i+'"></legend>'+
					'<input name="radio-choice-'+i+'" id="radio-choice-'+i+'a" data-mini="true" value="0" type="radio"/>'+
					'<label for="radio-choice-'+i+'a" id="label-radio-choice-'+i+'-0"></label>'+
					'<input name="radio-choice-'+i+'" id="radio-choice-'+i+'b" data-mini="true" value="1" type="radio"/>'+
					'<label for="radio-choice-'+i+'b" id="label-radio-choice-'+i+'-1"></label>'+
					'<input name="radio-choice-'+i+'" id="radio-choice-'+i+'c" data-mini="true" value="2" type="radio"/>'+
					'<label for="radio-choice-'+i+'c" id="label-radio-choice-'+i+'-2"></label>'+
					'</fieldset>'+
					'<div style="text-align:center;">'+
						'<a href="" id="button-'+i+'-1" class="ui-btn ui-btn-inline ui-corner-all" onclick="check('+i+')">CHECK</a>'+				
					'</div>'+
				'</form>'+				
			'</div>';
		if (i!=(numPreguntas-1)){
		var footerDiv=
			'<div data-role="footer" data-position="fixed" data-theme="b">'+
				'<div class="ui-grid-b" style="width:80%; text-align:center; font-weight:normal;">'+
					'<div class="ui-block-a">RESULTADOS: </div>'+
					'<div class="ui-block-b res-1" id="res-'+i+'-1"></div>'+
					'<div class="ui-block-c res-2" id="res-'+i+'-2"></div>'+
				'</div>'+			
				'<h4>TravelAthlete</h4>'+
				'<a href="#" id="prev-'+i+'" class="ui-btn ui-mini ui-corner-all ui-icon-arrow-l ui-btn-icon-left" data-transition="turn">Prev</a>'+
				'<a href="#" id="next-'+i+'" class="ui-btn ui-mini ui-corner-all ui-icon-arrow-r ui-btn-icon-left" data-transition="turn">Next</a>'+
			'</div>';
		}
		else{
			var footerDiv=
			'<div data-role="footer" data-position="fixed" data-theme="b">'+
			'<div class="ui-grid-b" style="width:80%; text-align:center; font-weight:normal;">'+
				'<div class="ui-block-a">RESULTADOS: </div>'+
				'<div class="ui-block-b res-1" id="res-'+i+'-1"></div>'+
				'<div class="ui-block-c res-2" id="res-'+i+'-2"></div>'+
			'</div>'+			
			'<h4>Practica TravelAthlete</h4>'+
			'<a href="#" id="prev-'+i+'" class="ui-btn ui-mini ui-corner-all ui-icon-arrow-l ui-btn-icon-left" data-transition="turn">Prev</a>'+
			'<a href="#pageMedalla" id="paginaLogin" class="ui-btn ui-mini ui-corner-all ui-icon-arrow-r ui-btn-icon-left" data-transition="turn" onclick="medalla()">Medallas</a>'+
		'</div>';
		}
		
		pageDiv.append(headerDiv,contentDiv,footerDiv);
		
		return pageDiv;
	},
	load: function(i) {
		
		$("#button-"+i+"-1").show();
		$("#button-"+i+"-1").attr("onclick","check("+i+")");
		
     	$("#question-"+i).text("PREGUNTA "+(i+1)+": "+nombreTest.test[valores[i]].pregunta);
    	
     	$("label[id|='label-radio-choice-"+i+"']").each(
     			function(index) {     				
     				$(this).text(nombreTest.test[valores[i]].respuestas[index]);     				
    		    }
     	);
     	
     	$("#button-"+i+"-1").attr("onclick");
     	
     	$("#prev-"+i).attr("href","#page-"+(i-1));
     	$("#next-"+i).attr("href","#page-"+(i+1));
     	
     	
     	    		
 	}
};
