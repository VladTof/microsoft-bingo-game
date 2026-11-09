interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full p-6">
      <div className="text-center max-w-sm w-full">
        <h1 className="text-5xl font-extrabold tracking-tight mb-2 bg-linear-to-r from-sky-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
          Bingo Mixer
        </h1>
        <p className="text-lg text-blue-100/80 mb-8">Find your people!</p>

        <div className="glass rounded-2xl p-6 mb-8">
          <h2 className="font-semibold text-white mb-3">How to play</h2>
          <ul className="text-left text-blue-100/85 text-sm space-y-2">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="w-full bg-linear-to-r from-accent to-accent-light text-white font-semibold py-4 px-8 rounded-2xl text-lg shadow-lg shadow-blue-600/40 transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}
