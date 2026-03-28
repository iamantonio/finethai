import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { menuCategories, restaurantInfo } from "@/data/menu";
import { JsonLd } from "@/components/json-ld";

const featuredDishes = [
  {
    name: "Pad Thai",
    description: "Our most beloved dish — thin rice noodles stir-fried with bean sprouts, egg, green onions and ground peanuts.",
    price: "$13.95",
    tag: "Most Popular",
    emoji: "🍜",
  },
  {
    name: "Panang Curry",
    description: "Rich and aromatic — red peppers, basil and coconut milk in our signature Panang curry sauce.",
    price: "$14.95",
    tag: "Chef's Pick",
    emoji: "🍛",
  },
  {
    name: "Basil Duck",
    description: "House special — tender roast duck topped with our spicy basil sauce, bursting with Thai flavors.",
    price: "$17.95",
    tag: "Special",
    emoji: "🦆",
  },
  {
    name: "Drunken Noodles",
    description: "Wide rice noodles stir-fried with chili peppers, tomatoes, bamboo shoots and fresh sweet basil.",
    price: "$13.95",
    tag: "Fan Favorite",
    emoji: "🌶️",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Fine Thai",
  image: [],
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
  hasMenu: {
    "@type": "Menu",
    url: "https://www.brookfieldfinethai.com/menu",
  },
  acceptsReservations: false,
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
};

export default function HomePage() {
  const totalItems = menuCategories.reduce((sum, c) => sum + c.items.length, 0);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a843' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 w-full">
          <div className="max-w-2xl">
            <Badge variant="outline" className="border-primary/30 text-primary mb-6 py-1.5 px-4 text-sm">
              Brookfield&apos;s Favorite Thai Restaurant
            </Badge>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
              Authentic Thai{" "}
              <span className="text-gradient-gold">Cuisine</span>{" "}
              Crafted With Love
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mb-8 leading-relaxed">
              Traditional recipes passed down through generations, made with the freshest ingredients.
              Pickup and delivery available every day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-base px-8 h-12"
                render={<a href={restaurantInfo.orderOnlineUrl} target="_blank" rel="noopener noreferrer" />}
              >
                Order Online
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-secondary font-semibold text-base px-8 h-12"
                render={<Link href="/menu" />}
              >
                View Full Menu
              </Button>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-primary">{totalItems}+</p>
                <p className="text-sm text-muted-foreground">Menu Items</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{menuCategories.length}</p>
                <p className="text-sm text-muted-foreground">Categories</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">10%</p>
                <p className="text-sm text-muted-foreground">Off $60+ Orders</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-primary/3 rounded-full blur-3xl" />
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">Our Menu</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Dishes Our Guests Love
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredDishes.map((dish) => (
              <div
                key={dish.name}
                className="group bg-background border border-border rounded-xl p-6 hover:border-primary/30 hover:glow-gold transition-all duration-300"
              >
                <div className="text-4xl mb-4">{dish.emoji}</div>
                <Badge variant="secondary" className="text-xs mb-3">
                  {dish.tag}
                </Badge>
                <h3 className="text-lg font-semibold mb-2">{dish.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {dish.description}
                </p>
                <p className="text-primary font-bold text-lg">{dish.price}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary"
              render={<Link href="/menu" />}
            >
              View Full Menu &rarr;
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">Our Story</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                A Taste of Thailand in{" "}
                <span className="text-gradient-gold">Brookfield</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Fine Thai brings the rich flavors and traditions of Thai cuisine to the heart of Brookfield, Illinois. Our kitchen is led by experienced chefs who combine time-honored recipes with the freshest locally sourced ingredients.
                </p>
                <p>
                  From our aromatic curries simmered in coconut milk to our perfectly wok-tossed Pad Thai, every dish is prepared to order and crafted with care. We believe great Thai food is about balance — sweet, sour, salty, and spicy in perfect harmony.
                </p>
                <p>
                  Whether you&apos;re joining us for a quick lunch, ordering dinner for the family, or exploring our specials menu, we promise an authentic Thai dining experience that keeps you coming back.
                </p>
              </div>
              <div className="flex gap-6 mt-8">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary text-lg">&#10003;</span>
                  <span className="text-foreground">Fresh Ingredients</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary text-lg">&#10003;</span>
                  <span className="text-foreground">Made to Order</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-primary text-lg">&#10003;</span>
                  <span className="text-foreground">Family Recipes</span>
                </div>
              </div>
            </div>

            {/* Key offerings */}
            <div className="space-y-4">
              {[
                { icon: "🍜", title: "Noodles & Stir-Fry", desc: "10 noodle dishes including our famous Pad Thai, Drunken Noodles, and Pad See-Eiw" },
                { icon: "🍛", title: "Curries", desc: "Five traditional curries — Yellow, Red, Green, Panang, and Mus Sa Mon" },
                { icon: "🌿", title: "Vegetarian Options", desc: "9 dedicated vegetarian dishes plus veggie options across the entire menu" },
                { icon: "🦐", title: "Seafood & Specials", desc: "Fresh seafood dishes and chef's specials featuring duck, salmon, and scallops" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coupon Banner */}
      <section className="py-12 bg-primary/5 border-y border-primary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-primary font-bold text-2xl sm:text-3xl mb-2">
            Spend $60+ &amp; Save 10%
          </p>
          <p className="text-muted-foreground mb-6">
            Automatically applied to orders of $60 or more. Valid for pickup and delivery.
          </p>
          <Button
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
            render={<a href={restaurantInfo.orderOnlineUrl} target="_blank" rel="noopener noreferrer" />}
          >
            Start Your Order
          </Button>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="location" className="py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-primary font-medium text-sm tracking-wider uppercase mb-3">Visit Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Location & Hours
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Map embed */}
            <div className="rounded-xl overflow-hidden border border-border bg-card h-80 md:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.5!2d-87.845!3d41.825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e3601c446da09%3A0xbd39e9457fddf45d!2s9305%20Ogden%20Ave%2C%20Brookfield%2C%20IL%2060513!5e0!3m2!1sen!2sus!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "320px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Fine Thai Location"
              />
            </div>

            {/* Hours & Contact */}
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-xl font-bold mb-6">Hours of Operation</h3>
              <ul className="space-y-3 mb-8">
                {restaurantInfo.hours.map((h) => (
                  <li key={h.day} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="font-medium">{h.day}</span>
                    <span className={h.hours === "Closed" ? "text-destructive font-medium" : "text-muted-foreground"}>
                      {h.hours}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="space-y-4">
                <a
                  href={restaurantInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="text-sm">{restaurantInfo.address}</span>
                </a>

                <a
                  href={restaurantInfo.phoneHref}
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <span className="text-sm">{restaurantInfo.phone}</span>
                </a>
              </div>

              <div className="flex gap-3 mt-8">
                <Button
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                  render={<a href={restaurantInfo.orderOnlineUrl} target="_blank" rel="noopener noreferrer" />}
                >
                  Order Online
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-border hover:bg-secondary"
                  render={<a href={restaurantInfo.googleMapsUrl} target="_blank" rel="noopener noreferrer" />}
                >
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <JsonLd data={structuredData} />
    </>
  );
}
