import React from 'react'
import ReactModal from 'react-modal-resizable-draggable'
import './modal.css'
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

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    <ReactModal initWidth={800} initHeight={400} onFocus={() => console.log('Modal is clicked')} className={'my-modal-custom-class'} onRequestClose={close} isOpen={isOpen}>
      {children}
    </ReactModal>
  )
}
