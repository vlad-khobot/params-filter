import styled from 'styled-components'

export const Chip = styled.div<{ disabled: boolean }>`
  user-select: none;
  border-radius: 5px;
  background-color: ${(props) => (props.disabled ? '#ef5350' : '#999999')};
  width: max-content;
  padding: 4px 6px;
  height: 25px;
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin: 0 5px;
  transition: 0.2s;
  &:hover {
    background-color: ${(props) => (props.disabled ? '#ef5350' : '#3f3f3f')};
  }
`
export const ChipsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Button = styled.button`
  height: 30px;
  width: 100px;
  padding: 4px 6px;
  border-radius: 5px;
  background-color: transparent;
  font-weight: bold;
  border: 1px solid #ef5350;
  color: #ef5350;
  -webkit-appearance: none;
  transition: 0.2s;
  font-size: 20px;
  &:hover {
    color: white;
    background-color: #ef5350;
    box-shadow: 2px 1px 2px 1px #ef5350;
  }
`
