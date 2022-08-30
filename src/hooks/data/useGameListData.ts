import { GameInformation, GameListSlugs } from "../../interfaces/Game";
import poles from "../../data/pole";
import useCarsData from "./useCarsData";
import { useTranslations } from "next-intl";

export const availableSlugs: GameListSlugs[] = ["car", "pole"];

const useGameListData = (): GameInformation[] => {
  const t = useTranslations("GameListCar");
  const cars = useCarsData();

  return [
    {
      name: t("goggleCarTitle"),
      description: t("googleCarDescription"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/google-car.jpg",
      slug: "car",
      data: cars,
    },
    {
      name: t("poleTitle"),
      description: t("poleDescription"),
      slug: "pole",
      data: poles,
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles.jpg",
    },
  ];
};

export default useGameListData;
