import { FC } from 'react'
import { ChipsContainer, Chip, Button } from './styled'
interface ChipsListProps {
  items: {
    [k: string]: string
  }
  setParams: React.Dispatch<
    React.SetStateAction<{
      [k: string]: string
    }>
  >
}

const ChipsList: FC<ChipsListProps> = ({ items, setParams }) => {
  function filterItems(item: string) {
    const newParams = Object.keys(items)
      .filter((key) => item !== items[key])
      .reduce((obj, key) => {
        return {
          ...obj,
          [key]: items[key],
        }
      }, {})

    if (Object.keys(newParams).length) {
      window.location.search = `${new URLSearchParams(newParams)}`
    } else {
      window.location.replace('http://localhost:3000/')
    }
    setParams(newParams)
  }
  return (
    <ChipsContainer>
      {Object.getOwnPropertyNames(items).length > 0 ? (
        <>
          {Object.keys(items).map((key) => {
            return (
              <Chip disabled={false} onClick={() => filterItems(items[key])}>
                {items[key]}
              </Chip>
            )
          })}
          <Button
            onClick={() => window.location.replace('http://localhost:3000/')}
          >
            reset
          </Button>
        </>
      ) : (
        <Chip disabled={true}>No filters set</Chip>
      )}
    </ChipsContainer>
  )
}
export default ChipsList
