import "../App.css";
import { ScoreContext } from "../contexts/scoreContext";
import { useContext } from "react";
import InfoBoard from "./InfoBoard";

const ScoreBoard = () => {
  const { score, plusScore, minusScore } = useContext(ScoreContext);

  return (
    <div className="scoreboard-box">
      <h1 className="heading"> Score board</h1>
      <p> Your current score is {score} </p>
      <button onClick={() => plusScore()}>Plus</button>
      <button onClick={() => minusScore()}>Minus</button>
      <InfoBoard />
    </div>
  );
};

export default ScoreBoard;
