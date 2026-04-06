import type { Dispatch, SetStateAction } from "react";

interface CellProps {
  id: number;
  go: string;
  setGo: Dispatch<SetStateAction<string>>;
  cells: string[];
  setCells: Dispatch<SetStateAction<string[]>>;
  cell: string;
  winningMessage: string;
}
const Cell = ({
  go,
  setGo,
  id,
  cells,
  setCells,
  cell,
  winningMessage,
}: CellProps) => {
  const handleCellChange = (cellToChange: string) => {
    if (winningMessage) {
      return;
    }
    const copyCells = [...cells];
    copyCells[id] = cellToChange;
    setCells(copyCells);
  };
  const handleClick = () => {
    const notTaken = !cells[id];
    if (notTaken) {
      if (go === "circle") {
        handleCellChange("circle");
        setGo("cross");
      } else if (go === "cross") {
        handleCellChange("cross");
        setGo("circle");
      }
    }
  };
  return (
    <>
      <div
        className="flex border-2 h-25 w-25 justify-center items-center text-6xl"
        onClick={handleClick}
      >
        <div
          className={`
                ${cell === "circle" ? "text-blue-500" : "text-red-500"} 
                ${cell ? "scale-110" : "scale-100"} 
                transition-all duration-200
                `}
        >
          {cell ? (cell === "circle" ? "O" : "x") : ""}
        </div>
      </div>
    </>
  );
};

export default Cell;
