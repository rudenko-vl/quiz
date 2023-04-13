import { questions } from "../../helpers/questions";

export function Game({ question, onClickVariant, step, clicked, clickedId }) {
  const percentage = Math.round((step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1 className="quest_title">{question.title}</h1>
      <ul>
        {question.variants.map((item, index) => (
          <li
            style={index === clickedId ? clicked : null}
            key={item.id}
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
