import { DataProps, ParamsProps } from './App'

export function filterByTitle(filterData: DataProps[], params: ParamsProps) {
  return filterData.filter((item) => params['q'] === item.title)
}
export function filterByCompany(filterData: DataProps[], params: ParamsProps) {
  return filterData.filter((item) => item.companies.includes(params['co']))
}
export function filterByPosition(filterData: DataProps[], params: ParamsProps) {
  return filterData.filter((item) => item.positions.includes(params['pos']))
}
