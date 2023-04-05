import './Quiz.css';
import { useState } from "react";
import { Result } from "../Result/Result";
import { Game } from "../Game/Game";
import { questions } from '../../helpers/questions';
export function Quiz() {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const question = questions[step];
    const onCliclVariant = (index) => {
        setStep(step + 1)
        if (index === question.correct) { 
      setCorrect(correct + 1)
    }
    };
   
    return (
        <div className='cont'>
            <div className="box">
                {step !== questions.length ? <Game step={step} question={question} onCliclVariant={onCliclVariant} /> : <Result correct={correct} />
                }
            </div>
        </div>
    );
};

