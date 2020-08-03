import Api from '../components/Api.js';
import Card from '../components/Card.js';
import Question from '../components/Question.js';
import ScoreCalculator from '../components/ScoreCalculator.js';

/*
const textTitle = document.querySelector('.element__title');
const textQuestion = document.querySelector('.element__question');
const options = document.querySelector('.element__options');
const option = document.querySelector('.element__option');
const nextButton = document.querySelector('.element__button');
const pictureQuestion = document.querySelector('.element__answer');
*/


const cntQuestions = 5;

const config = {
    url: `https://opentdb.com/api.php?amount=${cntQuestions}&category=11&difficulty=medium`,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
};


/*const api = new Api(config);
//перебераем объект полученный из ответа 
api.getRequest()
    .then((value) => {
        //const card = new Card(value.results, apiresult.results.length)
    })
*/

///этот результат получаем из промиса АПИ
const apiresult = [{ "category": "Entertainment: Film", "type": "multiple", "difficulty": "medium", "question": "This movie contains the quote, &quot;What we&#039;ve got here is a failure to communicate.&quot;", "correct_answer": "Cool Hand Luke", "incorrect_answers": ["Bonnie and Clyde", "The Graduate", "In the Heat of the Night"] }, { "category": "Entertainment: Film", "type": "multiple", "difficulty": "medium", "question": "What is the name of the first &quot;Star Wars&quot; film by release order?", "correct_answer": "A New Hope", "incorrect_answers": ["The Phantom Menace", "The Force Awakens", "Revenge of the Sith"] }, { "category": "Entertainment: Film", "type": "multiple", "difficulty": "medium", "question": "In the 1979 British film &quot;Quadrophenia&quot; what is the name of the main protagonist?", "correct_answer": "Jimmy Cooper", "incorrect_answers": ["Pete Townshend", "Franc Roddam", "Archie Bunker"] }, { "category": "Entertainment: Film", "type": "multiple", "difficulty": "medium", "question": "What city did the monster attack in the film, &quot;Cloverfield&quot;?", "correct_answer": "New York, New York", "incorrect_answers": ["Las Vegas, Nevada", "Chicago, Illinois", "Orlando, Florida"] }, { "category": "Entertainment: Film", "type": "multiple", "difficulty": "medium", "question": "Mark Wahlberg played the titular character of which 2008 video-game adaptation?", "correct_answer": "Max Payne", "incorrect_answers": ["Alan Wake", "Hitman", "God Of War"] }];


const scorecalculator = new ScoreCalculator('element__answers');


/*
const card = new Card(apiresult, apiresult.length, 'element-template')
card.generateCard(0);
*/

///форма добавления карточки ADD
const addQuestion = new Question({
    handleSubmit: (item, num) => {
        const card = new Card(item, item.length, 'element-template', {
                sendResult: (data) => {
                    scorecalculator.counterResult(data)
                }
            }) ///тут еще функция из ScoreCalculator для подсчета верных ответов ///функция для передачи данных
        card.generateCard(num);
    }
}, apiresult);

addQuestion.setEventListeners();
























/*
var myarray = [25, 8, "George", "John"]

myarray.sort(function() {
        return Math.random() - 0.5
    }) //Теперь элементы перемешаны

console.log(myarray);
*/