import { useTranslations } from "next-intl";
import { GameData } from "../../interfaces/Game";
import getCountryByCode from "../../utils/getCountryByCode";

const useCarsData = (): GameData[] => {
  const t = useTranslations("CarDataHints");

  return [
    {
      city: getCountryByCode("BW"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car1.jpg",
      localization:
        "https://maps.google.com/maps?q=&layer=c&cbll=-22.4099968,21.7322219",
      hint: t("botswana"),
    },
    {
      city: getCountryByCode("GH"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car2.jpg",
      localization:
        "https://maps.google.com/maps?q=&layer=c&cbll=10.5690499,-0.8333561",
      hint: t("ghanaTape"),
    },
    {
      city: getCountryByCode("GH"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car3.jpg",
      localization: "https://goo.gl/maps/r44m9iuEiACNpc9d8",
      hint: t("ghanaShaiHills"),
    },
    {
      city: getCountryByCode("KE"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car4.jpg",
      localization:
        "https://maps.google.com/maps?q=&layer=c&cbll=1.1222853,37.5977533",
      hint: t("kenyaSnorkey"),
    },
    {
      city: getCountryByCode("NG"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car5.jpg",
      localization:
        "https://maps.google.com/maps?q=&layer=c&cbll=9.0180809,7.325311",
      hint: t("nigeriaCar"),
    },
    {
      city: getCountryByCode("SN"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car6.jpg",
      localization:
        "https://maps.google.com/maps?q=&layer=c&cbll=14.2419607,-16.2708324",
    },
    {
      city: getCountryByCode("ZA"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car7.jpg",
      localization:
        "https://maps.google.com/maps?q=&layer=c&cbll=-22.7783239,31.195407",
      hint: t("krugerParkSouthAfrica"),
    },
    {
      city: getCountryByCode("UG"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car8.jpg",
      localization:
        "https://maps.google.com/maps?q=&layer=c&cbll=0.3796795,32.7287236",
      hint: t("ugandaCar"),
    },
    {
      city: getCountryByCode("UG"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car34.jpg",
      localization: "https://goo.gl/maps/Gm9N284DNpCXWbjz6",
      hint: t("ugandaCarNationalPark"),
    },
    {
      city: getCountryByCode("BD"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car9.jpg",
      localization:
        "https://maps.google.com/maps?q=&layer=c&cbll=24.9014665,91.8694781",
    },
    {
      city: getCountryByCode("KG"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car10.jpg",
      localization:
        "https://maps.google.com/maps?q=&layer=c&cbll=40.544319,72.8965993",
    },
    {
      city: getCountryByCode("LA"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car11.jpg",
      localization:
        "https://maps.google.com/maps?q=&layer=c&cbll=19.8862248,102.1402474",
      hint: t("laosCar"),
    },
    {
      city: getCountryByCode("MN"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car12.jpg",
      localization:
        "https://maps.google.com/maps?q=&layer=c&cbll=45.7007432,106.100072",
    },
    {
      city: getCountryByCode("MN"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car13.jpg",
      localization:
        "https://maps.google.com/maps?q=&layer=c&cbll=47.7702901,107.2508454",
    },
    {
      city: getCountryByCode("LK"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car14.jpg",
      localization: "https://goo.gl/maps/9GWRMygRyE2FmbPu7",
      hint: t("sriLankaCar"),
    },
    {
      city: getCountryByCode("FO"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car15.jpg",
      localization:
        "https://maps.google.com/maps?q=&layer=c&cbll=61.823448,-6.7239479",
    },
    {
      city: getCountryByCode("IE"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car16.jpg",
      localization: "https://goo.gl/maps/CMSPTrpFH5UUz8Ex5",
    },
    {
      city: getCountryByCode("UA"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car17.jpg",
      localization:
        "https://maps.google.com/maps?q=&layer=c&cbll=49.046311,28.7152758",
      hint: t("ukraineCar"),
    },
    {
      city: getCountryByCode("BM"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car18.jpg",
      localization: "https://goo.gl/maps/xhaLyCpqXc9VYoCr7",
    },
    {
      city: getCountryByCode("CW"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car19.jpg",
      localization: "https://goo.gl/maps/2eEzs3gSD9iZDmX29",
    },
    {
      city: getCountryByCode("DO"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car20.jpg",
      localization:
        "https://maps.google.com/maps?q=&layer=c&cbll=18.4652826,-69.8192245",
    },
    {
      city: getCountryByCode("GL"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car21.jpg",
      localization:
        "https://maps.google.com/maps?q=&layer=c&cbll=64.1866474,-51.7033495",
    },
    {
      city: getCountryByCode("GT"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car22.jpg",
      localization:
        "https://maps.google.com/maps?q=&layer=c&cbll=14.6540018,-90.4281064",
    },
    {
      city: getCountryByCode("VI"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car23.jpg",
      localization:
        "https://maps.google.com/maps?q=&layer=c&cbll=18.3355983,-64.9066171",
      hint: t("USVirginIslandsCar"),
    },
    {
      city: getCountryByCode("AS"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car24.jpg",
      localization:
        "https://maps.google.com/maps?q=&layer=c&cbll=-14.2739146,-170.6640509",
      hint: t("americanSamoaCar"),
    },
    {
      city: getCountryByCode("AR"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car25.jpg",
      localization:
        "https://maps.google.com/maps?q=&layer=c&cbll=-32.561045,-62.8204195",
      hint: t("argentinaCar"),
    },
    {
      city: getCountryByCode("KE"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car26.jpg",
      localization: "https://goo.gl/maps/Xbthghig4UWGhc6m8",
      hint: t("kenyaSnorkey"),
    },
    {
      city: getCountryByCode("KE"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car27.jpg",
      localization: "https://goo.gl/maps/bgEAn1d4c5XErppu7",
      hint: t("kenyaChyuluHillsNationalParkCar"),
    },
    {
      city: getCountryByCode("KE"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car28.jpg",
      localization: "https://goo.gl/maps/STdUiwU7dphTXhx49",
      hint: t("kenyaLewaWildlifeConservancyCar"),
    },
    {
      city: getCountryByCode("BT"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car29.jpg",
      localization: "https://goo.gl/maps/8mYmhpga7MRpS3Gr6",
    },
    {
      city: getCountryByCode("VI"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car30.jpg",
      localization: "https://goo.gl/maps/hLFaVFWPN45XF9Wv9",
      hint: t("USVirginIslandsCar"),
    },
    {
      city: getCountryByCode("AS"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car31.jpg",
      localization: "https://goo.gl/maps/usstoSjN9mLpm6jS8",
      hint: t("manuSamoaCar"),
    },
    {
      city: getCountryByCode("RE"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car32.jpg",
      localization: "https://goo.gl/maps/D75bzm28XtafhEoc6",
      hint: t("reunionCar"),
    },
    {
      city: getCountryByCode("MG"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car33.jpg",
      localization: "https://goo.gl/maps/3YF6fpAaPB1beygi9",
    },
    {
      city: getCountryByCode("MG"),
      image:
        "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car35.jpg",
      localization: "https://goo.gl/maps/bpqofVnYj7YTdTZk6",
    },
  ];
};

export default useCarsData;
