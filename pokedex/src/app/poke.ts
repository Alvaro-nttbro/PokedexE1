export interface Poke {
    id: number,
    name: string,
    height: number,
    weight: number,
    sprites: {front_default: string},
    types: {type: string},
}
