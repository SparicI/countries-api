import type { CountriesData } from '../types'
export const useData = async (id:string | string[]) => {

    const data = await useCustomFetch()
    let country = reactive<CountriesData[]>([])
    country = data?.filter((item:CountriesData) => item.name === id)!

    return country[0]
}