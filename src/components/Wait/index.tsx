import { CSSProperties, useEffect } from 'react'
import Modal from 'react-modal'
import { BounceLoader } from 'react-spinners'
import { Logo } from '../Logo'
import { ContainerWait, WraperContainer } from './styles'

const override: CSSProperties = {
  margin: '0 auto'
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    transition: '0.5s'
  },
  overlay: { zIndex: 1000 }
}

interface WaitModalProps {
  modalIsOpen: boolean
  setModalIsOpen: () => void
}

export function WaitModal({ modalIsOpen, setModalIsOpen }: WaitModalProps) {
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [modalIsOpen])

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={setModalIsOpen}
      style={customStyles}
      contentLabel="Example Modal"
      closeTimeoutMS={1000}
    >
      <ContainerWait>
        <WraperContainer>
          <Logo isBaseDark />
          <BounceLoader
            color={'#878a8f'}
            loading={true}
            cssOverride={override}
            size={150}
          />

          <strong className="title">Espere um segundo</strong>
        </WraperContainer>
      </ContainerWait>
    </Modal>
  )
}
