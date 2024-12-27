/*
<MusicPlayer /> Case 9 - No song should be chosen when pressing Next on the last song in ?Not replaying? mode
Case 10 - The same song should be chosen when pressing Previous on the first song in ?Not replaying? mode
 Case 16 - Clicking Next or Previous shouldn't do anything if there is no chosen song
*/
import React, { useState, useContext, createContext } from "react";
import {
  BarSongTitle,
  BottomBar,
  Button,
  PlayList,
  Song,
  SongTitle,
} from "./styles.js";
import { songList } from "./constants.js";

const buttonLabels = ["Not replaying", "Replaying all", "Replaying one"];

const PlayerContext = createContext();

const usePlayerContext = () => {
  const context = useContext(PlayerContext);

  // PlayerProvider로 감싸지 않은 경우 에러 발생
  if (!context) {
    throw new Error("usePlayerContext must be used within a PlayerProvider");
  }

  return context;
};

const PlayerProvider = ({ children }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);
  const [currentMode, setCurrentMode] = useState(0);

  const isLastSong = (index) => index === songList.length - 1;
  const isFirstSong = (index) => index === 0;

  const goToNextSong = () => {
    if (currentSongIndex === null || currentMode === 2) return;
    setCurrentSongIndex((prevIndex) => {
      if (currentMode === 0 && isLastSong(prevIndex)) return null;
      if (currentMode === 1 && isLastSong(prevIndex)) return 0;
      return prevIndex + 1;
    });
  };

  const goToPreviousSong = () => {
    if (currentSongIndex === null || currentMode === 2) return;
    setCurrentSongIndex((prevIndex) => {
      if (currentMode === 0 && isFirstSong(prevIndex)) return 0;
      if (currentMode === 1 && isFirstSong(prevIndex))
        return songList.length - 1;
      return prevIndex - 1;
    });
  };

  const changeMode = () => {
    setCurrentMode((prevMode) => (prevMode + 1) % 3);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentSongIndex,
        setCurrentSongIndex,
        currentMode,
        goToNextSong,
        goToPreviousSong,
        changeMode,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

const ControlBar = () => {
  const {
    currentSongIndex,
    currentMode,
    goToNextSong,
    goToPreviousSong,
    changeMode,
  } = usePlayerContext();

  return (
    <BottomBar>
      <BarSongTitle data-testid="barTitle">
        {songList[currentSongIndex] &&
          `${songList[currentSongIndex].author} - ${songList[currentSongIndex]?.title}`}
      </BarSongTitle>

      <div>
        <Button data-testid="previousButton" onClick={goToPreviousSong}>
          Previous
        </Button>
        <Button data-testid="nextButton" onClick={goToNextSong}>
          Next
        </Button>
        <Button data-testid="currentModeButton" onClick={changeMode}>
          {buttonLabels[currentMode]}
        </Button>
      </div>
    </BottomBar>
  );
};

const Songs = () => {
  const { currentSongIndex, setCurrentSongIndex } = usePlayerContext();

  return (
    <PlayList>
      {songList.map(({ title, author, id }, index) => (
        <Song key={id} onClick={() => setCurrentSongIndex(index)}>
          <SongTitle data-testid={id} active={index === currentSongIndex}>
            {title}
          </SongTitle>
          <p>{author}</p>
        </Song>
      ))}
    </PlayList>
  );
};

export { PlayerProvider, Songs, ControlBar };
