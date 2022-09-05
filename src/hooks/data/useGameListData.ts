import { GameInformation, GameListSlugs } from "../../interfaces/Game";
import poles from "../../data/pole";
import useCarsData from "./useCarsData";
import { useTranslations } from "next-intl";
import useArchitectureData from "./useArchitectureData";

export const availableSlugs: GameListSlugs[] = ["car", "pole", "architecture"];

const useGameListData = (): GameInformation[] => {
  const t = useTranslations("GameList");
  const cars = useCarsData();
  const architectures = useArchitectureData();

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
    {
      name: t("architectureTitle"),
      description: t("architectureDescription"),
      slug: "architecture",
      data: architectures,
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/architecture/architecture-cover.jpg",
    },
  ];
};

export default useGameListData;
