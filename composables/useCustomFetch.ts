import type { CountriesData } from '../types'

export const useCustomFetch = async() => {
const config = useRuntimeConfig()

const { data } = await useFetch<CountriesData[]>(() => `${config.public.BASE_URL}/data.json`)
return data.value
}