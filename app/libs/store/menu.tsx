import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Image } from "@chakra-ui/react";
import React from "react";

interface MenuListStore {
  menulist: {
    icon: React.ReactElement;
    visible: boolean;
    onClick: () => void;
    label: string;
  }[];
}

export const useMenuList = create(
  immer<MenuListStore>((set) => ({
    menulist: [
      {
        icon: (
          <Image
            p="8px"
            alt="Bitcoin Pizzas"
            w="full"
            src="/icon/icons8-pizza.png"
          />
        ),
        label: "Bitcoin Pizzas",
        visible: false,
        onClick: () => {
          set((state) => {
            state.menulist[0].visible = !state.menulist[0].visible;
          });
        },
      },
      {
        icon: (
          <Image
            p="5px"
            alt="Bitcoin Pizzas"
            w="full"
            src="/icon/believers.png"
          />
        ),
        label: "Pizza Believers",
        visible: false,
        onClick: () => {
          set((state) => {
            state.menulist[1].visible = !state.menulist[1].visible;
          });
        },
      },
      {
        icon: (
          <Image p="7px" alt="Bitcoin Pizzas" w="full" src="/icon/market.png" />
        ),
        label: "Market",
        visible: false,
        onClick: () => {
          set((state) => {
            state.menulist[2].visible = !state.menulist[2].visible;
          });
        },
      },
      {
        icon: (
          <Image p="5px" alt="Bitcoin Pizzas" w="full" src="/icon/diary.png" />
        ),
        label: "Pizza Diary",
        visible: false,
        onClick: () => {
          set((state) => {
            state.menulist[3].visible = !state.menulist[3].visible;
          });
        },
      },
      {
        icon: (
          <Image
            p="6px"
            alt="Bitcoin Pizzas"
            w="full"
            src="/icon/twitter.svg"
          />
        ),
        label: "Twitter",
        visible: false,
        onClick: () => {
          window.open("https://twitter.com/pizzalabs_btc");
        },
      },
      {
        icon: (
          <Image
            p="6px"
            alt="Bitcoin Pizzas"
            w="full"
            src="/icon/discord.svg"
          />
        ),
        label: "Discord",
        visible: false,
        onClick: () => {
          set((state) => {
            state.menulist[5].visible = !state.menulist[5].visible;
          });
        },
      },
      // {
      //   icon: (
      //     <Image p="5px" alt="Bitcoin Pizzas" w="full" src="/icon/log.png" />
      //   ),
      //   label: "Pizza Log",
      //   visible: false,
      //   onClick: () => {
      //     set((state) => {
      //       state.menulist[4].visible = !state.menulist[4].visible;
      //     });
      //   },
      // },
    ],
  }))
);
