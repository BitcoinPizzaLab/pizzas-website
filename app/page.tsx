"use client";

import {
  Box,
  Center,
  SimpleGrid,
  Image,
  Flex,
  Text,
  useToast,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useMenuList } from "./libs/store/menu";
import { Modal } from "./libs/components/modal";
import Link from "next/link";
import { MusicPlayer } from "./libs/components/musicPlayer";
import { useMemo, useState } from "react";
import { useMount } from "react-use";

export default function Home() {
  const menulist = useMenuList((state) => state.menulist);
  const walletInfo = useMenuList((state) => state.walletInfo);
  const toast = useToast();
  const [showPlayer, setShowPlayer] = useState(false);
  const variant = useBreakpointValue([
    {
      isDesktop: false,
    },
    {
      isDesktop: false,
    },
    {
      isDesktop: true,
    },
  ]);

  console.log(variant?.isDesktop);
  useMount(() => {
    if (typeof window === "undefined") return;

    window.addEventListener(
      "click",
      () => {
        setShowPlayer(true);
      },
      {
        once: true,
      }
    );
  });

  const menuListUpdate = useMemo(() => {
    if (variant?.isDesktop) {
      return menulist.slice(0, 6);
    }

    return menulist;
  }, [menulist, variant]);

  return (
    <main
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
    >
      <MusicPlayer play={showPlayer} />

      <SimpleGrid
        p={["0", "50px"]}
        w={["100%", "450px"]}
        columns={2}
        gap={["0", "1"]}
      >
        {menuListUpdate.map((menu, i) => {
          return (
            <Box
              key={i}
              m="auto"
              p={["0", "10px"]}
              onClick={async () => {
                if (!window.okexchain) {
                  toast({
                    position: "top-right",
                    title: "Error Message",
                    description:
                      "The OKX wallet was not detected in the current environment. Please go to https://www.okx.com/web3 to install it.",
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  });
                }
                try {
                  await menu.onClick();
                } catch (e) {
                  toast({
                    position: "top-right",
                    title: "Error Message",
                    description: (e as Error).message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                  });
                }
              }}
              w={["115px", "140px"]}
              cursor="pointer"
              userSelect="none"
            >
              <Box p={["10px 10px 0", "15px"]}>{menu.icon}</Box>
              <Center
                p="4px 8px"
                fontSize="12px"
                fontWeight="bold"
                color="#fff"
                bg="#000"
                whiteSpace="nowrap"
              >
                {menu.label}
              </Center>
            </Box>
          );
        })}
      </SimpleGrid>

      <Box
        hidden={!variant?.isDesktop}
        position="fixed"
        right="30px"
        top="0px"
        m="auto"
        p={["0", "10px"]}
        onClick={async () => {
          if (!window.okexchain) {
            toast({
              position: "top-right",
              title: "Error Message",
              description:
                "The OKX wallet was not detected in the current environment. Please go to https://www.okx.com/web3 to install it.",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
          try {
            await menulist[6].onClick();
          } catch (e) {
            toast({
              position: "top-right",
              title: "Error Message",
              description: (e as Error).message,
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }
        }}
        w={["115px", "140px"]}
        cursor="pointer"
        userSelect="none"
      >
        <Box p={["10px 10px 0", "15px"]}>{menulist[6].icon}</Box>
        <Center
          p="4px 8px"
          fontSize="12px"
          fontWeight="bold"
          color="#fff"
          bg="#000"
          whiteSpace="nowrap"
        >
          {menulist[6].label}
        </Center>
      </Box>

      <Image
        boxShadow="0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.06);"
        userSelect="none"
        draggable="false"
        border="5px solid #fff"
        zIndex="-1"
        alt="logo"
        position="fixed"
        right="0px"
        bottom="80px"
        // bottom={["100px", "50%"]}
        // transform={["translate(-50%, 0)", "translate(-50%, 50%)"]}
        bg="#000"
        w={["80%", "60%", "40%"]}
        maxW="800px"
        h="auto"
        src="/images/activity.gif"
        // src="https://pizzalabs.art/assets/logo-f295d28e.gif"
      />

      <Modal
        label={menulist[0].label}
        isOpen={menulist[0].visible}
        close={menulist[0].onClick}
      >
        <Box w={["100vw", "80vw"]} h={["calc(100vh - 30px)", "80vh"]}>
          <iframe
            scrolling="auto"
            frameBorder="0"
            width="100%"
            height="100%"
            src="https://inscribe.pizzalabs.art"
          />
        </Box>
      </Modal>

      <Modal
        label={menulist[1].label}
        isOpen={menulist[1].visible}
        close={menulist[1].onClick}
      >
        <Flex
          className="smokingBg"
          maxW="800px"
          maxH="800px"
          w={["90vw", "50vw"]}
          h={["40vh", "50vw"]}
        ></Flex>
      </Modal>

      <Modal
        label={menulist[2].label}
        isOpen={menulist[2].visible}
        close={menulist[2].onClick}
      >
        <Flex justifyContent="center" className="market" w={["90vw", "600px"]}>
          <SimpleGrid
            p={["20px", "40px"]}
            columns={[3, 4]}
            spacing={["20px", "40px"]}
          >
            <Link
              target="_blank"
              href="https://magiceden.io/ordinals/marketplace/bitcoin-pizzas"
            >
              <Image p="10px" w="full" alt="me" src="/icon/MElogo.png" />
              <Center
                mt="10px"
                p="4px 8px"
                fontSize="12px"
                fontWeight="bold"
                color="#fff"
                bg="#000"
                whiteSpace="nowrap"
              >
                Magic Eden
              </Center>
            </Link>

            <Link
              target="_blank"
              href="https://ordinalswallet.com/collection/bitcoin-pizzas"
            >
              <Image
                p="10px"
                w="full"
                alt="ordinalswallet"
                src="/icon/ordinalswallet.svg"
              />
              <Center
                mt="10px"
                p="4px 8px"
                fontSize="12px"
                fontWeight="bold"
                color="#fff"
                bg="#000"
                whiteSpace="nowrap"
              >
                OW
              </Center>
            </Link>
            <Link
              target="_blank"
              href="https://gamma.io/ordinals/collections/bitcoin-pizzas"
            >
              <Image
                p="10px"
                borderRadius="21px"
                alt="gamma"
                src="/icon/gama.jpg"
              />
              <Center
                mt="10px"
                p="4px 8px"
                fontSize="12px"
                fontWeight="bold"
                color="#fff"
                bg="#000"
                whiteSpace="nowrap"
              >
                gamma
              </Center>
            </Link>
            <Link
              target="_blank"
              href="https://ordswap.io/collections/bitcoin-pizzas"
            >
              <Image
                p="10px"
                w="full"
                borderRadius="21px"
                alt="me"
                src="/icon/ordswap.jpg"
              />
              <Center
                mt="10px"
                p="4px 8px"
                fontSize="12px"
                fontWeight="bold"
                color="#fff"
                bg="#000"
                whiteSpace="nowrap"
              >
                ordswap
              </Center>
            </Link>

            <Link
              target="_blank"
              href="https://magiceden.io/ordinals/marketplace/bitcoin-pizzas-pizzaday-2023"
            >
              <Image rounded="full" w="full" alt="me" src="/icon/1155.gif" />
              <Center
                mt="10px"
                p="4px 8px"
                fontSize="12px"
                fontWeight="bold"
                color="#fff"
                bg="#000"
                whiteSpace="nowrap"
              >
                Pizza1155
              </Center>
            </Link>

            <Link
              target="_blank"
              href="https://magiceden.io/ordinals/marketplace/pixelbirds-pizzaday-2023"
            >
              <Image
                rounded="full"
                w="full"
                alt="me"
                src="/icon/birdss1155.png"
              />
              <Center
                mt="10px"
                p="4px 8px"
                fontSize="12px"
                fontWeight="bold"
                color="#fff"
                bg="#000"
                whiteSpace="nowrap"
              >
                Birds1155
              </Center>
            </Link>

            <Link href="">
              <Image w="full" alt="me" src="/icon/marketComingSoon.png" />
              <Center
                mt="10px"
                p="4px 8px"
                fontSize="12px"
                fontWeight="bold"
                color="#fff"
                bg="#000"
                whiteSpace="nowrap"
              >
                Coming Soon
              </Center>
            </Link>
          </SimpleGrid>
        </Flex>
      </Modal>

      <Modal
        label={menulist[3].label}
        isOpen={menulist[3].visible}
        close={menulist[3].onClick}
      >
        <Flex
          gap="5"
          flexDirection="column"
          justifyContent="center"
          w={["90vw", "50vw"]}
          h={["120px"]}
        >
          <Text alignSelf="center" fontSize="20px">
            Pizza Diary will coming soon.
          </Text>

          <Box alignSelf="center">
            <button onClick={menulist[3].onClick}>OK</button>
          </Box>
        </Flex>
      </Modal>

      <Modal
        label={menulist[6].label}
        isOpen={menulist[6].visible}
        close={menulist[6].close}
      >
        <Flex
          flexDir="column"
          maxW="800px"
          maxH="800px"
          w={["90vw", "50vw"]}
          h={["40vh", "50vw"]}
          p="20px"
        >
          <Text>{walletInfo.chainName}</Text>
          <Text>Account: {walletInfo.name}</Text>
          <Text>Address: {walletInfo.address}</Text>
        </Flex>
      </Modal>
    </main>
  );
}
