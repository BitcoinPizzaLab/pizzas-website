import React, { useRef, useState } from 'react'
import './modal.css'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useMount } from 'react-use'

interface ModalProps {
  isOpen: boolean
  close?: () => void
  children: React.ReactNode
}

export const Modal = (props: ModalProps) => {
  const {
    children,
    isOpen,
    close = () => {
      //
    },
  } = props
  const [dragAble, setDragAble] = useState(false)
  const dragElement = useRef<HTMLDivElement | null>(null)

  useMount(() => {
    dragElement.current?.addEventListener('pointerdown', () => {
      setDragAble(true)
    })

    dragElement.current?.addEventListener('pointerup', () => {
      setDragAble(false)
    })
  })

  if (!isOpen) return null

  return (
    <motion.div dragPropagation={false} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} drag={dragAble} dragMomentum={false} className='window' animate={{ opacity: isOpen ? 1 : 0 }}>
      <Box ref={dragElement} className='title-bar'>
        <Box userSelect='none' className='title-bar-text'>
          A Window With Stuff In It
        </Box>
        <Box className='title-bar-controls'>
          <button aria-label='Minimize'></button>
          <button aria-label='Maximize'></button>
          <button onClick={close} aria-label='Close'></button>
        </Box>
      </Box>
      <Box className='window-body'>{children}</Box>
    </motion.div>
  )
}
