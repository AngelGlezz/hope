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
		var job = parseInt($("#job").css('height'));
		var job_margin = parseInt($("#job").css('margin-bottom'));
		var mov = cover + bar_cont + job + job_margin;
		$(document).scrollTop(mov);
		$("#main_item_content").hide();
	});

	$("#experiencia").click(function(){
		var cover = parseInt($("#cover").css('height'));
		var bar_cont = parseInt($("#contact_content").css('height'));
		var job = parseInt($("#job").css('height'));
		var job_margin = parseInt($("#job").css('margin-bottom'));
		var app_margin = parseInt($("#apps").css('margin-bottom'));
		var app = parseInt($("#apps").css('height'));
		var mov = cover + bar_cont + job + job_margin + app + app_margin;
		$(document).scrollTop(mov);
		$("#main_item_content").hide();
	});

	$("#contactanos").click(function(){
		var page = parseInt($("#page").css('height'));
		$(document).scrollTop(page);
		$("#main_item_content").hide();
	});

	$("#main_content").mouseleave(function(){
		$("#main_item_content").hide();
	});
});