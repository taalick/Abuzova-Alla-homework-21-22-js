'use strict';

var answer1 = 'Вариант ответ № ';
var answer2 = 'Вариант ответ № 2';
var answer3 = 'Вариант ответ № 3';
var title = 'Тест по программированию';
var button = 'Проверить мои результаты';

var questionansver = [{
	question: 'Вопрос №1',
	answer1: answer1,
	answer2: answer2,
	answer3: answer3,
	trueAnswer: '0 0 1'
}, {
	question: 'Вопрос №2',
	answer1: answer1,
	answer2: answer2,
	answer3: answer3,
	trueAnswer: '0 1 0'
}, {
	question: 'Вопрос №3',
	answer1: answer1,
	answer2: answer2,
	answer3: answer3,
	trueAnswer: '1 0 0'
}, {
	question: 'Вопрос №4',
	answer1: answer1,
	answer2: answer2,
	answer3: answer3,
	trueAnswer: '0 0 1'
}];

var CONSTANTTITLE = {
	title: title,
	button: button
};

var saveToLocStor = function saveToLocStor() {
	localStorage.setItem('constantObj', JSON.stringify(CONSTANTTITLE));
	localStorage.setItem('questionansverObj', JSON.stringify(questionansver));
};

try {
	module.exports = questionansver;
} catch (e) {}
