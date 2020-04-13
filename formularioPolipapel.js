
function validaCedula(VerCedula){
  

  
	   var cedula = VerCedula;
  
	   //Preguntamos si la cedula consta de 10 digitos
	   if(cedula.length == 10){
		  
		  //Obtenemos el digito de la region que sonlos dos primeros digitos
		  var digito_region = cedula.substring(0,2);
		  
		  //Pregunto si la region existe ecuador se divide en 24 regiones
		  if( digito_region >= 1 && digito_region <=24 ){
			
			// Extraigo el ultimo digito
			var ultimo_digito   = cedula.substring(9,10);
  
			//Agrupo todos los pares y los sumo
			var pares = parseInt(cedula.substring(1,2)) + parseInt(cedula.substring(3,4)) + parseInt(cedula.substring(5,6)) + parseInt(cedula.substring(7,8));
  
			//Agrupo los impares, los multiplico por un factor de 2, si la resultante es > que 9 le restamos el 9 a la resultante
			var numero1 = cedula.substring(0,1);
			var numero1 = (numero1 * 2);
			if( numero1 > 9 ){ var numero1 = (numero1 - 9); }
  
			var numero3 = cedula.substring(2,3);
			var numero3 = (numero3 * 2);
			if( numero3 > 9 ){ var numero3 = (numero3 - 9); }
  
			var numero5 = cedula.substring(4,5);
			var numero5 = (numero5 * 2);
			if( numero5 > 9 ){ var numero5 = (numero5 - 9); }
  
			var numero7 = cedula.substring(6,7);
			var numero7 = (numero7 * 2);
			if( numero7 > 9 ){ var numero7 = (numero7 - 9); }
  
			var numero9 = cedula.substring(8,9);
			var numero9 = (numero9 * 2);
			if( numero9 > 9 ){ var numero9 = (numero9 - 9); }
  
			var impares = numero1 + numero3 + numero5 + numero7 + numero9;
  
			//Suma total
			var suma_total = (pares + impares);
  
			//extraemos el primero digito
			var primer_digito_suma = String(suma_total).substring(0,1);
  
			//Obtenemos la decena inmediata
			var decena = (parseInt(primer_digito_suma) + 1)  * 10;
  
			//Obtenemos la resta de la decena inmediata - la suma_total esto nos da el digito validador
			var digito_validador = decena - suma_total;
  
			//Si el digito validador es = a 10 toma el valor de 0
			if(digito_validador == 10)
			  var digito_validador = 0;
  
			//Validamos que el digito validador sea igual al de la cedula
			if(digito_validador == ultimo_digito){
			   console.log('la cedula:' + cedula + ' es correcta');
			   return 1;
			}else{
			   console.log('la cedula:' + cedula + ' es incorrecta');
			  return 0;
			}
			
		  }else{
			// imprimimos en consola si la region no pertenece
			console.log('Esta cedula no pertenece a ninguna region');
		  }
	   }else{
		  //imprimimos en consola si la cedula tiene mas o menos de 10 digitos
		  console.log('Esta cedula tiene menos de 10 Digitos');
	   }    
	
  };

