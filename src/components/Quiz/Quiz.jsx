import './Quiz.css';
import { useState } from "react";
import { Result } from "../Result/Result";
import { Game } from "../Game/Game";
import { questions } from '../../helpers/questions';


export function Quiz() {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [backColor, setBackColor] = useState(null);
    const question = questions[step];

    const onClickVariant = (index) => {
        setBackColor(index)
        setTimeout(()=> {setStep(step + 1)}, 500)
        if (index === question.correct) { 
      setCorrect(correct + 1)
    } 
    setTimeout(()=> {setBackColor(null)}, 400)
    };
   
    return (
        <div className='cont'>
            <div className="box">
                {step !== questions.length ? <Game backColor={backColor} step={step} question={question} onClickVariant={onClickVariant} /> : <Result correct={correct} />
                }
            </div>
        </div>
    );
};

