$(document).ready(function(){
	$("form")[0].reset();
	$("#main").click(function(){
		$("#main_item_content").toggle();
	});

	$("#erp_item, #first").click(function(){
		var cover = parseInt($("#cover").css('height'));
		var bar_cont = parseInt($("#contact_content").css('height'));
		var mov = cover + bar_cont;
		$(document).scrollTop(mov);
		$("#main_item_content").hide();
	});

	$("#aplicaciones, .apli").click(function(){
		var cover = parseInt($("#cover").css('height'));
		var bar_cont = parseInt($("#contact_content").css('height'));
		var content_pad = parseInt($("#content").css('padding-top'));
		var job = parseInt($("#job").css('height'));
		var job_margin = parseInt($("#job").css('margin-bottom'));
		var job_pad = parseInt($("#job").css('padding-top'));
		var mov = cover + bar_cont + content_pad + job + job_margin + job_pad;
		$(document).scrollTop(mov);
		$("#main_item_content").hide();
	});

	$("#experiencia").click(function(){
		var cover = parseInt($("#cover").css('height'));
		var bar_cont = parseInt($("#contact_content").css('height'));
		var content_pad = parseInt($("#content").css('padding-top'));
		var job = parseInt($("#job").css('height'));
		var job_margin = parseInt($("#job").css('margin-bottom'));
		var job_pad = parseInt($("#job").css('padding-top'));
		var app_margin = parseInt($("#apps").css('margin-bottom'));
		var app = parseInt($("#apps").css('height'));
		var line_mar = parseInt($("#line").css('margin-bottom'));
		var mov = cover + bar_cont + job + job_margin + app + app_margin + content_pad;
		$(document).scrollTop(mov);
		$("#main_item_content").hide();
	});

	$("#contactanos").click(function(){
		var page = parseInt($("#page").css('height'));
		var form = parseInt($("#contact_form").css('height'));
		var inter = parseInt($("#interaction").css('height'));
		var inter_mar = parseInt($("#interaction").css('margin-top'));
		var suma = form + inter + inter_mar;
		var mov = page - suma;
		$(document).scrollTop(mov);
		$("#main_item_content").hide();
	});

	$("#main_content").mouseleave(function(){
		$("#main_item_content").hide();
	});

	$('.try').click(function(){
		$('form').show();
		$('.fa').hide();
		$('.msg').hide();
		$('.try').hide();
		$('.msg').html("");
		$('.try').html("");
	});

	function validaForm(){
	    // Campos de texto
	    if($("#nombre").val() == ""){
	        alert("El campo Nombre no puede estar vacío.");
	        $("#nombre").focus();       // Esta función coloca el foco de escritura del usuario en el campo Nombre directamente.
	        return false;
	    }
	    if($("#mail").val() == ""){
	        alert("El campo e-mail no puede estar vacío.");
	        $("#nombre").focus();
	        return false;
	    }
	    if($("#subject").val() == ""){
	        alert("El campo asunto no puede estar vacío.");
	        $("#nombre").focus();
	        return false;
	    }
	    if($("#area_message").val() == ""){
	        alert("El campo mensaje no puede estar vacío.");
	        $("#nombre").focus();
	        return false;
	    }
    	return true;
	}

	$('.send-button').click(function(e){
		e.preventDefault();
		$('form').hide();
		var data = $('form').serializeArray();
		$("#cargando").show();
		if (validaForm()) {
			$.ajax({
			url: '../mail.php',
			type: 'post',
			dataType: 'json',
			data: data,
			beforeSend: function() {
				$('form').css('display', 'none');
			}
		})
		.done(function(data){  //true
			console.log(data.response);
			if(data.response == true){
				//si se envio
				$('.msg').html("Tu mensaje ha sido enviado");
			}else{
				//no se envio
				$('.msg').html("Mensaje no enviado");
				$('.try').html("Intentar de nuevo");
				$('.msg').show();
				$('.try').show();
			}
			$("#cargando").hide();
		})
		.fail(function(){  //false
			$('.msg').html("Mensaje no enviado");
			$('.try').html("Intentar de nuevo");
			$("#cargando").hide();
		})
		.always(function(){
			$("#cargando").hide();
		});
		}
		$("form")[0].reset();
	});



	/*$("#erp").click(function(){
		$("#two_content, .item_content, #title_job").hide();
		$("#tipe, .fa").fadeIn(2000);
		$("#title_tipe").text("ERP/CRM");
		$("#intro_tipe").text("Desarrollo de programas hechos a la medida para el control y administración de recursos de la empresa, incluyendo sus procesos para mejorar las relaciones y ventas con los clientes.");
		$("#complement_tipe").text("Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe parte dellas.Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no ");
	});

	$("#industria").click(function(){
		$("#two_content, .item_content, #title_job").hide();
		$("#tipe").fadeIn(2000);
		$("#title_tipe").text("Industria de Fabricación y Transformación");
		$("#intro_tipe").text("ERP que administra y controla todas las áreas: compras, cotizaciones y pedidos del cliente, almacén MP, órdenes de producción, empacado, embarques, almacén PT, facturación, cobranza, mantenimiento, ingeniería, sistema de gestión de calidad, control de documentos, costeos, presupuestos, reportes gerenciales, etc.");
		$("#complement_tipe").text("Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe parte dellas.Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no ");
	});

	$("#valuaciones").click(function(){
		$("#two_content, .item_content, #title_job").hide();
		$("#tipe").fadeIn(2000);
		$("#title_tipe").text("Valuaciones de Daños de Seguros");
		$("#intro_tipe").text("Registro de casos, bitácoras, control de asesores técnicos, facturación electrónica, cobranza, tesorería, contabilidad, reportes varios, etc.");
		$("#complement_tipe").text("Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no te cabe parte dellas.Y, viéndole don Quijote de aquella manera, con muestras de tanta tristeza, le dijo: Sábete, Sancho, que no es un hombre más que otro si no hace más que otro. Todas estas borrascas que nos suceden son señales de que presto ha de serenar el tiempo y han de sucedernos bien las cosas; porque no es posible que el mal ni el bien sean durables, y de aquí se sigue que, habiendo durado mucho el mal, el bien está ya cerca. Así que, no debes congojarte por las desgracias que a mí me suceden, pues a ti no ");
	});

	$("#back").click(function(){
		$("#two_content, .item_content, #title_job").fadeIn(2000);
		$("#tipe").hide(); 
	});*/ 
});


















