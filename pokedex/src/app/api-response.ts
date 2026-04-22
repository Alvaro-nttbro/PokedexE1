import { Poke } from "./poke"

export interface ApiResponse {
    count: number,
    next: string | null,
    previous: string | null,
    results: Poke[]
}
