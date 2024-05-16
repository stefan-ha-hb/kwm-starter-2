import { useSearchParams } from '@remix-run/react';
import Tabs from '~/components/tabs';

const tabs = [
  { id: 'song', title: 'Music' },
  { id: 'podcast', title: 'Podcasts' },
  { id: 'audiobooks', title: 'Audiobooks', disabled: true },
];

export default function Library() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTabId = searchParams.get('type') ?? tabs[0].id;

  const onTypeChange = (newType: string) => {
    setSearchParams((params) => {
      params.set('type', newType);
      return params;
    });
  };

  return (
    <>
      <h1>Library</h1>
      <p className="text-muted-foreground text-sm">Your Tracks. Your library.</p>

      <Tabs className="my-10" tabs={tabs} activeTabId={activeTabId} onValueChange={onTypeChange}></Tabs>
    </>
  );
}
