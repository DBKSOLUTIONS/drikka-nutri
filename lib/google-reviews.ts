export type GooglePlaceReviews = {
  rating: number;
  userRatingsTotal: number;
};

export async function getGooglePlaceReviews(): Promise<GooglePlaceReviews | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!key?.trim() || !placeId?.trim()) {
    return null;
  }

  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "rating,user_ratings_total");
  url.searchParams.set("key", key);

  const response = await fetch(url.toString(), {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as {
    status?: string;
    result?: { rating?: number; user_ratings_total?: number };
  };

  if (data.status !== "OK" || data.result == null) {
    return null;
  }

  const { rating, user_ratings_total: total } = data.result;

  if (typeof rating !== "number" || typeof total !== "number") {
    return null;
  }

  return { rating, userRatingsTotal: total };
}
