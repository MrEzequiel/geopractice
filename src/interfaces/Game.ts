import { CountryType } from "../data/countries"

export interface GameData {
  city: CountryType
  image: string
  localization: string
  hint?: string
}

export interface GameInformation {
  name: string
  description: string
  slug: string
  image: string
  data: GameData[]
}

export interface GameQuestion extends GameData {
  cityResponse: CountryType | null
  correct: boolean
  revealed: boolean
}
