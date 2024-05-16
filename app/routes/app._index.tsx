import { fetchPlaylists } from '~/apis/playlist-api';
import { useEffect, useState } from 'react';

export default function AppHome() {
  // This is only for demonstration purpose.
  // Do not coppy this code!
  const [data, setData] = useState<Array<unknown>>();
  useEffect(() => {
    const fetch = async () => {
      const playlists = await fetchPlaylists();
      setData(playlists);
      console.log(playlists);
    };

    fetch();
  }, []);

  return (
    <>
      <h1>Home</h1>
      <p className="text-muted-foreground text-sm">Your home. Your music.</p>

      <div className="mt-5">
        <code>{JSON.stringify(data, null, 2)}</code>
      </div>
    </>
  );
}
