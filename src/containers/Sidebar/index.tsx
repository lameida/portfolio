import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Luciano Almeida</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        lameida
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-End
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
