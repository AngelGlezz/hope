$(document).ready(function(){
	$("#main").click(function(){
		$("#main_item_content").show();
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
});