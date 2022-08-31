import continents, { SlugContinents } from "../data/continents";
import countries from "../data/countries";
import { GameData } from "../interfaces/Game";

const filterGameByContinent = (data: GameData[], continent: string[]) => {
  return data.filter((game) => continent.includes(game.city.code));
};

export const filterCountriesByContinent = (
  continentSlug: SlugContinents | "all"
) => {
  if (continentSlug === "all") {
    return countries;
  }

  const countryCodeByContinent = continents.find(
    (continent) => continent.slug === continentSlug
  )?.countriesCode as string[];

  return countries.filter((country) =>
    countryCodeByContinent.includes(country.code)
  );
};

export default filterGameByContinent;
