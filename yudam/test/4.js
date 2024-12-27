import React from "react";
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

const PlayerProvider = ({ children }) => {
  return children;
};

const usePlayerContext = () => {};

const ControlBar = () => {
  const title = "test - song";
  return (
    <BottomBar>
      <BarSongTitle data-testid="barTitle">{title}</BarSongTitle>
      <div>
        <Button data-testid="previousButton">Previous</Button>
        <Button data-testid="nextButton">Next</Button>
        <Button data-testid="currentModeButton">{"replay mode"}</Button>
      </div>
    </BottomBar>
  );
};

const Songs = () => {
  return (
    <PlayList>
      {songList.map(({ title, author, id }) => (
        <Song key={id}>
          <SongTitle data-testid={id} active={false}>
            {title}
          </SongTitle>
          <p>{author}</p>
        </Song>
      ))}
    </PlayList>
  );
};

export { PlayerProvider, Songs, ControlBar };
