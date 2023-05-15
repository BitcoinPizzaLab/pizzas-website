"use client";

import { Box, Center, SimpleGrid, Image, Flex, Text } from "@chakra-ui/react";
import { useMenuList } from "./libs/store/menu";
import { Modal } from "./libs/components/modal";

export default function Home() {
  const menulist = useMenuList((state) => state.menulist);

  return (
    <main>
      <SimpleGrid m={["0", "50px"]} w={["100%", "300px"]} columns={2} gap="1">
        {menulist.map((menu, i) => {
          return (
            <Box
              key={i}
              m="auto"
              p={["0", "10px"]}
              onClick={menu.onClick}
              w={["110px", "140px"]}
              cursor="pointer"
              userSelect="none"
            >
              <Box p={["20px", "15px"]}>{menu.icon}</Box>
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

      <Image
        zIndex="-1"
        alt="logo"
        position="fixed"
        left="50%"
        bottom={["25%", "50%"]}
        transform="translate(-50%, 50%)"
        p="40px"
        bg="#000"
        w={["80%", "40%"]}
        maxW="400px"
        h="auto"
        src="https://pizzalabs.art/assets/logo-f295d28e.gif"
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
            src="https://pizzalabs.art/"
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
          w={["90vw", "50vw"]}
          h={["40vh", "50vh"]}
        ></Flex>
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
            Discord will coming soon.
          </Text>

          <Box alignSelf="center">
            <button onClick={menulist[3].onClick}>OK</button>
          </Box>
        </Flex>
      </Modal>

      <Modal
        label={menulist[5].label}
        isOpen={menulist[5].visible}
        close={menulist[5].onClick}
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
            <button onClick={menulist[5].onClick}>OK</button>
          </Box>
        </Flex>
      </Modal>
    </main>
  );
}
