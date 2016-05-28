'use strict';

$(document).ready(function () {
	saveToLocStor();
	$('#calc').click(function () {

		var countTruAnsw = calculate();
		console.log(countTruAnsw);
		modalWindow(calculate());
		clean();
	});

	function calculate() {
		var countAnsw = 0;
		var strAnsw = '0';
		var strTrueAnsw = '0';
		var strAnswArray = void 0;
		var strTrueAnswArray = void 0;
		// пользовательские ответы 	

		$('.radioClass').each(function (i) {
			var check = $(this).prop("checked");
			if (check === true) {
				strAnsw += " " + "1";
			} else {
				strAnsw += " " + "0";
			};
		});
		console.log(strAnsw);

		// правильные ответы
		var test1 = localStorage.getItem('questionansverObj');
		test1 = JSON.parse(test1);

		console.log(test1);

		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = test1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var value = _step.value;

				strTrueAnsw += " " + value.trueAnswer;
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		console.log(strTrueAnsw);

		// подсчет правильных ответов
		strAnswArray = strAnsw.split(' ');
		strTrueAnswArray = strTrueAnsw.split(' ');
		for (var j = 0; j < strAnswArray.length; j++) {
			if (strAnswArray[j] === '1' && strAnswArray[j] === strTrueAnswArray[j]) {
				countAnsw += 1;
			}
		}
		console.log(countAnsw);
		return countAnsw;
	}

	function clean() {
		// обновление ответов
		$('.radioClass').each(function (i) {
			var check = $(this).prop("checked");
			if (check === true) {
				$(this).prop("checked", false);
			};
		});
	}

	function modalWindow(countTruAnsw) {

		console.log(123);
		var defaults = {
			overlayColor: 'rgba(0, 0, 0, 0.5)',
			font: 'Arial',
			fontSize1: '25px',
			fontSize2: '20px',
			lineHeight: '40px'

		};

		var $body = $('body');
		var $modal = void 0;
		var $overlay = void 0;
		var $close = void 0;

		$close = $('<div class="fancybox-modal"><diiv class="fancybox-close"></div></div>');
		$modal = $('<div class="fancybox-modal"><p style="font-size:' + defaults.fontSize1 + '; line-height:' + defaults.lineHeight + '">Результаты тестов</p><p style="font-size:' + defaults.fontSize2 + ';">Правильных ответов: ' + countTruAnsw + '</p></div>');

		$overlay = $('<div class="fancybox-overlay"></div>');
		$overlay.css({
			'background-color': defaults.overlayColor
		});

		$body.append($close);
		$body.append($overlay);
		$body.append($modal);
		$overlay.one('click', hideModal);
		$close.one('click', hideModal);

		function hideModal() {
			$modal.remove();
			$close.remove();
			$overlay.remove();
		}
	};
});
