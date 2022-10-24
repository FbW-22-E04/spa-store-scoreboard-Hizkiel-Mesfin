import { ScoreContext } from "../contexts/scoreContext";
import { useContext } from "react";

const InfoBoard = () => {
  const { score } = useContext(ScoreContext);

  return (
    <>
      <h3> {score < 100 ? "Let's make it over 100!" : "Good job"} </h3>
    </>
  );
};

export default InfoBoard;
