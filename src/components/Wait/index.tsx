import { CSSProperties, useEffect } from 'react'
import { BounceLoader } from 'react-spinners'
import { Logo } from '../Logo'
import { ContainerWait } from './styles'

const override: CSSProperties = {
  margin: '0 auto'
}

export function Wait() {
  useEffect(() => {
    document.body.style.overflowY = 'hidden'

    const Wait = async (ms: number) => {
      await new Promise(resolve => setTimeout(resolve, 2000))
    }

    Wait(500)

    console.log('Waiting for')
  }, [])

  return (
    <ContainerWait>
      <div className="containerInfos">
        <Logo isBaseDark />
        <BounceLoader
          color={'#878a8f'}
          loading={true}
          cssOverride={override}
          size={150}
        />
        <div className="containerPageLoading">
          <span className="index">Bem vindo</span>
          <strong className="title">Espere um segundo</strong>
        </div>
      </div>
    </ContainerWait>
  )
}
