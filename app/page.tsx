'use client'

import { Box, Center, SimpleGrid, Image } from '@chakra-ui/react'
import { useMenuList } from './libs/store/menu'
import { Modal } from './libs/components/modal'

export default function Home() {
  const menulist = useMenuList((state) => state.menulist)

  return (
    <main>
      <SimpleGrid m='50px' w='300px' columns={2} gap='1'>
        {menulist.map((menu, i) => {
          return (
            <Box p='10px' onClick={menu.onClick} w='140px' key={i}>
              <Box p='15px'>{menu.icon}</Box>
              <Center p='4px 8px' fontSize='12px' fontWeight='bold' color='#fff' bg='#000' whiteSpace='nowrap'>
                {menu.label}
              </Center>
            </Box>
          )
        })}
      </SimpleGrid>

      <Image alt='logo' position='fixed' left='50%' top='50%' transform='translate(-50%, -50%)' p='40px' bg='#000' w='40%' h='40%' src='https://pizzalabs.art/assets/logo-f295d28e.gif' />

      <Modal label={menulist[0].label} isOpen={menulist[0].visible} close={menulist[0].onClick}>
        <Box overflow='hidden' w='full' h='full'>
          11
        </Box>
      </Modal>
    </main>
  )
}
