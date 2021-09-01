import styled from 'styled-components'

export const Title = styled.span`
  user-select: none;
  font-size: 20px;
  border: 1px solid #cccccc;
  padding: 10px 10px;
  margin: 0 5px;
  border-radius: 5px;
  transition: 0.2s;
  opacity: 1;
  &:hover {
    background-color: #8bc34a;
  }
  animation: fade 1.5s;
  @-webkit-keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const TitlesContainer = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
`
