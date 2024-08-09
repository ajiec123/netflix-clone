import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export const languangeAtom = atomWithStorage("languange", "id")
