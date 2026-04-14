import { getGooglePlaceReviews } from "@/lib/google-reviews";

export async function GET() {
  const reviews = await getGooglePlaceReviews();

  if (!reviews) {
    return Response.json({ available: false as const });
  }

  return Response.json({
    available: true as const,
    rating: reviews.rating,
    userRatingsTotal: reviews.userRatingsTotal,
  });
}
