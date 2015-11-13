var appConstants = {
//	serverURL: "http://158.227.64.57:8080/"+"TTA1516_LS-EX_8S/", //EHU public
	localPermanentStorageFolder: "/sdcard/PracticaTravel/",
};

var valores = [];

var tests = {
		login: null,
		total: 3,
		test: [
		       {
		    	   	question: "Quien ganará la liga 2015-16?",
		    	   	resp: [
		    	          "Celta",
		    	          "Cadiz",
		    		      "Rayo",
		    		      "ManU"
		    		      ],
		    		correct: "0"	
		       },
		       {
		    	   	question: "Donde viven los Bulaos?",
		    	   	resp: [
		    	          "Iurreta",
		    	          "JSON",
		    		      "Madrid",
		    		      "Roma"
		    		      ],
		    		correct: "2"	      
		       },
		       {
		    	   	question: "Quien ganará el mundial de MotoGP?",
		    	   	resp: [
		    	          "Lorenzo",
		    	          "Rossi",
		    		      "Tu prima",
		    		      "Edu el Burlau"
		    		      ],
		    		correct: "0"
		       }
		 ]
};

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
					'<input name="radio-choice-'+i+'" id="radio-choice-'+i+'d" data-mini="true" value="3" type="radio"/>'+
					'<label for="radio-choice-'+i+'d" id="label-radio-choice-'+i+'-3"></label>'+
					'</fieldset>'+
					'<div style="text-align:center;">'+
						'<a href="" id="button-'+i+'-1" class="ui-btn ui-btn-inline ui-corner-all" onclick="check('+i+')">CHECK</a>'+				
					'</div>'+
				'</form>'+				
			'</div>';
		if (i!=(tests.total-1)){
		var footerDiv=
			'<div data-role="footer" data-position="fixed" data-theme="b">'+
				'<div class="ui-grid-b" style="width:80%; text-align:center; font-weight:normal;">'+
					'<div class="ui-block-a">RESULTS: </div>'+
					'<div class="ui-block-b res-1" id="res-'+i+'-1"></div>'+
					'<div class="ui-block-c res-2" id="res-'+i+'-2"></div>'+
				'</div>'+			
				'<h4>Practica TravelAthlete</h4>'+
				'<a href="#" id="prev-'+i+'" class="ui-btn ui-mini ui-corner-all ui-icon-arrow-l ui-btn-icon-left" data-transition="turn">Prev</a>'+
				'<a href="#" id="next-'+i+'" class="ui-btn ui-mini ui-corner-all ui-icon-arrow-r ui-btn-icon-left" data-transition="turn">Next</a>'+
			'</div>';
		}
		else{
			var footerDiv=
			'<div data-role="footer" data-position="fixed" data-theme="b">'+
			'<div class="ui-grid-b" style="width:80%; text-align:center; font-weight:normal;">'+
				'<div class="ui-block-a">RESULTS: </div>'+
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
		
     	$("#question-"+i).text("QUESTION "+i+": "+tests.test[i].question);
    	
     	$("label[id|='label-radio-choice-"+i+"']").each(
     			function(index) {     				
     				$(this).text(tests.test[i].resp[index]);     				
    		    }
     	);
     	
     	$("#button-"+i+"-1").attr("onclick");
     	
     	$("#prev-"+i).attr("href","#page-"+(i-1));
     	$("#next-"+i).attr("href","#page-"+(i+1));
     	    		
 	}
};