var Formularios = function(){
	var mensajesError = {
		'formQS':{
			'nombreCP':{
				'required'    	: 'Escribe tu nombre completo',
				'lettersonly' 	: 'Debes escribir solo letras',
				'minlength'   	: 'Debes escribir mÃ­nimo 3 caracteres alfabÃ©ticos'
			},
			
			
			
			'emailCP':{
				'required'		: 'Escribe tu email',
				'email'			: 'El formato del email debe ser example@example.com'
			}
		}
	};

	var datosInputs = {};

	var init = function(){
	console.info('CargÃ³ el javasccript de QS 2 ');
		validateformQS();
	};

	var msjErrorGet = function(){
		mostrarMensaje('Lo sentimos, el correo ya estÃ¡ registrado.');
	};
	var msjErrorPost = function(){
		mostrarMensaje('Opps, lo sentimos ha ocurrido un error.');
	};
	var msjSuccessPost = function(){
		
		mostrarMensaje('<div class="mensaje">Gracias por Registrarte. Ya esta participando no te olvides de seguirnos en nuestra redes sociales <div class="redessociale"><img src="/arquivos/LOGOS footer-08.png">@etniacosmeticsecuador <img src="/arquivos/LOGOS footer-16.png">@etniacosmeticsecuador</div><div class="ConoceBoton"><a href="/EtniaCosmetics">Conoce todo lo que Etnia Cosmetics tiene para ti </a></div></div>');
	/*	mostrarMensaje('<div class="mensaje"><b>YA TIENES TU 25% DE DESCUENTO*</b> <br><a class="btnSOCIo" href="/Ofertas">COMPRA AHORA</a>'+   Conoce la variedad de etnia comestics
		'<span>* 25% Aplica a las categorÃ­as de muebles, sala, comedor, dormitorio, hogar, decoraciÃ³n, navidad	<br/>10% aplica en tecnologÃ­a, electrodomÃ©sticos y plÃ¡sticos Pica</span></div>');
	*/
	};

	var validateformQS = function(){
		
		$(".formQS").validate({
			rules:{
				'nombreCP':{
					required    : true,
					lettersonly : true,
					minlength   : 3
				},
				
				'cedulaCP':{
					required    : true,
					number      : true,
					maxlength   : 10,
                    minlength   : 10
				},
				
				'telefonoCP':{
					
					number      : true,
					maxlength   : 10,
					minlength   : 10
				},

				'emailCP':{
					required	: true,
					email 		: true
				}  ,

				'cmbGenero':{
					required	: true
				} 
				
			},
			messages:{
				'nombreCP':{
					required    : mensajesError.formQS.nombreCP.required,
					lettersonly : mensajesError.formQS.nombreCP.lettersonly,
					minlength   : mensajesError.formQS.nombreCP.minlength
				},
				'emailCP':{
					required	: mensajesError.formQS.emailCP.required,
					email 		: mensajesError.formQS.emailCP.number
				}
			},
			submitHandler: function(form){
				var formSTF   = $(form);
				var classForm = $(form).attr('class');
				var cedulaV = $('.'+classForm+' #cedulaCP').val();
				console.log("Datos: "+cedulaV);
				var ConfCedula = validaCedula(cedulaV);
				if (ConfCedula == 1){
					
					


					datosInputs["firstName"]       = $('.'+classForm+' #nombreCP').val();
					datosInputs["document"]       = $('.'+classForm+' #cedulaCP').val();
					datosInputs["phone"]       = $('.'+classForm+' #telefonoCP').val();
					datosInputs["email"]        = $('.'+classForm+' #emailCP').val(); 
					datosInputs["SuscripcionEtnia"]      = "1";
					
                
            	    var email = $('.'+classForm+' #emailCP').val();

                	verificarDatosMasterData(email,msjSuccessPost,msjErrorGet,'CL');
					guardarDatosMasterData(datosInputs,msjSuccessPost,msjErrorPost,'CL');
				}else
				{
					alert ("Cedula Invalida");
				}
		    }
		});
	};

	var verificarDatosMasterData = function(email, successCallback, errorCallback, entidadMasterData){
		var contentGet = {
			url : "/api/ds/pub/documents/"+entidadMasterData,       
			contentType : 'application/json; charset=utf-8',
			data: email,
			type : "GET",
			success : function(data){
				console.log('success GET');
				errorCallback();
			},
			error : function(data){
				console.log('error GET');
				successCallback();
			}
		}
		$.ajax(contentGet);
	};

	var guardarDatosMasterData = function(datosInputs, successCallback, errorCallback, entidadMasterData){
		var contentPost = {
			url : "/api/ds/pub/documents/"+entidadMasterData,       
			contentType :  'application/json; charset=utf-8',
			data : JSON.stringify(datosInputs),
			type : "POST",
			beforeSend : function(){							
				$('.formQS').find('button[type="submit"]').html('GUARDANDO ...');
				$('.formQS').find('button[type="submit"]').attr('disabled','disabled');
				$('.formQS').trigger('reset');
			},
			success : function(data){
				console.log('success POST');
				successCallback();
			},
			error : function(data){
                
				console.log(datosInputs);
				console.log('error POST');
				errorCallback();
			},
			complete : function(){
				$('.formQS').find('button[type="submit"]').html('ENVIAR');
				$('.formQS').find('button[type="submit"]').removeAttr('disabled');
			},
		}
		$.ajax(contentPost);
	};

	var mostrarMensaje = function(msj){
        $('.formQS').hide();
		$('.msjPycca').html(msj).fadeIn();
		
	};

	return {init:init};
}();

Formularios.init();
