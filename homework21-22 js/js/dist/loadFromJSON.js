'use strict';

$(function () {
	var template = $('#test').html();

	var test1 = localStorage.getItem('questionansverObj');
	test1 = JSON.parse(test1);
	var test2 = localStorage.getItem('constantObj');
	test2 = JSON.parse(test2);
	//console.log(test1);
	//console.log(test2);

	var articles = {
		questionsansvers: test1,
		constants: test2
	};

	var content = tmpl(template, articles);
	$('body').append(content);
});
