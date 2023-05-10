'use client'

import { Box } from '@chakra-ui/react'
import { useMenuList } from './store/menu'

export default function Home() {
  const menulist = useMenuList((state) => state.menulist)

  return (
    <main>
      <Box>
        {menulist.map((menu, i) => {
          return (
            <Box w='100px' key={i}>
              {menu.icon}
            </Box>
          )
        })}
      </Box>
    </main>
  )
}
