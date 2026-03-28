import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { menuCategories, restaurantInfo } from "@/data/menu";
import { JsonLd } from "@/components/json-ld";
import { ThaiOrnament } from "@/components/thai-ornament";
import { HomeClient } from "@/components/home-client";

const featuredDishes = [
  {
    name: "Pad Thai",
    description: "Thin rice noodles wok-tossed with bean sprouts, egg, green onions and ground peanuts.",
    price: "$13.95",
    tag: "Most Popular",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&h=400&fit=crop",
  },
  {
    name: "Panang Curry",
    description: "Rich coconut curry with red peppers, Thai basil, and your choice of protein.",
    price: "$14.95",
    tag: "Chef's Pick",
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=600&h=400&fit=crop",
  },
  {
    name: "Basil Duck",
    description: "Tender roast duck topped with our signature spicy basil sauce.",
    price: "$17.95",
    tag: "House Special",
    image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4?w=600&h=400&fit=crop",
  },
  {
    name: "Drunken Noodles",
    description: "Wide rice noodles with chili peppers, tomatoes, bamboo shoots and sweet basil.",
    price: "$13.95",
    tag: "Fan Favorite",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=400&fit=crop",
  },
];

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "The Pad Thai here is the best I've had outside of Thailand. Fresh ingredients, perfect balance of flavors. We order every week!",
    date: "2 weeks ago",
  },
  {
    name: "Michael R.",
    rating: 5,
    text: "Incredible Panang curry and the staff is always so friendly. This is our go-to Thai place in Brookfield. Fast delivery too.",
    date: "1 month ago",
  },
  {
    name: "Jennifer L.",
    rating: 5,
    text: "Love the vegetarian options! The Basil Tofu and Vegetable Green Curry are phenomenal. Great prices for the quality.",
    date: "3 weeks ago",
  },
];

const structuredData = {
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: "156",
  },
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

export default function HomePage() {
  const totalItems = menuCategories.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <>
      <HomeClient
        featuredDishes={featuredDishes}
        reviews={reviews}
        totalItems={totalItems}
      />
      <JsonLd data={structuredData} />
    </>
  );
}
