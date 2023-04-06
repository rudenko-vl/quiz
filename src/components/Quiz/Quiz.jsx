import './Quiz.css';
import { useState } from "react";
import { Result } from "../Result/Result";
import { Game } from "../Game/Game";
import { questions } from '../../helpers/questions';


export function Quiz() {
  const unCorrectStyle = {
    backgroundColor: "pink"
  };
  const correctStyle = {
    backgroundColor: "aqua",
    transform: "scale(1.05)"
  };

  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [clicked, setClicked] = useState(null);
  const [clickedId, setClickedId] = useState(null);
  const question = questions[step];

  const onClickVariant = (index) => {
    setClickedId(index);
    setTimeout(() => {
      setStep(step + 1);
    }, 500);
    if (index === question.correct) {
      setCorrect(correct + 1);
      setClicked(correctStyle);
    } else {
      setClicked(unCorrectStyle);
    }
    setTimeout(() => {
      setClicked(null);
      setClickedId(null);
    }, 400);
  };

  return (
    <div className="cont">
      <div className="box">
        {step !== questions.length ? (
          <Game
            clicked={clicked}
            step={step}
            question={question}
            onClickVariant={onClickVariant}
            clickedId={clickedId}
          />
        ) : (
          <Result correct={correct} />
        )}
      </div>
    </div>
  );
}

