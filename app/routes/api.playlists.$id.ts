import { json } from '@remix-run/react';
import { getAllPlaylists } from '~/lib/playlists';

export async function loader() {
    const playlists = await getAllPlaylists();
    return json(playlists, 200);
}
