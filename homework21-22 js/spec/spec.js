var questionansver = require('../js/src/saveToJSON.js');

describe("questionansver", function() {
	describe("questionansver", function() {
		it("length trueAnswer", function() {
		    // prepare
		    var result = [];
		    // act
		    for(var i = 0; i < questionansver.length; i++){
		    	result.push(questionansver[i].trueAnswer.length);		    	
		    }		    
		    // assert		  
		   for(var j = 0; j < questionansver.length; j++){		    	
		    	expect(result[j]).toEqual(5);
		    }		   
		});

		it("count trueAnswer", function() {
		    // prepare
		   var countTrueAnsver=0;		   
		    // act
		    for(var k = 0; k < questionansver.length; k++){
		    	var arrayAnsw = [];
		    	arrayAnsw = questionansver[k].trueAnswer.split(' ');		    	
		    	for(var l=0; l < arrayAnsw.length; l++){
		    		if( '1' === arrayAnsw[l]){
		    			countTrueAnsver++;		    			
		    		}  
		    	}
		    }	   
		    
		    // assert		    		    	
		    expect(countTrueAnsver).toEqual(4);		
		});

		it("count questions", function() {
		    // prepare
		   var countQuestions=0;		   
		    // act
		    for(var h = 0; h < questionansver.length; h++){
		    	if(questionansver[h].question){
		    		 countQuestions++;
		    	}		    	
		    }	   
		    
		    // assert		    		    	
		    expect(countQuestions).toEqual(4);		
		});
  	});
});