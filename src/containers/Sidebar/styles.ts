import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styled'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.corPrincipal};
  cursor: pointer;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 110px;
    margin-bottom: 16px;
  }
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768 px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
