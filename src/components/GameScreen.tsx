import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="flex flex-col min-h-full">
      {/* Header */}
      <header className="glass flex items-center justify-between p-3 m-3 rounded-2xl">
        <button
          onClick={onReset}
          className="text-blue-100 text-sm px-3 py-1.5 rounded-lg hover:bg-white/10 active:bg-white/15 focus-visible:outline-2 focus-visible:outline-sky-300"
        >
          ← Back
        </button>
        <h1 className="font-bold text-white tracking-tight">Bingo Mixer</h1>
        <div className="w-16"></div>
      </header>

      {/* Instructions */}
      <p className="text-center text-blue-100/80 text-sm py-2 px-4">
        Tap a square when you find someone who matches it.
      </p>

      {/* Bingo indicator */}
      {hasBingo && (
        <div className="mx-3 mb-2 rounded-xl border border-bingo/40 bg-bingo/20 text-amber-100 text-center py-2 font-semibold text-sm">
          🎉 BINGO! You got a line!
        </div>
      )}

      {/* Board */}
      <div className="flex-1 flex items-center justify-center p-3">
        <div className="glass w-full max-w-md rounded-3xl p-3">
          <BingoBoard
            board={board}
            winningSquareIds={winningSquareIds}
            onSquareClick={onSquareClick}
          />
        </div>
      </div>
    </div>
  );
}
