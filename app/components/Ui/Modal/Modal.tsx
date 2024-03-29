import { ReactNode, useEffect, useState } from 'react'
import Flex from '../Flex/Flex'
import PackageModal from 'react-modal'

PackageModal.setAppElement('#layout')

interface IModal {
  isOpen: boolean
  onClose?: () => void
  children?: ReactNode
}

const Modal = ({ isOpen, children, onClose }: IModal) => {
  return (
    <Flex>
      <PackageModal
        isOpen={isOpen}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        preventScroll={true}
        onRequestClose={onClose}
      >
        <Flex height='100%' width='100%'>
          {children}
        </Flex>
      </PackageModal>
    </Flex>
  )
}

export default Modal
