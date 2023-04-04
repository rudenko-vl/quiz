import './Quiz.css';
// import { questions } from 'helpers/questions';

// function Result() {
//   return (
//     <div className="result">
//       <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='123'/>
//       <h2>Вы отгадали 3 ответа из 10</h2>
//       <button>Попробовать снова</button>
//     </div>
//   );
// }

function Game() {
    return (
        <>
            <div className="progress">
                <div style={{ width: '50%' }} className="progress__inner"></div>
            </div>
            <h1>Что такое useState?</h1>
            <ul>
                <li>Это функция для хранения данных компонента</li>
                <li>Это глобальный стейт</li>
                <li>Это когда ты никому не нужен</li>
            </ul>
        </>
    );
}

export function Quiz() {
    return (
        <div className='cont'>
            <div className="box">
                <Game />
                {/* <Result /> */}
            </div>
        </div>
    );
}

