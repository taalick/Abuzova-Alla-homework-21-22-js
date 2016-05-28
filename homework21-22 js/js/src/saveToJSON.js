let answer1 = 'Вариант ответ № ';
let answer2 = 'Вариант ответ № 2';
let answer3 = 'Вариант ответ № 3';
const title = 'Тест по программированию';
const button = 'Проверить мои результаты';


let questionansver = [
	{ 
		question: 'Вопрос №1',
		answer1,
		answer2,
		answer3,
		trueAnswer: '0 0 1',
	},
	{ 
		question: 'Вопрос №2',
		answer1,
		answer2,
		answer3,
		trueAnswer: '0 1 0',
	},
	{ 
		question: 'Вопрос №3',
		answer1,
		answer2,
		answer3,
		trueAnswer: '1 0 0',
	},
	{ 
		question: 'Вопрос №4',
		answer1,
		answer2,
		answer3,
		trueAnswer: '0 0 1',
	},
];

let CONSTANTTITLE = {
	title,
	button,
};

let saveToLocStor = function(){
	localStorage.setItem('constantObj', JSON.stringify(CONSTANTTITLE));
	localStorage.setItem('questionansverObj', JSON.stringify(questionansver));
}




try{  
		module.exports = questionansver;
} catch(e){

}