import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'relative flex items-center justify-center p-1 text-center rounded-xl border transition-all duration-150 select-none min-h-[60px] text-xs leading-tight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300';

  const stateClasses = square.isFreeSpace
    ? 'font-bold text-sm text-white bg-linear-to-br from-accent to-indigo-500 border-white/30 shadow-lg shadow-blue-600/40'
    : square.isMarked
      ? isWinning
        ? 'bg-amber-400/25 border-amber-300/70 text-amber-50 shadow-[0_0_18px_rgb(251_191_36/0.45)]'
        : 'bg-marked border-marked-border text-emerald-50'
      : 'bg-white/10 border-white/15 text-blue-50 hover:bg-white/15 active:bg-white/20';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className="wrap-break-word hyphens-auto">{square.text}</span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute top-0.5 right-1 text-emerald-300 text-xs">✓</span>
      )}
    </button>
  );
}
