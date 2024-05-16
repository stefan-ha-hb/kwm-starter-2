import { storage } from './db';
import { prefixStorage } from 'unstorage';
import { v4 as uuidv4 } from 'uuid';
import { Playlist } from '~/models/playlist';

const playlistStorage = prefixStorage<Playlist[]>(storage, 'playlists');

export const getAllPlaylists = async () => {
  return (await playlistStorage.getItem('data')) ?? [];
};

export const getPlaylistById = async (playlistId: string) => {
  const playlists = await getAllPlaylists();
  return playlists.find((x) => x.id === playlistId);
};

export const createPlaylist = async (title: string) => {
  const playlists = await getAllPlaylists();
  const id = uuidv4();
  const date = new Date().toISOString();
  const newPlayList = { id, title, createdAt: date, tracks: [], imageUrl: `https://picsum.photos/id/${Math.floor(Math.random() * 200)}/240/240` };
  playlistStorage.setItem('data', [...playlists, newPlayList]);
  return newPlayList;
};

export const addTracksToPlaylist = async (playlistId: string, trackIds: string[]) => {
  const playlists = await getAllPlaylists();
  const playlistToUpdate = playlists.find((x) => x.id === playlistId);
  if (playlistToUpdate) {
    playlistToUpdate.tracks = trackIds;
    await playlistStorage.setItem('data', playlists);
  }
};
