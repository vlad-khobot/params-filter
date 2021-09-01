import { FC } from 'react'
import { DataProps } from '../../App'
import { TitlesContainer, Title } from './styled'

interface TitlesListProps {
  titles: DataProps[]
}

const TitlesList: FC<TitlesListProps> = ({ titles }) => {
  return (
    <TitlesContainer>
      {titles.map((item) => (
        <Title>{item.title}</Title>
      ))}
    </TitlesContainer>
  )
}
export default TitlesList
