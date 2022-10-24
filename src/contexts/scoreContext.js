import { createContext, useState } from "react";

export const ScoreContext = createContext();

export default function ScoreContextProvider({ children }) {
  const [score, setScore] = useState(0);

  const plusScore = () => {
    setScore(score + 10);
  };
  const minusScore = () => {
    setScore(score - 10);
  };

  return (
    <ScoreContext.Provider value={{ score, plusScore, minusScore }}>
      {children}
    </ScoreContext.Provider>
  );
}
