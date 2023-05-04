import React, { useState } from "react";
import "../Quiz/Quiz.css";
import { questions } from "../../helpers/questions";

export function Result({ correct }) {
  const [position, setPosition] = useState({ x: 170, y: 27 });
  const handleClick = () => {
    const container = document.getElementById("cont");
    const button = document.getElementById("randomButton");
    const containerRect = container.getBoundingClientRect();
    console.log(containerRect)
    const buttonRect = button.getBoundingClientRect();
    const x = Math.floor(
      Math.random() * (containerRect.width - 200 - buttonRect.width)
    );
    const y = Math.floor(
      Math.random() * (containerRect.height - 200 - buttonRect.height)
    );
    setPosition({ x, y });
  };

  const handlerNoBtn = () => {
    alert("Согласовано!");
    window.location.reload();
  };

  let text = "";
  if (correct === questions.length) {
    text = `Вот это ты молодец! ${correct} из ${questions.length}`;
  } else if (correct < 1) {
    text = `Ни одного правильного ответа 😂))`;
  } else {
    text = `Вы отгадали ${correct} ответа из ${questions.length}`;
  }

  return (
    <div className="result" id="result">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="123"
      />
      <h2>{text}</h2>
      <h2>
        По результатам теста, Ваша зарплата будет увеличена на{" "}
        {!correct ? "0" : correct + "0"}%
      </h2>
      <h2 style={{ marginBottom: "25px", color: "blue", fontWeight: "700" }}>
        Вы согласны?
      </h2>
      <div className="btnWrapper">
        <button
          className="btn"
          id="randomButton"
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
          onClick={handleClick}
          onMouseOver={handleClick}
        >
          Да
        </button>
        <button className="btn2" onClick={handlerNoBtn}>
          Нет
        </button>
      </div>
      <a href="/">
        <button style={{ marginTop: "30px" }}>Попробовать снова</button>
      </a>
    </div>
  );
}
