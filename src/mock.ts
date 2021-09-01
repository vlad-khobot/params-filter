import { DataProps } from './App'
import { dummyData } from './dummyData'

export class GetDataService {
  static getData = () => {
    return new Promise<DataProps[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(dummyData)
      }, 1000)
    })
  }
}
