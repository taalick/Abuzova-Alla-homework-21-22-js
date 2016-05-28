$(function(){
	let template = $('#test').html();	
	
		let test1 = localStorage.getItem('questionansverObj');
		test1 = JSON.parse(test1);		
		let test2 = localStorage.getItem('constantObj');
		test2 = JSON.parse(test2);		
		//console.log(test1);
		//console.log(test2);

		let articles = {			
			questionsansvers: test1,
			constants: test2
		};

	let content = tmpl(template, articles);
	$('body').append(content);	
});