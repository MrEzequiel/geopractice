import { GameInformation } from "../interfaces/Game"
import cars from "./car"
import poles from "./pole"

const gameList: GameInformation[] = [
  {
    description:
      "Em diversas coberturas do google maps é possível ver um padrão de carros, sabendo disso é possível saber instantaneamente em qual região ou país você está localizado. Esse jogo consiste em você treinar seu reconhecimento.",
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/google-car.jpg",
    name: "Google Car",
    slug: "car",
    data: cars
  },
  {
    name: "Postes",
    description:
      "Este quiz inclui diferentes tipos de postes comuns de todo o mundo. Treine suas habilidades para identificar postes e ter palpites mais certeiros.",
    slug: "pole",
    data: poles,
    image:
      "https://tbzaiuuumjycdssbuhdy.supabase.co/storage/v1/object/public/images/poles.jpg"
  }
]

export default gameList
