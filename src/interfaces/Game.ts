import { CountryType } from "../data/countries";

export interface GameData {
  city: CountryType;
  image: string;
  localization?: string;
  hint?: string;
}

export type GameListSlugs = "car" | "pole";

export interface GameInformation {
  name: string;
  description: string;
  slug: GameListSlugs;
  image: string;
  data: GameData[];
}

export interface GameQuestion extends GameData {
  cityResponse: CountryType | null;
  correct: boolean;
  revealed: boolean;
}
