export default class Question {
    constructor({ handleSubmit }, apiresult) {
        this._handleSubmit = handleSubmit;
        this._apiresult = apiresult;
    }


    ///где то тут получаем данные из АПИ



    setEventListeners() {
        document.querySelector('.element__button').addEventListener('click', (evt) => {
            document.querySelector('.elements__element').remove();
            document.querySelector('.element__answers').classList.remove('element__answers_hide');
            this._handleSubmit(this._apiresult, 0)

        })
    }




    //слушатель на кнопку которая запускает тест с готовым объектом 

    //









}