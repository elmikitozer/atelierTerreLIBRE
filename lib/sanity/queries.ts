import type { SanityImageSource } from "@sanity/image-url"
import { sanityClient } from "./client"

// ─── Types ───────────────────────────────────────────────

export type TimeSlot = {
  day: string
  hours: string[]
}

export type Price = {
  duration: string
  amount: number
  unit?: string
}

export type Rentree = {
  dateAdultes: string
  dateEnfants: string
}

export type CoursEnfants = {
  minAge: number
  schedule: TimeSlot[]
  prices: Price[]
  essaiPossible: boolean
}

export type CoursAdultes = {
  schedule: TimeSlot[]
  prices: Price[]
  adulteSurCreneauEnfant: boolean
}

export type StageVacances = {
  _id: string
  title: string
  dateRange: string
  hours: string
  tarifEnfantSemaine: number
  tarifEnfantSeance: number
  tarifAdulteSemaine: number
  tarifAdulteSeance: number
  order: number
}

export type StageDimanche = {
  _id: string
  date: string
  hours: string
  tarifAdulte: number
  tarifEnfant: number
  order: number
}

// ─── Queries ─────────────────────────────────────────────

export async function getRentree(): Promise<Rentree | null> {
  return sanityClient.fetch<Rentree | null>(
    `*[_id == "rentree"][0]{ dateAdultes, dateEnfants }`,
    {},
    { next: { revalidate: 60 } }
  )
}

export async function getCoursEnfants(): Promise<CoursEnfants | null> {
  return sanityClient.fetch<CoursEnfants | null>(
    `*[_id == "coursEnfants"][0]{
      minAge,
      schedule[]{ day, hours },
      prices[]{ duration, amount, unit },
      essaiPossible
    }`,
    {},
    { next: { revalidate: 60 } }
  )
}

export async function getCoursAdultes(): Promise<CoursAdultes | null> {
  return sanityClient.fetch<CoursAdultes | null>(
    `*[_id == "coursAdultes"][0]{
      schedule[]{ day, hours },
      prices[]{ duration, amount, unit },
      adulteSurCreneauEnfant
    }`,
    {},
    { next: { revalidate: 60 } }
  )
}

export async function getStagesVacances(): Promise<StageVacances[]> {
  return sanityClient.fetch<StageVacances[]>(
    `*[_type == "stageVacances"] | order(order asc){
      _id, title, dateRange, hours,
      tarifEnfantSemaine, tarifEnfantSeance,
      tarifAdulteSemaine, tarifAdulteSeance,
      order
    }`,
    {},
    { next: { revalidate: 60 } }
  )
}

export async function getStagesDimanche(): Promise<StageDimanche[]> {
  return sanityClient.fetch<StageDimanche[]>(
    `*[_type == "stageDimanche"] | order(order asc){
      _id, date, hours, tarifAdulte, tarifEnfant, order
    }`,
    {},
    { next: { revalidate: 60 } }
  )
}

export type TarifsEvenements = {
  anniversaireBase: number
  anniversaireSeuilEnfants: number
  anniversaireEnfantSupp: number
  teamBuildingMention: string
}

export type GaleriePhoto = {
  _id: string
  image: SanityImageSource
  caption?: string
  order: number
}

export async function getGaleriePhotos(): Promise<GaleriePhoto[]> {
  return sanityClient.fetch<GaleriePhoto[]>(
    `*[_type == "galerie"] | order(order asc){
      _id,
      image,
      caption,
      order
    }`,
    {},
    { next: { revalidate: 60 } }
  )
}

export async function getTarifsEvenements(): Promise<TarifsEvenements | null> {
  return sanityClient.fetch<TarifsEvenements | null>(
    `*[_id == "tarifsEvenements"][0]{
      anniversaireBase,
      anniversaireSeuilEnfants,
      anniversaireEnfantSupp,
      teamBuildingMention
    }`,
    {},
    { next: { revalidate: 60 } }
  )
}
