import { Pause, Play } from 'lucide-react';
import { Track } from '~/models/track';

type TrackCardInput = {
  track: Track;
  isPlaying?: boolean;
  onPlayButtonClicked?: () => void;
};

export function TrackCard({ track, isPlaying = false, onPlayButtonClicked }: TrackCardInput) {
  return (
    <section className="card">
      <div className="card_cover">
        <img alt={'Cover image of ' + track.title} src={track.coverUrl} className="card_cover-img" />
      </div>

      <div className="card_body">
        <div className="flex-none">
          <PlayButton isPlaying={isPlaying} onClick={onPlayButtonClicked}></PlayButton>
        </div>
        <div className="flex-auto">
          <h3 className="card_title">{track.title}</h3>
          <div>{track.artist}</div>
        </div>
      </div>
    </section>
  );
}

type PlayButtonProps = { isPlaying: boolean; onClick?: () => void };
function PlayButton({ isPlaying = false, onClick }: PlayButtonProps) {
  return (
    <button type="button" className="icon-button" onClick={onClick}>
      {isPlaying ? <Pause strokeWidth={1.5} /> : <Play strokeWidth={1.5} />}
    </button>
  );
}
