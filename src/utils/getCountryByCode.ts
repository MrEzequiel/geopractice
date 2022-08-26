import countries, { CountryType } from "../data/countries"

const getCountryByCode = (code: string) => {
  return countries.find(country => country.code === code) as CountryType
}

export default getCountryByCode
