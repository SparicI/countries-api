export type CountriesData = {
    name: string,
    nativeName: string,
    capital: string,
    continents: string,
    flag: string,
    population: number,
    region: string,
    subregion: string,
    topLevelDomain: string,
    currencies: Record<string, unknown>[],
    borders: string[],
    languages: Record<string, string>[]
}