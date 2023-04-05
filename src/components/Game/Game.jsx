import { questions } from '../../helpers/questions';

export function Game({question, onCliclVariant, step}) {
    const percentage = Math.round(step / questions.length * 100);
    return (
        <>
            <div className="progress">
                <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
            </div>
            <h1>{question.title}</h1>
            <ul>
                {
                    question.variants.map((item, index) => <li key={index} onClick={()=> {onCliclVariant(index)}}>{item}</li>)
                }
            </ul>
        </>
    );
}
