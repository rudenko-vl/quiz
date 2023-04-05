import { questions } from '../../helpers/questions';

export function Game({ question, onClickVariant, step, backColor }) {
    const percentage = Math.round(step / questions.length * 100);
   const unCorrectStyle = {
        backgroundColor: "#ffea66",
    };
     const correctStyle = {
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
                    question.variants.map((item, index) => <li style={index === question.correct && backColor ? correctStyle : unCorrectStyle} key={index} onClick={()=> {onClickVariant(index)}}>{item}</li>)
                }
            </ul>
        </>
    );
}
