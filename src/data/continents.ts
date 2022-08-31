export type SlugContinents =
  | "africa"
  | "america"
  | "asia"
  | "europe"
  | "oceania";

export interface Continent {
  label: string;
  slug: SlugContinents;
  countriesCode: string[];
}

const continents: Continent[] = [
  {
    label: "África",
    slug: "africa",
    countriesCode: [
      "AO",
      "BF",
      "BI",
      "BJ",
      "BW",
      "CD",
      "CF",
      "CG",
      "CI",
      "CM",
      "CV",
      "DJ",
      "DZ",
      "EH",
      "ER",
      "ET",
      "GA",
      "GH",
      "GM",
      "GN",
      "GQ",
      "GW",
      "KE",
      "KM",
      "LR",
      "LS",
      "LY",
      "MA",
      "MG",
      "ML",
      "MR",
      "MU",
      "MW",
      "MZ",
      "NA",
      "NE",
      "NG",
      "RE",
      "RW",
      "SC",
      "SD",
      "SH",
      "SL",
      "SN",
      "SO",
      "SS",
      "ST",
      "SZ",
      "TD",
      "TG",
      "TN",
      "TZ",
      "UG",
      "YT",
      "ZA",
      "ZM",
      "ZW",
    ],
  },
  {
    label: "América",
    slug: "america",
    countriesCode: [
      "AG",
      "AI",
      "AR",
      "AW",
      "BB",
      "BL",
      "BM",
      "BO",
      "BR",
      "BS",
      "BZ",
      "CA",
      "CL",
      "CO",
      "CR",
      "CU",
      "CW",
      "DM",
      "DO",
      "EC",
      "FK",
      "GD",
      "GF",
      "GL",
      "GP",
      "GT",
      "GY",
      "HN",
      "HT",
      "JM",
      "KN",
      "KY",
      "LC",
      "MF",
      "MQ",
      "MS",
      "MX",
      "NI",
      "PA",
      "PE",
      "PM",
      "PR",
      "PY",
      "SR",
      "SV",
      "SX",
      "TC",
      "TT",
      "US",
      "UY",
      "VC",
      "VE",
      "VG",
      "VI",
    ],
  },
  {
    label: "Ásia",
    slug: "asia",
    countriesCode: [
      "AE",
      "AF",
      "AM",
      "AZ",
      "BD",
      "BH",
      "BN",
      "BT",
      "CC",
      "CN",
      "CX",
      "DE",
      "EG",
      "GE",
      "HK",
      "ID",
      "IL",
      "IN",
      "IQ",
      "IR",
      "JO",
      "JP",
      "KG",
      "KH",
      "KP",
      "KR",
      "KW",
      "KZ",
      "LA",
      "LB",
      "LK",
      "MM",
      "MN",
      "MO",
      "MV",
      "MY",
      "NP",
      "OM",
      "PH",
      "PK",
      "QA",
      "RU",
      "SA",
      "SG",
      "SY",
      "TH",
      "TJ",
      "TL",
      "TM",
      "TR",
      "TW",
      "UZ",
      "VN",
      "YE",
    ],
  },
  {
    label: "Europa",
    slug: "europe",
    countriesCode: [
      "AD",
      "AL",
      "AT",
      "AZ",
      "BA",
      "BE",
      "BG",
      "BY",
      "CH",
      "CY",
      "CZ",
      "DK",
      "EE",
      "ES",
      "FI",
      "FO",
      "FR",
      "GB",
      "GE",
      "GG",
      "GI",
      "GR",
      "HR",
      "HU",
      "IE",
      "IM",
      "IS",
      "IT",
      "JE",
      "KZ",
      "LI",
      "LT",
      "LU",
      "LV",
      "MC",
      "MD",
      "ME",
      "MK",
      "MT",
      "NL",
      "NO",
      "PL",
      "PT",
      "RO",
      "RS",
      "RU",
      "SE",
      "SI",
      "SK",
      "SM",
      "TR",
      "UA",
      "VA",
      "XK",
    ],
  },
  {
    label: "Oceania",
    slug: "oceania",
    countriesCode: [
      "AS",
      "AU",
      "CK",
      "FJ",
      "FM",
      "GU",
      "KI",
      "MH",
      "MP",
      "NC",
      "NF",
      "NR",
      "NU",
      "NZ",
      "PF",
      "PG",
      "PN",
      "PW",
      "SB",
      "TO",
      "TV",
      "VU",
      "WF",
      "WS",
    ],
  },
];

export default continents;
