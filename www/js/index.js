var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
    	// Para hacer el LOGIN
		var storedLogin=localStorage.getItem("results_login");
		if(storedLogin!=null) {//si ya habido un login antes
			//Poner storedLogin como valor del input id=login
			$("#login").val(storedLogin);
			//Cambiar el texto del botón id=button-1 a "NEW LOGIN"
			$("#button-1").text("NEW LOGIN");
			//Mostrar el botón id=button-2
			$("#button-2").show();
		}

		$(window).bind('resize',fitImg); //Bind imgFit function to resize event

     }
};

app.initialize();

function fitImg() { // para ajustar a los anchos de la pantalla y que sirva para diferentes tamaños
	var screenWidth=$(window).width()-16*2;
	var screenHeight=$(window).height()-16*2;
	$("img").each(
		function () {
			$(this).css({"max-width":screenWidth, "max-height":screenHeight});
		}
	);	
}
