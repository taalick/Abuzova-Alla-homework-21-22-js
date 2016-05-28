
$(document).ready(function() {
	saveToLocStor(); // сохраняет в localestorage
	$('#calc').click(function(){		
		
		let countTruAnsw = calculate();
		console.log(countTruAnsw);		
		modalWindow(calculate());
		clean();	

    });


   function calculate(){
    	let countAnsw = 0;
    	let strAnsw = '0';
    	let strTrueAnsw = '0';
    	let strAnswArray;
    	let strTrueAnswArray;
    	// пользовательские ответы 	
    	
    	$('.radioClass').each(function(i){
    		let check = $(this).prop("checked");
	    	if(check === true){
	    		strAnsw += " " + "1";
	    	} else{
	    		strAnsw += " " + "0";
	    	};
    	});    	
    	console.log(strAnsw);  

    	// правильные ответы 
    	let test1 = localStorage.getItem('questionansverObj');
		test1 = JSON.parse(test1);	

		console.log(test1);

		for(let value of test1){
			strTrueAnsw += " " +  value.trueAnswer;			
		}
		console.log(strTrueAnsw);


		// подсчет правильных ответов
		strAnswArray = strAnsw.split(' ');
		strTrueAnswArray = strTrueAnsw.split(' ');		
		for(let j=0; j<strAnswArray.length; j++){
			if(strAnswArray[j] === '1' && strAnswArray[j] === strTrueAnswArray[j]  ){
				countAnsw += 1;
			}
		}
		console.log(countAnsw);		
    	return countAnsw;
    }


    function clean(){
    	// обновление ответов
		$('.radioClass').each(function(i){
    		var check = $(this).prop("checked");	    	
	    	if(check === true){
	    		$(this).prop("checked", false);
	    	};
    	}); 
    }
    
    
    function modalWindow(countTruAnsw){   
    		
    			console.log(123); 
				const defaults = {
					overlayColor: 'rgba(0, 0, 0, 0.5)',
					font: 'Arial',
					fontSize1: '25px',
					fontSize2: '20px',
					lineHeight: '40px',
					
				};				
				
				
				
				let $body = $('body');
				let $modal;
				let $overlay;
				let $close;
			
					
				$close = $('<div class="fancybox-modal"><diiv class="fancybox-close"></div></div>');				
				$modal =$('<div class="fancybox-modal"><p style="font-size:' + defaults.fontSize1 + '; line-height:' + defaults.lineHeight+ '">Результаты тестов</p><p style="font-size:' + defaults.fontSize2 + ';">Правильных ответов: '+ countTruAnsw +'</p></div>');
				
				$overlay = $('<div class="fancybox-overlay"></div>');
				$overlay.css({
					'background-color': defaults.overlayColor,
				});
			
				$body.append($close);
				$body.append($overlay);
				$body.append($modal);
				$overlay.one('click', hideModal);
				$close.one('click', hideModal);			
					
				

				function hideModal(){
					$modal.remove();
					$close.remove();
					$overlay.remove();				
				}		
		};
	});
   	