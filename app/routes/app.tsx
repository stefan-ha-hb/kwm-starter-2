import { Sidebar } from '~/components/sidebar';
import { Outlet } from '@remix-run/react';
// import { fetchPlaylists } from '~/apis/playlist-api';

// export async function clientLoader() {
//   const playlists = await fetchPlaylists();

//   return { playlists };
// }

export default function AppLayout() {
  return (
    <div className="app-layout">
      <Sidebar></Sidebar>

      <div className="app-layout_content">
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
}
