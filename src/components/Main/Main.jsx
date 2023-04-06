import { useState } from "react";
import { Quiz } from "../Quiz/Quiz";
export const Main = () => {
  const [start, setStart] = useState(false);

  return (
    <div className="cont">
      <h1 className="head-title">Тест на знание бурана</h1>
      {!start && (
        <button
          onClick={() => {
            setStart(true);
          }}
        >
          Start
        </button>
      )}
      {start && <Quiz />}
    </div>
  );
};