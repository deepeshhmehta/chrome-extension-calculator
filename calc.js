$(document).ready(function(){
	temp = 0;
	answer = 0;
	operation = 0;
	$('.digit').on("click",function(){
		digiclick($(this).find('input').val());
		
	});

	$('.oper').on("click", function(){
		if ($(this).find('input').val() === '='){
			evaluate();
		
		}
		else
		operclick($(this).find('input').val());
		
	});
$(document).keypress(function(e){
	switch (e.which){
		case 48:digiclick(0);break;
		case 49:digiclick(1);break;
		case 50:digiclick(2);break;
		case 51:digiclick(3);break;
		case 52:digiclick(4);break;
		case 53:digiclick(5);break;
		case 54:digiclick(6);break;
		case 55:digiclick(7);break;
		case 56:digiclick(8);break;
		case 57:digiclick(9);break;
		case 43:operclick('+');break;
		case 45:operclick('-');break;
		case 42:operclick('*');break;
		case 47:operclick('/');break;
		case 13:evaluate();break;
		case 32:reset();break;
	}
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
		case '+': operation = 1;break;
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

function reset(){
	temp = 0;
	answer = 0;
	operation = 0;
	$('#display').val('0');

}