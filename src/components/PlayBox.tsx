import { useEffect, useState } from "react";
import Cell from "./Cell";

const PlayBox = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage] = useState("");

  useEffect(() => {
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ];
    winningCombos.forEach((combo) => {
      const circleWinning = combo.every((cell) => cells[cell] === "circle");
      const crossWinning = combo.every((cell) => cells[cell] === "cross");
      if (circleWinning) {
        setWinningMessage("Circle win");
      } else if (crossWinning) {
        setWinningMessage("Cross win");
      }
    });
  }, [cells]);

  const isAllFilled = cells.every((cell) => cell !== "");
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (isAllFilled && !winningMessage) setWinningMessage("Draw !");
  }, [cells, isAllFilled, winningMessage]);

  return (
    <>
      <div className="container flex flex-col h-screen justify-center items-center ">
        <div className="flex border-3 h-75 w-75 flex-wrap box-content">
          {cells.map((cell: string, index: number) => {
            return (
              <Cell
                id={index}
                key={index}
                go={go}
                setGo={setGo}
                cells={cells}
                setCells={setCells}
                cell={cell}
                winningMessage={winningMessage}
              />
            );
          })}
        </div>
        <br />
        {!winningMessage && (
          <p className="font-bold text-2xl">{`It's ${go} turn`}</p>
        )}
        <p className="font-bold text-2xl">{winningMessage}</p>
      </div>
    </>
  );
};

export default PlayBox;
