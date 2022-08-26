import countries, { CountryType } from "./countries"

const getCountry = (code: string) => {
  return countries.find(country => country.code === code) as CountryType
}

export interface PoleType {
  city: CountryType
  image: string
  localization: string
  hint?: string
}

const poles: PoleType[] = [
  {
    "city": getCountry("BW"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_1.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=-23.0581497,26.853564"
  },
  {
    "city": getCountry("BW"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_2.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=-24.6712708,26.0187908"
  },
  {
    "city": getCountry("SZ"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_65.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=-26.4578801,31.0210743"
  },
  {
    "city": getCountry("MG"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_55.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=-23.354201,43.6704245"
  },
  {
    "city": getCountry("ML"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_108.jpg",
    "localization": "https://goo.gl/maps/r2ikPmaTJcjtghV3A"
  },
  {
    "city": getCountry("ML"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_109.jpg",
    "localization": "https://goo.gl/maps/FS9A4F3byCZLDM6p7"
  },
  {
    "city": getCountry("ML"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_110.jpg",
    "localization": "https://goo.gl/maps/722JE4qj9gtckuc49"
  },
  {
    "city": getCountry("NG"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_71.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=7.8572186,6.7596504"
  },
  {
    "city": getCountry("KH"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_3.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=12.3799693,103.2473147"
  },
  {
    "city": getCountry("KH"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_4.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=11.3364311,104.6341216"
  },
  {
    "city": getCountry("KH"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_5.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=13.2632096,104.106672"
  },
  {
    "city": getCountry("IN"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_117.jpg",
    "localization": "https://goo.gl/maps/2mDqToJJeny32E1n7"
  },
  {
    "city": getCountry("IN"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_118.jpg",
    "localization": "https://goo.gl/maps/6StDwgPBChz4qt1k7"
  },
  {
    "city": getCountry("IN"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_119.jpg",
    "localization": "https://goo.gl/maps/qF7CXCeWioFP2V1h6"
  },
  {
    "city": getCountry("IN"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_120.jpg",
    "localization": "https://goo.gl/maps/AwMszY8onQj3tbLY9"
  },
  {
    "city": getCountry("ID"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_73.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=-5.514266,119.9793935"
  },
  {
    "city": getCountry("IL"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_116.jpg",
    "localization": "https://goo.gl/maps/cdGNhFMDd6kLfWct7"
  },
  {
    "city": getCountry("JP"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_6.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=41.175665,141.3754729"
  },
  {
    "city": getCountry("JP"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_7.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=34.4132155,135.4590375"
  },
  {
    "city": getCountry("JP"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_8.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=34.5047468,133.4218466"
  },
  {
    "city": getCountry("JP"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_69.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=38.2777661,140.9003145"
  },
  {
    "city": getCountry("JP"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_76.jpg",
    "localization": "https://goo.gl/maps/UYaWZBhretL76MXJ8"
  },
  {
    "city": getCountry("MY"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_9.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=3.8830302,101.383796"
  },
  {
    "city": getCountry("KR"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_10.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=35.045312,127.7390424"
  },
  {
    "city": getCountry("SG"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_11.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=1.3808872,103.6976046"
  },
  {
    "city": getCountry("TW"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_12.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=24.7197779,121.0747847"
  },
  {
    "city": getCountry("TH"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_13.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=7.0122447,100.7374026"
  },
  {
    "city": getCountry("TH"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_104.jpg",
    "localization": "https://goo.gl/maps/etPx25kUhexRodVx5"
  },
  {
    "city": getCountry("BE"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_125.jpg",
    "localization": "https://goo.gl/maps/hYvEgGK4H7WppxMn6"
  },
  {
    "city": getCountry("EE"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_68.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=58.5746268,24.8822528"
  },
  {
    "city": getCountry("EE"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_77.jpg",
    "localization": "https://goo.gl/maps/Gv8yVkoB3GP4Vg4u8"
  },
  {
    "city": getCountry("EE"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_78.jpg",
    "localization": "https://goo.gl/maps/CyzkcSJY96Zc68nu5"
  },
  {
    "city": getCountry("EE"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_79.jpg",
    "localization": "https://goo.gl/maps/rrBWBz4Q8jcCfEYXA"
  },
  {
    "city": getCountry("EE"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_80.jpg",
    "localization": "https://goo.gl/maps/MkQfFBrDG7AP5RdW8"
  },
  {
    "city": getCountry("EE"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_81.jpg",
    "localization": "https://goo.gl/maps/SiyxW1LQQMiEYJGq6"
  },
  {
    "city": getCountry("EE"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_82.jpg",
    "localization": "https://goo.gl/maps/u8UpP6yZXE7M61SS7"
  },
  {
    "city": getCountry("EE"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_83.jpg",
    "localization": "https://goo.gl/maps/aeUZzcaP7For7kbS7"
  },
  {
    "city": getCountry("EE"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_84.jpg",
    "localization": "https://goo.gl/maps/PdHrYJuSfAZSAaxd6"
  },
  {
    "city": getCountry("EE"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_85.jpg",
    "localization": "https://goo.gl/maps/9oRmS4sya5QrYXSZ7"
  },
  {
    "city": getCountry("EE"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_87.jpg",
    "localization": "https://goo.gl/maps/7koVGCL6v78g2oJM6"
  },
  {
    "city": getCountry("EE"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_88.jpg",
    "localization": "https://goo.gl/maps/YFLBi7DLAR8pFEmE6"
  },
  {
    "city": getCountry("EE"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_86.jpg",
    "localization": "https://goo.gl/maps/YYnccGRPsMA7Z5kf8"
  },
  {
    "city": getCountry("FR"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_60.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=45.7908032,2.7081805"
  },
  {
    "city": getCountry("FR"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_114.jpg",
    "localization": "https://goo.gl/maps/GDq958E2nh3pZfcY9"
  },
  {
    "city": getCountry("HU"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_14.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=46.1956371,18.7167076"
  },
  {
    "city": getCountry("IE"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_15.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=53.6950533,-6.3295211"
  },
  {
    "city": getCountry("LV"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_67.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=57.20034,25.1176154"
  },
  {
    "city": getCountry("LV"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_89.jpg",
    "localization": "https://goo.gl/maps/dwhK8F7hgbQrTyT18"
  },
  {
    "city": getCountry("LV"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_90.jpg",
    "localization": "https://goo.gl/maps/8jj9mcdsYfv8XxrZ6"
  },
  {
    "city": getCountry("LV"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_91.jpg",
    "localization": "https://goo.gl/maps/7DLK37dFmhvdhCLU7"
  },
  {
    "city": getCountry("LV"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_92.jpg",
    "localization": "https://goo.gl/maps/fzV8Kgb62NDv9rz5A"
  },
  {
    "city": getCountry("LV"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_93.jpg",
    "localization": "https://goo.gl/maps/zqno9PrDDeHMr9cr9"
  },
  {
    "city": getCountry("LV"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_94.jpg",
    "localization": "https://goo.gl/maps/DvZT5fZhBst3ESsn7"
  },
  {
    "city": getCountry("LV"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_95.jpg",
    "localization": "https://goo.gl/maps/vN1rgDxYy1zRVUo37"
  },
  {
    "city": getCountry("LV"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_96.jpg",
    "localization": "https://goo.gl/maps/CTEg72PyqT4HCWrW6"
  },
  {
    "city": getCountry("LV"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_97.jpg",
    "localization": "https://goo.gl/maps/STSr9BAGCjqmvSHGA"
  },
  {
    "city": getCountry("LV"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_98.jpg",
    "localization": "https://goo.gl/maps/GUF47Pkrhu55s65n8"
  },
  {
    "city": getCountry("LT"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_66.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=54.9380477,24.59948"
  },
  {
    "city": getCountry("LT"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_99.jpg",
    "localization": "https://goo.gl/maps/Ddjz9HKWxSmxato16"
  },
  {
    "city": getCountry("LT"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_100.jpg",
    "localization": "https://goo.gl/maps/iABVrXuuND9GyM5t8"
  },
  {
    "city": getCountry("LT"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_101.jpg",
    "localization": "https://goo.gl/maps/2tfUzUzJjfJANtZy7"
  },
  {
    "city": getCountry("LT"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_102.jpg",
    "localization": "https://goo.gl/maps/uunZzhqR8EdB2UZc9"
  },
  {
    "city": getCountry("LT"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_103.jpg",
    "localization": "https://goo.gl/maps/6VzN1NhnBsXVj28QA"
  },
  {
    "city": getCountry("LT"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_74.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=55.6906598,23.5014188"
  },
  {
    "city": getCountry("LU"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_16.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=49.6947641,6.3814985"
  },
  {
    "city": getCountry("ME"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_17.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=42.4264652,19.3002378"
  },
  {
    "city": getCountry("NL"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_107.jpg",
    "localization": "https://goo.gl/maps/PiaZzT8tzocnB3zw7"
  },
  {
    "city": getCountry("NO"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_18.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=61.8919459,5.5310702"
  },
  {
    "city": getCountry("PL"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_19.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=51.6289028,20.4851325"
  },
  {
    "city": getCountry("PL"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_20.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=51.62892,20.4837787"
  },
  {
    "city": getCountry("PL"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_21.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=50.5719284,18.0722919"
  },
  {
    "city": getCountry("PL"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_121.jpg",
    "localization": "https://goo.gl/maps/zMAGyWe2ozf12QrC7"
  },
  {
    "city": getCountry("PL"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_122.jpg",
    "localization": "https://goo.gl/maps/jRRSCG9NiKsPNwD6A"
  },
  {
    "city": getCountry("PT"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_22.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=38.0870154,-7.9721118"
  },
  {
    "city": getCountry("PT"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_23.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=39.8381978,-7.8626629"
  },
  {
    "city": getCountry("RO"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_24.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=47.0636267,22.4059407"
  },
  {
    "city": getCountry("SK"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_25.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=47.8519051,17.8263796"
  },
  {
    "city": getCountry("SK"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_26.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=48.4125884,19.640284"
  },
  {
    "city": getCountry("ES"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_27.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=42.6571165,-5.0316744"
  },
  {
    "city": getCountry("SE"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_28.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=61.35898,16.0493379"
  },
  {
    "city": getCountry("SE"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_29.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=57.7993494,15.1628969"
  },
  {
    "city": getCountry("TR"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_115.jpg",
    "localization": "https://goo.gl/maps/N9S2V5Sf1Hb6mf4i9"
  },
  {
    "city": getCountry("GB"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_30.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=51.7556675,-1.6045062"
  },
  {
    "city": getCountry("CA"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_31.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=47.2338085,-67.154481"
  },
  {
    "city": getCountry("CA"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_41.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=45.2811033,-73.3617361"
  },
  {
    "city": getCountry("CA"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_42.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=45.2811276,-73.3595322"
  },
  {
    "city": getCountry("CA"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_43.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=51.5274748,-100.3931797"
  },
  {
    "city": getCountry("CA"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_44.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=44.1780384,-77.3888781"
  },
  {
    "city": getCountry("CA"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_45.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=44.1788016,-77.3891235"
  },
  {
    "city": getCountry("CA"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_46.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=49.504956,-55.4490051"
  },
  {
    "city": getCountry("CA"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_47.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=52.0541202,-107.9870143"
  },
  {
    "city": getCountry("CA"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_48.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=48.1819244,-69.6996105"
  },
  {
    "city": getCountry("CA"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_49.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=49.8430994,-108.9417654"
  },
  {
    "city": getCountry("CA"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_50.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=49.0620278,-58.3094432"
  },
  {
    "city": getCountry("CA"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_51.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=49.2056083,-120.997196"
  },
  {
    "city": getCountry("CA"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_52.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=47.3462338,-84.625865"
  },
  {
    "city": getCountry("CA"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_53.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=51.6474664,-120.0431226"
  },
  {
    "city": getCountry("CA"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_54.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=43.0688254,-79.9552534"
  },
  {
    "city": getCountry("CA"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_59.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=49.9653842,-110.5853072"
  },
  {
    "city": getCountry("CW"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_32.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=12.1450127,-68.9222317"
  },
  {
    "city": getCountry("DO"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_33.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=18.4687899,-69.8518128"
  },
  {
    "city": getCountry("DO"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_34.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=19.4614324,-70.6801908"
  },
  {
    "city": getCountry("GT"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_124.jpg",
    "localization": "https://goo.gl/maps/REoJeKSaDrjTfur98"
  },
  {
    "city": getCountry("GL"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_35.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=64.1796956,-51.7222968"
  },
  {
    "city": getCountry("MX"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_36.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=19.1755368,-98.9977384"
  },
  {
    "city": getCountry("PR"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_105.jpg",
    "localization": "https://goo.gl/maps/3aDRbmup55sNwtrK9"
  },
  {
    "city": getCountry("PR"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_106.jpg",
    "localization": "https://goo.gl/maps/vAz7PThnMUdAimKB6"
  },
  {
    "city": getCountry("AU"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_56.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=-34.9159445,139.2961651"
  },
  {
    "city": getCountry("AU"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_61.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=-12.4688038,130.9555574"
  },
  {
    "city": getCountry("AU"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_62.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=-41.2650766,146.4182924"
  },
  {
    "city": getCountry("AU"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_63.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=-27.9994489,152.9869186"
  },
  {
    "city": getCountry("AU"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_112.jpg",
    "localization": "https://goo.gl/maps/raMkJRtvPr4skeFu6"
  },
  {
    "city": getCountry("AU"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_113.jpg",
    "localization": "https://goo.gl/maps/yNh4AUt9aWU2csgg8"
  },
  {
    "city": getCountry("GU"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_58.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=13.5163792,144.8895844"
  },
  {
    "city": getCountry("NZ"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_37.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=-40.3220863,175.8779131"
  },
  {
    "city": getCountry("NZ"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_57.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=-37.8128412,175.4398179"
  },
  {
    "city": getCountry("AR"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_72.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=-35.2062298,-62.9971448"
  },
  {
    "city": getCountry("AR"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_111.jpg",
    "localization": "https://goo.gl/maps/8gGxDEKHqXK5M4ZM7"
  },
  {
    "city": getCountry("BR"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_38.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=-12.8933696,-38.4580707"
  },
  {
    "city": getCountry("CL"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_39.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=-29.5118785,-71.2020419"
  },
  {
    "city": getCountry("CO"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_64.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=4.6362631,-74.3539027"
  },
  {
    "city": getCountry("CO"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_70.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=8.438805,-76.7801427"
  },
  {
    "city": getCountry("CO"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_75.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=8.7467292,-75.4910947"
  },
  {
    "city": getCountry("EC"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_40.jpg",
    "localization": "https://maps.google.com/maps?q=&layer=c&cbll=-1.3467122,-80.5821687"
  },
  {
    "city": getCountry("PE"),
    "image": "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles/pole_123.jpg",
    "localization": "https://goo.gl/maps/Bkqgdm7T6y3Xxsmj9"
  }
]

export default poles;
