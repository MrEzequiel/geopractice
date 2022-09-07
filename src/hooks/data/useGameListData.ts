import { GameInformation, GameListSlugs } from "../../interfaces/Game";
import poles from "../../data/pole";
import useCarsData from "./useCarsData";
import { useTranslations } from "next-intl";
import useArchitectureData from "./useArchitectureData";
import useBollardData from "./useBollardData";
import useSignPostsData from "./useSignPostsData";
import useStreetSignData from "./useStreetSignData";

export const availableSlugs: GameListSlugs[] = [
  "car",
  "pole",
  "architecture",
  "bollard",
  "sign-posts",
  "street-sign",
];

const useGameListData = (): GameInformation[] => {
  const t = useTranslations("GameList");
  const cars = useCarsData();
  const architectures = useArchitectureData();
  const bollards = useBollardData();
  const signPosts = useSignPostsData();
  const streetSignData = useStreetSignData();

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
    {
      name: t("bollardTitle"),
      description: t("bollardDescription"),
      slug: "bollard",
      data: bollards,
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/bollard/bollard-cover.jpg",
    },
    {
      name: t("signPostsTitle"),
      description: t("signPostsDescription"),
      slug: "sign-posts",
      data: signPosts,
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/post/posts-cover.jpg",
    },
    {
      name: t("streetSignTitle"),
      description: t("streetSignDescription"),
      slug: "street-sign",
      data: streetSignData,
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/street-sign/street-sign-cover.jpg",
    },
  ];
};

export default useGameListData;
