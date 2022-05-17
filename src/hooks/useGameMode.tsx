import { useEffect, useState } from "react";
import sound from "../assets/sounds/gaming.mp3";
import { useLocation } from "react-router-dom";

const useGameMode = () => {
  // for gaming mode
  const location = useLocation();
  const [gameMode, setGameMode] = useState(false);
  const [audio, setAudio] = useState(new Audio(sound));

  useEffect(() => {
    if (gameMode) {
      audio.play();
      const timer = setInterval(() => {
        setAudio(new Audio(sound));
        audio.play();
      }, 22000);

      return () => clearInterval(timer);
    } else {
      audio.remove();
    }
  }, [audio, gameMode]);

  useEffect(() => {
    if (
      !location.pathname.includes("gamer") &&
      !location.pathname.includes("sub-cat-games") &&
      !location.pathname.includes("category-games") &&
      !location.pathname.includes("search_games")
    ) {
      setGameMode(false);
      audio.pause();
    }
  }, [audio, location.pathname]);

  return setGameMode;
};

export default useGameMode;
