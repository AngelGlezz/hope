$(document).ready(function(){
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


















