import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import "react-jinke-music-player/assets/index.css";

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

export const MusicPlayer = () => {
  return (
    <Box right="20px" bottom="20px" position="absolute">
      <Player
        audioLists={audioList}
        theme="dark"
        locale="en_US"
        defaultPosition={{ bottom: 0, left: 0 }}
        preload="auto"
        mode="full"
        autoPlay
        toggleMode={false}
        showThemeSwitch={false}
        mobileMediaQuery="none"
      />
    </Box>
  );
};
