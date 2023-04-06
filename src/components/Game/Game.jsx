import { questions } from '../../helpers/questions';

export function Game({ question, onClickVariant, step, clicked, clickedId }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <h1 className="head-title">Тест на знание бурана</h1>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((item, index) => (
          <li
            style={index === clickedId ? clicked : null}
            key={index}
            onClick={() => {
              onClickVariant(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
