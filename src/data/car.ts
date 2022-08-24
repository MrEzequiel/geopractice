import countries, { CountryType } from "./countries"

const getCountry = (code: string) => {
  return countries.find(country => country.code === code) as CountryType
}

export interface CarType {
  city: CountryType
  image: string
  localization: string
}

const cars: CarType[] = [
  {
    city: getCountry("BW"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car1.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=-22.4099968,21.7322219"
  },
  {
    city: getCountry("GH"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car2.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=10.5690499,-0.8333561"
  },
  {
    city: getCountry("GH"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car3.jpg",
    localization: "https://goo.gl/maps/r44m9iuEiACNpc9d8"
  },
  {
    city: getCountry("KE"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car4.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=1.1222853,37.5977533"
  },
  {
    city: getCountry("NG"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car5.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=9.0180809,7.325311"
  },
  {
    city: getCountry("SN"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car6.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=14.2419607,-16.2708324"
  },
  {
    city: getCountry("ZA"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car7.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=-22.7783239,31.195407"
  },
  {
    city: getCountry("UG"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car8.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=0.3796795,32.7287236"
  },
  {
    city: getCountry("BD"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car9.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=24.9014665,91.8694781"
  },
  {
    city: getCountry("KG"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car10.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=40.544319,72.8965993"
  },
  {
    city: getCountry("LA"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car11.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=19.8862248,102.1402474"
  },
  {
    city: getCountry("MN"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car12.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=45.7007432,106.100072"
  },
  {
    city: getCountry("MN"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car13.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=47.7702901,107.2508454"
  },
  {
    city: getCountry("LK"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car14.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=8.7952762,80.119114"
  },
  {
    city: getCountry("FO"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car15.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=61.823448,-6.7239479"
  },
  {
    city: getCountry("IE"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car16.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=53.3765233,-6.2543704"
  },
  {
    city: getCountry("UA"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car17.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=49.046311,28.7152758"
  },
  {
    city: getCountry("BM"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car18.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=49.046311,28.7152758"
  },
  {
    city: getCountry("CW"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car19.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=12.1816696,-68.991764"
  },
  {
    city: getCountry("DO"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car20.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=18.4652826,-69.8192245"
  },
  {
    city: getCountry("GL"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car21.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=64.1866474,-51.7033495"
  },
  {
    city: getCountry("GT"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car22.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=14.6540018,-90.4281064"
  },
  {
    city: getCountry("VI"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car23.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=18.3355983,-64.9066171"
  },
  {
    city: getCountry("AS"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car24.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=-14.2739146,-170.6640509"
  },
  {
    city: getCountry("AR"),
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/car25.jpg",
    localization:
      "https://maps.google.com/maps?q=&layer=c&cbll=-32.561045,-62.8204195"
  }
]

export default cars
