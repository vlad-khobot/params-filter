import styled from 'styled-components'

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
`
const Line = styled.div`
  width: 100%;
  border: 2px solid black;
`

const Header = () => {
  return (
    <StyledHeader>
      <Line />
      <h1>questions</h1>
    </StyledHeader>
  )
}
export default Header
