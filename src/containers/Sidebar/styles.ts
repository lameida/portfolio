import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styled'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eeee;
  font-size: 10px;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
