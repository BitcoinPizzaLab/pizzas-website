"use client";

import React, { useEffect, useRef, useState } from "react";
import "./modal.css";
import { Box, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";

interface ModalProps {
  isOpen: boolean;
  close?: () => void;
  label: string;
  children: React.ReactNode;
}

const variants = {
  open: {
    opacity: 1,
    zIndex: 100,
  },
  closed: {
    opacity: 0,
    zIndex: -100,
  },
};

export const Modal = (props: ModalProps) => {
  const {
    children,
    isOpen = false,
    label,
    close = () => {
      //
    },
  } = props;
  const [dragAble, setDragAble] = useState(false);
  const dragElement = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    dragElement.current?.addEventListener("pointerdown", () => {
      setDragAble(true);
    });

    dragElement.current?.addEventListener("pointerup", () => {
      setDragAble(false);
    });
  }, []);

  if (typeof document === "undefined")
    return (
      <Flex
        position="absolute"
        left="50%"
        top="50%"
        w="0"
        h="0"
        transform="translate3d(-50%, -50%, 0)"
        overflow="visible"
        justifyContent="center"
        display={isOpen ? "flex" : "none"}
      >
        <motion.div
          dragPropagation={false}
          drag={dragAble}
          dragMomentum={false}
          className={`window self-center`}
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          <Box ref={dragElement} className="title-bar">
            <Box userSelect="none" className="title-bar-text">
              {label}
            </Box>
            <Box className="title-bar-controls">
              {/* <button aria-label="Minimize"></button>
      <button aria-label="Maximize"></button> */}
              <button onClick={close} aria-label="Close"></button>
            </Box>
          </Box>
          <Box>{children}</Box>
        </motion.div>
      </Flex>
    );

  return ReactDOM.createPortal(
    <Flex
      position="absolute"
      left="50%"
      top="50%"
      w="0"
      h="0"
      transform="translate3d(-50%, -50%, 0)"
      overflow="visible"
      justifyContent="center"
      display={isOpen ? "flex" : "none"}
    >
      <motion.div
        dragPropagation={false}
        drag={dragAble}
        dragMomentum={false}
        className={`window self-center`}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        <Box ref={dragElement} className="title-bar">
          <Box userSelect="none" className="title-bar-text">
            {label}
          </Box>
          <Box className="title-bar-controls">
            {/* <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button> */}
            <button onClick={close} aria-label="Close"></button>
          </Box>
        </Box>
        <Box>{children}</Box>
      </motion.div>
    </Flex>,
    document.body
  );
};
