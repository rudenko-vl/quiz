import '../Quiz/Quiz.css';
import { questions } from '../../helpers/questions';

export function Result({ correct }) {
  let text = "";
  if (correct === questions.length) {
    text = `Ебать ты молодец! ${correct} из ${questions.length}`;
  } else if (correct < 1) {
    text = `Ты чё, долбоеб? Ни одного правильного ответа))`;
  } else {
    text = `Вы отгадали ${correct} ответа из ${questions.length}`;
  }

  return (
    <div className="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="123"
      />
      <h2>{text}</h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}


