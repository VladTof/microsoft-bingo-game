interface StartScreenProps {
  onStart: () => void;
}

const STEPS = [
  { icon: '🔍', title: 'Find a match', text: 'Talk to people who fit each question.' },
  { icon: '👆', title: 'Tap the square', text: 'Mark it once you connect.' },
  { icon: '🏆', title: 'Get 5 in a row', text: 'Across, down, or diagonal wins.' },
];

const PREVIEW_MARKED = new Set([1, 6, 8, 13, 17, 19, 22]);
const PREVIEW_FREE_SPACE = 12;

const motionStyle = (index: number) => ({
  animationDelay: `${index * 60}ms`,
  animationFillMode: 'both' as const,
});

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-full px-6 py-10">
      <div className="flex flex-col items-center text-center w-full max-w-md">
        <span className="glass rounded-full px-4 py-1 mb-6 text-xs font-medium tracking-widest uppercase text-sky-200">
          Social bingo for mixers
        </span>

        <h1 className="text-6xl font-extrabold tracking-tight leading-tight pb-1 bg-linear-to-r from-sky-300 via-blue-400 to-indigo-300 bg-clip-text text-transparent">
          Bingo Mixer
        </h1>
        <p className="mt-3 text-lg text-blue-100/85">Find your people!</p>

        <div className="mt-8 grid grid-cols-5 gap-1.5 w-full max-w-64" aria-hidden="true">
          {Array.from({ length: 25 }, (_, i) => {
            const isFree = i === PREVIEW_FREE_SPACE;
            const isMarked = PREVIEW_MARKED.has(i);
            const tone = isFree
              ? 'bg-linear-to-br from-accent to-indigo-500 border-white/30'
              : isMarked
                ? 'bg-marked border-marked-border'
                : 'bg-white/10 border-white/15';
            return (
              <div
                key={i}
                className={`aspect-square rounded-lg border motion-safe:animate-pop-in ${tone}`}
                style={motionStyle(i)}
              />
            );
          })}
        </div>

        <h2 className="sr-only">How to play</h2>
        <ol className="mt-8 w-full space-y-3 text-left">
          {STEPS.map((step, i) => (
            <li
              key={step.title}
              className="glass flex items-center gap-4 rounded-2xl p-4 motion-safe:animate-pop-in"
              style={motionStyle(25 + i)}
            >
              <span className="text-2xl" aria-hidden="true">
                {step.icon}
              </span>
              <div>
                <p className="font-semibold text-white">{step.title}</p>
                <p className="text-sm text-blue-100/80">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <button
          onClick={onStart}
          className="mt-8 w-full bg-linear-to-r from-accent to-accent-light text-white font-semibold py-4 px-8 rounded-2xl text-lg shadow-lg shadow-blue-600/40 transition-transform hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
        >
          Start Game
        </button>
        <p className="mt-3 text-xs text-blue-100/60">Your board is saved in this browser.</p>
      </div>
    </div>
  );
}
