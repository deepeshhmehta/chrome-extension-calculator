$(document).ready(function(){
	temp = 0;
	answer = 0;
	operation = 0;
	$('.digit').on("click",function(){
		digiclick($(this).find('input').val());
		showstats();
	});

	$('.oper').on("click", function(){
		if ($(this).find('input').val() == '=')
			evaluate();
		else
		operclick($(this).find('input').val());
		showstats();
	});
});



function digiclick(x){
		switch ($('#display').val()){
			case '+':
			case '-':
			case '*':
			case '/': $('#display').val("");
		}
		if (parseInt($('#display').val())==0)
			$('#display').val("");
		$('#display').val($('#display').val()+x);
		temp = parseInt($('#display').val());
		// $('#display').val($(this).val());
	}

function operclick(x){
	if (operation === 0){
		answer = temp;
		temp = 0;
		}
	
	else 
	{
		evaluate();
		}
	
	$('#display').val(x);
	switch (x){
		case '+': operation = 1; console.log('recognized');break;
		case '-': operation = 2;break;
		case '*': operation = 3;break;
		case '/': operation = 4;break;
	}
}

function evaluate(){
	switch (operation){
			case 1: answer = parseInt(answer) + parseInt(temp);break;
			case 2: answer =parseInt(answer)-parseInt(temp);break;
			case 3: answer = parseInt(answer)*parseInt(temp);break;
			case 4: answer = parseInt(answer)/parseInt(temp);break;
	}
	temp=0;
	$('#display').val(answer);
}

function showstats(){
	console.log(operation+" --oper");
	console.log(temp+" -- temp");
	console.log(answer+" -- answer");
	console.log("---");
}