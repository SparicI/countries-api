export type CountriesData = {
    name: string,
    nativeName: string,
    capital: string,
    continents: string,
    population: number,
    region: string,
    subregion: string,
    topLevelDomain: string,
    currencies: Record<string, unknown>[],
    flags: Record<string, string>,
    borders: string[],
    languages: Record<string, string>[]
}