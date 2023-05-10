'use client'

import { Box } from '@chakra-ui/react'
import { useMenuList } from './libs/store/menu'
import { Modal } from './libs/components/modal'

export default function Home() {
  const menulist = useMenuList((state) => state.menulist)

  return (
    <main>
      <Box>
        {menulist.map((menu, i) => {
          return (
            <Box onClick={menu.onClick} w='100px' key={i}>
              {menu.icon}
            </Box>
          )
        })}
      </Box>

      <Modal isOpen={menulist[0].visible} close={menulist[0].onClick}>
        <Box overflow='hidden' w='full' h='full'>
          11
        </Box>
      </Modal>
    </main>
  )
}
