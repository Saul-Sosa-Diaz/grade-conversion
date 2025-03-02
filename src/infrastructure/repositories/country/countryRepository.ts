/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 *
 * @file This file contains the implementation of the CountryRepository.
 * It defines functions to manage countries using an external API.
 *
 * @date February 19, 2025
 * @description This file implements the CountryRepository for managing countries.
 * @author Saul Sosa
 */

import { buildCountryListMap } from '@/application/country/getCountryList/mapGetCountryList'
import { buildCountryEvaluationMap } from '@/application/country/getCountryWithEvaluationInfoList/mapGetCountryWithEvaluationInfoList'
import { buildAPICountry } from '@/application/country/mapAPICountry'
import { API_URL } from '@/constants/apiURL'
import { CountryRepository } from '@/domain/country/countryRepository'

export function createCountryRepository(): CountryRepository {
  return {
    getCountryWithEvaluationInfoList: async () => {
      const { countries } = await fetch(API_URL.country.getCountryWithEvaluationInfoList, {
        method: 'get',
      })
        .then((response) => response.json())
        .catch((error) => {
          throw new Error(error)
        })
      const mappedCountriesWithEvaluationInfo = await buildCountryEvaluationMap(countries)
      return mappedCountriesWithEvaluationInfo
    },
    getCountryList: async () => {
      const { countries } = await fetch(API_URL.country.getCountryList, { method: 'get' })
        .then((response) => response.json())
        .catch((error) => {
          throw new Error(error)
        })

      const mappedCountryList = await buildCountryListMap(countries)
      return mappedCountryList
    },
    updateCountry: async (country) => {
      const mappedCountry = await buildAPICountry(country)
      const response = await fetch(API_URL.country.updateCountry, {
        method: 'put',
        body: JSON.stringify(mappedCountry),
      }).then((response) => response.json())
      if (!response.success) {
        throw new Error(response.error)
      }
    },
    createCountry: async (country) => {
      const mappedCountry = await buildAPICountry(country)
      const response = await fetch(API_URL.country.createCountry, {
        method: 'post',
        body: JSON.stringify(mappedCountry),
      }).then((response) => response.json())
      if (!response.success) {
        throw new Error(response.error)
      }
    },
    deleteCountry: async (country) => {
      const mappedCountry = await buildAPICountry(country)
      const response = await fetch(API_URL.country.deleteCountry, {
        method: 'delete',
        body: JSON.stringify(mappedCountry),
      }).then((response) => response.json())
      if (!response.success) {
        throw new Error(response.error)
      }
    },
  }
}
