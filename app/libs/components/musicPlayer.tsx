import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { ReactJkMusicPlayerInstance } from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { useLocalStorage } from "react-use";

const Player = dynamic(() => import("react-jinke-music-player"), {
  ssr: false,
});

const audioList = [
  {
    name: "Rain Drop Flower (NES 8-bit Remix)",
    singer: "40Nix",
    cover: "/images/music1.png",
    musicSrc:
      "/music/[MapleStory] Ereve Field Theme _Rain Drop Flower_ (NES 8-bit Remix).mp3",
  },
  {
    name: "sasakure",
    singer: "sasakure.UK",
    cover: "/images/music2.jpg",
    musicSrc: "/music/sasakure.mp3",
  },
];

interface MusicPlayerProps {
  play: boolean;
}

export const MusicPlayer = (props: MusicPlayerProps) => {
  const { play } = props;
  const audioInstanceRef = useRef<ReactJkMusicPlayerInstance | null>(null);
  const [autoPlay, setAutoplay] = useLocalStorage("autoPlay", true);

  useEffect(() => {
    if (play && autoPlay) {
      audioInstanceRef.current?.play();
    }
  }, [autoPlay, play]);

  return (
    <Box right="20px" bottom="20px" position="absolute">
      <Player
        getAudioInstance={(instance) => {
          audioInstanceRef.current = instance;
        }}
        audioLists={audioList}
        theme="dark"
        locale="en_US"
        defaultPosition={{ bottom: 0, left: 0 }}
        preload
        mode="full"
        autoPlay
        toggleMode={false}
        showThemeSwitch={false}
        mobileMediaQuery="none"
        onAudioPause={() => setAutoplay(false)}
        onAudioPlay={() => setAutoplay(true)}
      />
    </Box>
  );
};
