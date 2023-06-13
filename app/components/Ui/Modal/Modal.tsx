import { ReactNode } from 'react'
import Flex from '../Flex/Flex'
import PackageModal from 'react-modal'

PackageModal.setAppElement('#layout')

interface IModal {
  isOpen: boolean
  children?: ReactNode
}

const Modal = ({ isOpen, children }: IModal) => {
  return (
    <Flex>
      <PackageModal isOpen={isOpen}>
        <Flex justifyContent='center' alignItems='center'>
          {children}
        </Flex>
      </PackageModal>
    </Flex>
  )
}

export default Modal
