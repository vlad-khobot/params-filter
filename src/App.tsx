import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import ChipsList from './components/ChipsList'
import Header from './components/Header'
import Loader from './components/Loader'
import TitlesList from './components/TitlesList'
import { GetDataService } from './mock'
import { filterByCompany, filterByPosition, filterByTitle } from './utils'
const urlSearchParams = new URLSearchParams(window.location.search)

export interface DataProps {
  title: string
  tags: string[]
  companies: string[]
  positions: string[]
}
export interface ParamsProps {
  [k: string]: string
}
const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const HelpLink = styled.a`
  margin: 2px 0;
  color: red;
  font-family: helvetica;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    text-decoration: underline;
  }

  /* selected link */
  &:active {
    color: black;
  }
`
function App() {
  const [showLoader, setShowLoader] = useState(false)
  const [params, setParams] = useState(
    Object.fromEntries(urlSearchParams.entries())
  )
  const [data, setData] = useState<DataProps[]>([])

  const filterTitles = useCallback(
    (data: DataProps[]) => {
      let filterData = data
      if (params['q']) filterData = filterByTitle(filterData, params)
      if (params['co']) filterData = filterByCompany(filterData, params)
      if (params['pos']) filterData = filterByPosition(filterData, params)
      setData(filterData)
    },
    [params]
  )

  const getData = useCallback(async () => {
    setShowLoader(true)
    const response = await GetDataService.getData()
    setData(response)
    filterTitles(response)
    setShowLoader(false)
  }, [filterTitles])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <AppContainer>
      <Header />
      <ChipsList items={params} setParams={setParams} />
      {showLoader ? <Loader /> : <TitlesList titles={data} />}
      <HelpLink href='http://localhost:3000/'>Go to home page</HelpLink>
      <HelpLink href='http://localhost:3000/?q=foo&co=facebook'>
        1 test link
      </HelpLink>
      <HelpLink href='http://localhost:3000/?q=foo&pos=software+engineer'>
        2 test link
      </HelpLink>
      <HelpLink href='http://localhost:3000/?q=foo&&co=facebook&pos=software+engineer'>
        3 test link
      </HelpLink>
    </AppContainer>
  )
}

export default App
