import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { Image } from "@chakra-ui/react";
import React from "react";
import okxWeb3 from "@okwallet/extension";

interface MenuListStore {
  menulist: {
    icon: React.ReactElement;
    visible: boolean;
    onClick: () => void;
    label: string;
    close?: () => void;
  }[];
  walletInfo: {
    chainName: string;
    address: string;
    name: string;
  };
}

export const useMenuList = create(
  immer<MenuListStore>((set) => ({
    menulist: [
      {
        icon: <Image p="8px" alt="Bitcoin Pizzas" w="full" src="/icon/1.png" />,
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
          <Image p="8px" alt="Bitcoin Pizzas" w="full" src="/icon/61.png" />
        ),
        label: "Bitcoin Believers",
        visible: false,
        onClick: () => {
          set((state) => {
            state.menulist[1].visible = !state.menulist[1].visible;
          });
        },
      },
      {
        icon: (
          <Image p="12px" alt="Bitcoin Pizzas" w="full" src="/icon/2.png" />
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
        icon: <Image p="8px" alt="Bitcoin Pizzas" w="full" src="/icon/5.png" />,
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
          <Image p="12px" alt="Bitcoin Pizzas" w="full" src="/icon/4.png" />
        ),
        label: "Twitter",
        visible: false,
        onClick: () => {
          window.open("https://twitter.com/pizzalabs_btc");
        },
      },
      {
        icon: (
          <Image p="12px" alt="Bitcoin Pizzas" w="full" src="/icon/3.png" />
        ),
        label: "Discord",
        visible: false,
        onClick: () => {
          set((state) => {
            state.menulist[5].visible = !state.menulist[5].visible;
          });
        },
      },
      {
        icon: (
          <Image p="12px" alt="Wallet" w="full" src="/icon/walletIcon.png" />
        ),
        label: "OKX Wallet",
        visible: false,
        onClick: async () => {
          const walletInfo = await okxWeb3.init();
          const bitcoinInfo = walletInfo.addresses["bitcoin"];

          set((state) => {
            state.walletInfo = {
              chainName: "Bitcoin",
              address: bitcoinInfo.address,
              name: walletInfo.accountName,
            };
            state.menulist[6].visible = !state.menulist[6].visible;
          });
        },
        close: () => {
          set((state) => {
            state.menulist[6].visible = !state.menulist[6].visible;
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
    walletInfo: {
      chainName: "",
      address: "",
      name: "",
    },
  }))
);
