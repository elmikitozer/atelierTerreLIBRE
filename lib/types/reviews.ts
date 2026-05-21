export type GoogleReview = {
  author: string
  authorPhoto: string | null
  rating: number
  text: string
  relativeTime: string
}

export type ReviewsData = {
  rating: number | null
  totalReviews: number
  reviews: GoogleReview[]
  googleMapsUri: string | null
}
