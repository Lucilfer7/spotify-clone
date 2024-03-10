import { Play, Pause } from "./Player";
import { usePlayerStore } from "@/store/playerStore";

import { useEffect } from "react";

export function CardPlayButton({ id, size = "small" }) {
  const { currentMusic, isPlaying, setIsPlaying, setCurrentMusic } =
    usePlayerStore((state) => state);

  const isPlaylistPlaying = isPlaying && currentMusic?.playlist.id === id;
  
/*

useEffect(() => {
  const { song, playlist, songs } = currentMusic;
  if (song) {
    const src = `/music/${playlist?.id}/0${song?.id}.mp3`;
    audioRef.current.src = src;
    audioRef.current.volume = volume;
    audioRef.current.play();
  }
}, [currentMusic]);
*/

  const handleClick = () => {
    if (isPlaylistPlaying) {
      setIsPlaying(false);
      return;
    }

    fetch(`/api/get-info-playlist.json?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { songs, playlist } = data;
        setIsPlaying(true);
        setCurrentMusic({ songs, playlist, song: songs[0] });
        console.log({ songs, playlist });
      });
  };

  const iconClassName = size === "small" ? "w-4 h-4" : "w-5 h-5";

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-3 ring-0 hover:scale-105 transition hover:bg-green-400"
    >
      {isPlaylistPlaying ? (
        <Pause className={iconClassName} />
      ) : (
        <Play className={iconClassName} />
      )}
    </button>
  );
}
