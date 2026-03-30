export interface PlaceReview {
  author: string;
  rating: number;
  text: string;
  relativeTime: string;
}

export interface PlaceData {
  rating: number;
  reviewCount: number;
  reviews: PlaceReview[];
}

export async function getPlaceReviews(): Promise<PlaceData | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return null;
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total,reviews&key=${apiKey}`;

    const res = await fetch(url, { next: { revalidate: 86400 } }); // cache 24 hours
    if (!res.ok) return null;

    const data = await res.json();
    const result = data.result;
    if (!result) return null;

    return {
      rating: result.rating ?? 0,
      reviewCount: result.user_ratings_total ?? 0,
      reviews: (result.reviews ?? []).slice(0, 5).map((r: { author_name: string; rating: number; text: string; relative_time_description: string }) => ({
        author: r.author_name,
        rating: r.rating,
        text: r.text,
        relativeTime: r.relative_time_description,
      })),
    };
  } catch {
    return null;
  }
}
