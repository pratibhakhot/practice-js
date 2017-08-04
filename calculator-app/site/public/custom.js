(function(){
	var keys;

    function executeExpression(){

	};

	function clearExpression(){

	};

	function invokeExpression(){

	};

	function analyzeInput(){
		var input='';
		if(input === "="){
			invokeExpression()	
		}else if( input=== "C"){
	    	clearExpression();
		}else{
			executeExpression();
		}
	};

	(function initialCalculator(){
       $("#calculator span").on('click',analyzeInput);
	});

}())