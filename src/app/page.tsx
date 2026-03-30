import { menuCategories, restaurantInfo } from "@/data/menu";
import { images } from "@/data/images";
import { JsonLd } from "@/components/json-ld";
import { HomeClient } from "@/components/home-client";
import { getPlaceReviews } from "@/lib/google-places";

const featuredDishes = [
  {
    name: "Pad Thai",
    description: "Thin rice noodles wok-tossed with bean sprouts, egg, green onions and ground peanuts.",
    price: "$13.95",
    tag: "Most Popular",
    image: images.padThai,
    menuItemId: "n1",
  },
  {
    name: "Panang Curry",
    description: "Rich coconut curry with red peppers, Thai basil, and your choice of protein.",
    price: "$14.95",
    tag: "Chef's Pick",
    image: images.panangCurry,
    menuItemId: "c4",
  },
  {
    name: "Basil Duck",
    description: "Tender roast duck topped with our signature spicy basil sauce.",
    price: "$17.95",
    tag: "House Special",
    image: images.basilDuck,
    menuItemId: "sp1",
  },
  {
    name: "Drunken Noodles",
    description: "Wide rice noodles with chili peppers, tomatoes, bamboo shoots and sweet basil.",
    price: "$13.95",
    tag: "Fan Favorite",
    image: images.drunkenNoodles,
    menuItemId: "n4",
  },
];

export default async function HomePage() {
  const totalItems = menuCategories.reduce((sum, c) => sum + c.items.length, 0);
  const placeData = await getPlaceReviews();

  const structuredData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Fine Thai",
    address: {
      "@type": "PostalAddress",
      streetAddress: "9305 Ogden Ave",
      addressLocality: "Brookfield",
      addressRegion: "IL",
      postalCode: "60513",
      addressCountry: "US",
    },
    telephone: "+1-708-387-9082",
    url: "https://www.brookfieldfinethai.com",
    servesCuisine: "Thai",
    priceRange: "$$",
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Tuesday", opens: "11:00", closes: "21:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Wednesday", opens: "11:00", closes: "21:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Thursday", opens: "11:00", closes: "21:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "11:00", closes: "22:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "11:00", closes: "22:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "16:00", closes: "21:00" },
    ],
    hasMenu: { "@type": "Menu", url: "https://www.brookfieldfinethai.com/menu" },
  };

  // Only include aggregateRating if we have real data from Google
  if (placeData) {
    structuredData.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: String(placeData.rating),
      reviewCount: String(placeData.reviewCount),
    };
  }

  return (
    <>
      <HomeClient
        featuredDishes={featuredDishes}
        reviews={placeData?.reviews ?? null}
        rating={placeData?.rating ?? null}
        reviewCount={placeData?.reviewCount ?? null}
        totalItems={totalItems}
      />
      <JsonLd data={structuredData} />
    </>
  );
}
