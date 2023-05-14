import React, { useEffect, useRef, useState } from 'react'
import './modal.css'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

interface ModalProps {
  isOpen: boolean
  close?: () => void
  label: string
  children: React.ReactNode
}

export const Modal = (props: ModalProps) => {
  const {
    children,
    isOpen,
    label,
    close = () => {
      //
    },
  } = props
  const [dragAble, setDragAble] = useState(false)
  const dragElement = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    dragElement.current?.addEventListener('pointerdown', () => {
      setDragAble(true)
    })

    dragElement.current?.addEventListener('pointerup', () => {
      setDragAble(false)
    })
  }, [])

  return (
    <motion.div
      dragPropagation={false}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      drag={dragAble}
      dragMomentum={false}
      className='window'
      animate={{ opacity: isOpen ? 1 : 0, transitionDuration: '0.1s' }}
    >
      <Box ref={dragElement} className='title-bar'>
        <Box userSelect='none' className='title-bar-text'>
          {label}
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
