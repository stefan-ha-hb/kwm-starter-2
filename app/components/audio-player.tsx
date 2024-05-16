import { ChevronFirst, ChevronLast, Pause, Play } from 'lucide-react';

export function AudioPlayer() {
  const showPlayer = true;
  const isCurrentlyPlaying = false;

  return (
    <section className={`audio-player ${showPlayer ? 'is-shown' : ''}`}>
      <div className="mx-auto max-w-4xl w-full">
        <div className="flex gap-3 items-center">
          <button type="button" aria-label="Previous" title="Previous">
            <ChevronFirst />
          </button>
          <button type="button">{isCurrentlyPlaying ? <Pause /> : <Play />}</button>
          <button type="button" aria-label="next" title="Next">
            <ChevronLast />
          </button>

          <div className="flex-auto">
            <input aria-label="Track position" type="range" className="w-full my-auto block" defaultValue={0} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AudioPlayer;
