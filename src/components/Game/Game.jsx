import { questions } from '../../helpers/questions';

export function Game({ question, onCliclVariant, step, backColor }) {
    const percentage = Math.round(step / questions.length * 100);
   const unCorretcStyle = {
        backgroundColor: "#ffea66",
    };
     const corretcStyle = {
        backgroundColor: "aqua",
        transform: "scale(1.07)",
    };
    return (
        <>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((item, index) => <li style={index === question.correct && backColor ? corretcStyle : unCorretcStyle} key={index} onClick={()=> {onCliclVariant(index)}}>{item}</li>)
                }
            </ul>
        </>
    );
}
