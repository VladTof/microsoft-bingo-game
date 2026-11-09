interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="glass rounded-3xl p-6 max-w-xs w-full text-center shadow-2xl motion-safe:animate-pop-in">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold text-amber-300 mb-2">BINGO!</h2>
        <p className="text-blue-100/85 mb-6">You completed a line!</p>

        <button
          onClick={onDismiss}
          className="w-full bg-linear-to-r from-accent to-accent-light text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-blue-600/40 transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
        >
          Keep Playing
        </button>
      </div>
    </div>
  );
}
