export default class ScoreCalculator {
    constructor(elementAnswers) {
        this._elementAnswers = elementAnswers;
        this._cntQuestion = 0;
        this._result = {}

        this._handleClick = this._handleClick.bind(this);
    }

    counterResult(result) {
        let arrAnswers = {};
        arrAnswers = document.querySelectorAll('.element__answer');


        if (result === 0) {
            arrAnswers[this._cntQuestion].innerHTML = '&#10004;'; //через TextContext не съедает символы html
            arrAnswers[this._cntQuestion].classList.add('element__answer_right');
        } else {
            arrAnswers[this._cntQuestion].innerHTML = '&#10006;';
            arrAnswers[this._cntQuestion].classList.add('element__answer_wrong');
        }

        this._saveResult(result);
        this._currentQuestion();


        document.querySelector('.element__button').addEventListener('click', this._handleClick);

    }


    _handleClick() {
        console.log('а тут ошибочка, приятель');

        document.querySelector('.element__button').removeEventListener('click', this._handleClick);

    }




    _currentQuestion() {
        this._cntQuestion++
    }

    _saveResult(result) {
        if (result === 0) {
            this._result[this._cntQuestion] = 1;
        } else {
            this._result[this._cntQuestion] = 0;
        }
    }
}