import { COUNTRIES } from '../../fixture/countries'
import { CountriesRepository } from '@/domain/country/countryRepository'

export function createCountryRepositoryFake(): CountriesRepository {
  return {
    getCountries: async () => COUNTRIES,
  }
}
