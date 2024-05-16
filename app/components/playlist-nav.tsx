import { Link } from '@remix-run/react';
import { ListMusic, ListPlus } from 'lucide-react';
import { dummyPlaylists } from '~/data/playlists';

export function PlaylistNav() {
  const playlist = dummyPlaylists; // TODO replace this with data from the server

  return (
    <div className="space-y-1">
      {playlist?.map((playlist) => (
        <Link key={playlist.id} className="sidebar_link" to={`/app/playlists/${playlist.id}`}>
          <ListMusic />
          {playlist.title}
        </Link>
      ))}

      <Link className="sidebar_link" to="/app/playlists/new">
        <ListPlus /> Create new playlist
      </Link>
    </div>
  );
}
