		$(document).ready(function(){
			function pesada(texto){
				var def=$.Deferred();
				console.log("Haciendo muchas cosas con " +texto);
				setTimeout(function(){
					console.log("Finalizado hacer cosas con " +texto);
					def.resolve("Esto marcha");
				},1000);
				return def.promise();
			}
			function alertar(){
				console.log("alertando");
				$('p').addClass('alerta');
			}
			function finAlerta(text){
				console.log("Fin de alertando");
				var p=$('p').removeClass('alerta');
				if(text){
					$(p).text(text);
				}
			}

			$('button').bind('click',function(){
				console.log('click');
				$.when(pesada("Una cantidad de datos increible"),alertar()).done(function(x){finAlerta(x);});

			});	

			});
