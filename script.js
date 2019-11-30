let prevInput='0';
let calculationOperator='';
let currentInput='0';


const calculate=()=>{
	let result=0
	switch(calculationOperator)
	{
		case '+':
			result=prevInput+currentInput;
		break;
		case '-':
			result=prevInput-currentInput;
		break;
		case '*':
			result=prevInput*currentInput;
		break;
		case '/':
			result=prevInput/currentInput;
		break;
		default:
			return;
	}
	currentInput=result.toString();
	calculationOperator='';
}
const calculatorScreen=document.querySelector(".calculator-screen");

const updateScreen = (number)=>{
	calculatorScreen.value=number;
}
const inputNumber=(number)=>{
	if(currentInput==='0')
		currentInput=number;
	else
		currentInput+=number;
}
const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click" ,()=>{
	calculate();
	updateScreen(currentInput);
})
const inputOperator =(operator)=>{
	prevInput=currentInput;
	calculationOperator=operator;
	currentInput='0';
}


const operators=document.querySelectorAll(".operator");

operators.forEach((operator)=>{
	operator.addEventListener("click",(event)=>{
		inputOperator(event.target.value);
	})
});

const numbers=document.querySelectorAll(".number");
// console.log(numbers);

numbers.forEach((number)=>{
	number.addEventListener("click",(event)=>{
		inputNumber(event.target.value);
		updateScreen(currentInput);

		// console.log(event.target.value,"number is pressed");
	})
});



<div class="header-left">
          <p class="cpp"> Let Us C++ </p>
        </div>