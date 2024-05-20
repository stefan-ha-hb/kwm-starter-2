import { ClientActionFunctionArgs, Form, redirect, useNavigation } from '@remix-run/react';
import { createPlaylist } from '~/apis/playlist-api';

export async function clientAction({ request }: ClientActionFunctionArgs) {
  const formData = await request.formData();
  const title = formData.get('title');

  if (!title || typeof title !== 'string') {
    throw new Error('missing title');
  }

  await createPlaylist(title);

  return redirect('/app/playlists');
}

export default function CreatePlaylistPage() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  return (
    <div className="max-w-md">
      <h1 className="mb-6">Create a new playlist</h1>

      <Form className="flex gap-4 flex-col" method="post">
        <label className="flex gap-3 items-baseline">
          <div className="w-40">Playlist title:</div>

          <div className="flex-auto">
            <input aria-label="Playlist" name="title" type="text" required />
          </div>
        </label>

        <button className="ml-auto" type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    </div>
  );
}
