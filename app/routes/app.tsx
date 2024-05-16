import { Sidebar } from '~/components/sidebar';
import { Outlet } from '@remix-run/react';

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
