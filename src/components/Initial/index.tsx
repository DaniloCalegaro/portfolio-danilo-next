import { ContainerInitial } from './styles'

export function Initial() {
  return (
    <ContainerInitial>
      <div className="info">
        <span>Danilo Calegaro</span>
        <h1 className="title">Desenvolvedor Front End</h1>
        <p>
          Nos últimos 15 anos como designer de produto e a agora como
          desenvolvedor front-end
        </p>
        <div className="details">
          <p>
            <a>
              <strong>Ver Projetos</strong>
            </a>
            ou
            <a>
              <strong>Leia Sobre Mim</strong>
            </a>
          </p>
        </div>
      </div>

      <div className="imgProfile">
        {/* <img src="/images/bg_home.png" alt="foto Danilo" /> */}
      </div>

      <div className="backgroundDev">
        <strong>developer</strong>
      </div>
    </ContainerInitial>
  )
}
