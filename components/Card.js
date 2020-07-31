export default class Card {
    constructor(questionObj, lengthQuestion, cardTemplate) {
        this._lengthQuestion = lengthQuestion;
        this._questionObj = questionObj;
        this._cardTemplate = document.getElementById(cardTemplate);

        this._hadleAnswerClick = this._hadleAnswerClick.bind(this);

    }

    _getTemplate() {
        const cardElement = this._cardTemplate.content.querySelector('.elements__element').cloneNode(true);
        return cardElement;
    }


    generateCard(numberQuestion) {
        this._element = this._getTemplate();

        this._correctAnswer = this._questionObj[numberQuestion].correct_answer;
        let answers = this._questionObj[numberQuestion].incorrect_answers;
        answers.push(this._correctAnswer);

        //Перемешиваем елементы
        answers.sort(function() {
            return Math.random() - 0.5
        })

        //создаем  пул вопросов
        this._element.querySelector('.element__title').textContent = `Вопрос ${numberQuestion + 1} из ${this._lengthQuestion}`;
        this._element.querySelector('.element__question').textContent = this._questionObj[numberQuestion].question;

        answers.forEach((value) => {
            let liAnswers = document.createElement('li');
            liAnswers.className = 'element__option';
            liAnswers.innerHTML = value;

            //запоминаем верный ответ
            if (this._correctAnswer === value) {
                this._correctElement = liAnswers;
            }
            this._element.querySelector('.element__options').append(liAnswers);
            ///клик по ответу
            liAnswers.addEventListener('click', (evt) => { //стрелочная фигня
                this._hadleAnswerClick(evt.target);
            });

        })

        this._setEventListeners();
        //return this._element;
        document.querySelector('.element').prepend(this._element);
    }

    //клик по ответам
    _hadleAnswerClick(elemTarget) {
        //проверка что ответ правильный
        if (elemTarget.textContent === this._correctAnswer) {
            elemTarget.classList.add('element__option_active_right');
        } else {
            elemTarget.classList.add('element__option_active_wrong');
            this._correctElement.classList.add('element__option_active_right');
        }

        this._element.querySelector('.element__button').removeAttribute('disabled', 'disabled');

        //не работает на стрелочной фигне 
        document.querySelector('.element__options').removeEventListener('click', this._hadleAnswerClick);
    }

    _handleCardClick() {
        console.log('Нажал на кнопку далее');
        //передать в класс ScoreCalculator
    }

    _setEventListeners() {
        //Клик далее
        this._element.querySelector('.element__button').addEventListener('click', () => {
            this._handleCardClick();
        });
    }





}