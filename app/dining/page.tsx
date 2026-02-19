import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function DiningPage() {
  return (
    <main className="relative min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-end">
        <Image
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop" // Bright restaurant/buffet
          alt="Malankara Palace Dining"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-16 md:pb-24">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6 leading-tight">
              Where Taste Meets Tranquility
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl leading-relaxed">
              Savour curated flavours in calm, view-filled dining spaces.
            </p>
          </div>
        </div>
      </section>

      {/* Dining Introduction & Multi-Cuisine Restaurant */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif text-gray-900 mb-6 font-medium">
              Dining by the Lake
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed">
              Dining here is designed to be more than just a meal — it is an
              experience shaped by setting, mood, and flavour. With scenic
              views, relaxed seating, and thoughtfully prepared dishes, every
              dining moment is meant to be enjoyed slowly. From casual meals to
              curated celebration dinners, the atmosphere blends comfort with
              quiet elegance.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-24">
            {/* Multi-Cuisine Restaurant */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content (Left) */}
              <div className="bg-[#f9f7f2] p-10 lg:p-16 flex flex-col justify-center order-last lg:order-first">
                <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 font-medium">
                  Multi-Cuisine Restaurant
                </h3>
                <p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
                  Our multi-cuisine restaurant offers a diverse selection of
                  dishes prepared with care and balanced flavours. The menu
                  brings together regional favourites, Indian classics, and
                  popular international selections to suit varied tastes and
                  preferences.
                </p>
                <p className="text-gray-600 text-lg font-light leading-relaxed mb-8">
                  Whether it is a relaxed breakfast, a leisurely lunch, or a
                  refined dinner, the dining space is designed to feel open,
                  comfortable, and welcoming.
                </p>

                <ul className="space-y-3">
                  {[
                    "Multi-cuisine menu",
                    "Freshly prepared dishes",
                    "Regional and Indian specialities",
                    "Family-friendly dining environment",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="text-purple-600 text-xl">•</span>
                      <span className="text-gray-700 text-lg font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image (Right) */}
              <div className="relative h-[400px] lg:h-auto w-full order-first lg:order-last">
                <Image
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
                  alt="Multi-Cuisine Restaurant Interior"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Poolside Dining Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image (Left) */}
              <div className="relative h-[400px] lg:h-auto w-full">
                <Image
                  src="https://images.unsplash.com/photo-1572331165267-854da2b00ca1?q=80&w=2070&auto=format&fit=crop"
                  alt="Poolside Dining"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content (Right) */}
              <div className="bg-[#f9f7f2] p-10 lg:p-16 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 font-medium">
                  Poolside Dining Experience
                </h3>
                <p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
                  Enjoy meals in a relaxed open setting beside the pool, where
                  fresh air and scenic surroundings add to the experience.
                  Poolside dining is ideal for slow evenings, small gatherings,
                  and informal celebration meals.
                </p>
                <p className="text-gray-600 text-lg font-light leading-relaxed mb-8">
                  The setting works especially well for sunset hours and
                  post-evening relaxation.
                </p>

                <ul className="space-y-3">
                  {[
                    "Open-air dining ambience",
                    "Ideal for evening meals",
                    "Suitable for small groups",
                    "Scenic and relaxed setting",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="text-purple-600 text-xl">•</span>
                      <span className="text-gray-700 text-lg font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Candle Light Dining */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content (Left) */}
              <div className="bg-[#f9f7f2] p-10 lg:p-16 flex flex-col justify-center order-last lg:order-first">
                <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 font-medium">
                  Candle Light Dining
                </h3>
                <p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
                  For special moments and intimate occasions, candle light
                  dining experiences can be arranged in select scenic locations
                  within the property. Soft lighting, curated menus, and
                  personalised setup create a warm and comprehensive atmosphere.
                </p>
                <p className="text-gray-600 text-lg font-light leading-relaxed mb-8">
                  Ideal for couples, anniversaries, and celebration evenings.
                </p>

                <ul className="space-y-3">
                  {[
                    "Romantic private setups",
                    "Curated dining menus",
                    "Scenic seating locations",
                    "Advance request required",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="text-purple-600 text-xl">•</span>
                      <span className="text-gray-700 text-lg font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image (Right) */}
              <div className="relative h-[400px] lg:h-auto w-full order-first lg:order-last">
                <Image
                  src="https://images.unsplash.com/photo-1592861956120-e524fc739696?q=80&w=2070&auto=format&fit=crop" // Candlelight dinner
                  alt="Candle Light Dining"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Live Barbecue Experience */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image (Left) */}
              <div className="relative h-[400px] lg:h-auto w-full">
                <Image
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=2070&auto=format&fit=crop" // BBQ/Grilling
                  alt="Live Barbecue Experience"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content (Right) */}
              <div className="bg-[#f9f7f2] p-10 lg:p-16 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 font-medium">
                  Live Barbecue Experience
                </h3>
                <p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
                  Live barbecue setups add a lively and interactive element to
                  your dining experience. Freshly grilled selections prepared
                  on-site create a casual and engaging food atmosphere for
                  evenings and group gatherings.
                </p>

                <ul className="space-y-3">
                  {[
                    "Live grill stations",
                    "Barbecue evenings",
                    "Group-friendly format",
                    "Available on request / select days",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="text-purple-600 text-xl">•</span>
                      <span className="text-gray-700 text-lg font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Coffee Shop & Reading Corner */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content (Left) */}
              <div className="bg-[#f9f7f2] p-10 lg:p-16 flex flex-col justify-center order-last lg:order-first">
                <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 font-medium">
                  Coffee Shop & Reading Corner
                </h3>
                <p className="text-gray-600 text-lg font-light leading-relaxed mb-8">
                  A relaxed coffee space with a quiet reading corner offers a
                  calm setting for light bites and beverages. Ideal for slow
                  mornings, afternoon breaks, or peaceful evening time with a
                  book.
                </p>

                <ul className="space-y-3">
                  {[
                    "Coffee and beverages",
                    "Light snacks",
                    "Library & reading corner",
                    "Quiet indoor ambience",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="text-purple-600 text-xl">•</span>
                      <span className="text-gray-700 text-lg font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image (Right) */}
              <div className="relative h-[400px] lg:h-auto w-full order-first lg:order-last">
                <Image
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2070&auto=format&fit=crop" // Coffee/Reading
                  alt="Coffee Shop and Reading Corner"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* In-Room Dining */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Image (Left) */}
              <div className="relative h-[400px] lg:h-auto w-full">
                <Image
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop" // Room with view/balcony for dining
                  alt="In-Room Dining"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content (Right) */}
              <div className="bg-[#f9f7f2] p-10 lg:p-16 flex flex-col justify-center">
                <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 font-medium">
                  In-Room Dining
                </h3>
                <p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
                  Guests can enjoy select menu items in the comfort and privacy
                  of their rooms. In-room dining is available based on menu and
                  operational hours.
                </p>

                <ul className="space-y-3">
                  {[
                    "Room service dining",
                    "Comfort and privacy",
                    "Available as per menu & timing",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="text-purple-600 text-xl">•</span>
                      <span className="text-gray-700 text-lg font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dining for Celebrations */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Content (Left) */}
              <div className="bg-[#f9f7f2] p-10 lg:p-16 flex flex-col justify-center order-last lg:order-first">
                <h3 className="text-3xl md:text-4xl font-serif text-gray-900 mb-6 font-medium">
                  Dining for Celebrations
                </h3>
                <p className="text-gray-600 text-lg font-light leading-relaxed mb-6">
                  Special dining arrangements can be created for celebrations,
                  private gatherings, and event groups. Menus and formats can be
                  customised based on the occasion and guest preferences.
                </p>

                <ul className="space-y-3">
                  {[
                    "Celebration menus",
                    "Group dining setups",
                    "Event catering support",
                    "Custom menu planning",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span className="text-purple-600 text-xl">•</span>
                      <span className="text-gray-700 text-lg font-light">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image (Right) */}
              <div className="relative h-[400px] lg:h-auto w-full order-first lg:order-last">
                <Image
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop" // Celebration/Dining group
                  alt="Dining for Celebrations"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
