// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
"use client";

import React, { useState } from "react";
import { Button, Input, Rate, Checkbox, Form, Carousel } from "antd";
import {
  SearchOutlined,
  UserOutlined,
  CalendarOutlined,
  TeamOutlined,
  ArrowRightOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Image from "next/image";

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [activeTab, setActiveTab] = useState("home");

  // Stats data for the counter
  const statsData = [
    { label: "Happy Travelers", value: 25000 },
    { label: "Destinations", value: 120 },
    { label: "Tours Completed", value: 5000 },
    { label: "Years Experience", value: 15 },
  ];

  // Popular destinations data
  const destinations = [
    {
      id: 1,
      name: "Santorini, Greece",
      description:
        "Experience the breathtaking views of white-washed buildings and crystal blue waters.",
      price: 1299,
      rating: 4.9,
      image:
        "https://readdy.ai/api/search-image?query=Stunning%20view%20of%20Santorini%20Greece%20with%20white%20buildings%20and%20blue%20domed%20churches%20against%20the%20backdrop%20of%20the%20deep%20blue%20Aegean%20Sea%2C%20beautiful%20sunset%20colors%2C%20crystal%20clear%20water%2C%20high-quality%20travel%20photography%2C%20idyllic%20Mediterranean%20landscape&width=600&height=400&seq=1&orientation=landscape",
    },
    {
      id: 2,
      name: "Bali, Indonesia",
      description:
        "Discover tropical paradise with lush rice terraces and pristine beaches.",
      price: 1099,
      rating: 4.8,
      image:
        "https://readdy.ai/api/search-image?query=Beautiful%20Bali%20Indonesia%20landscape%20with%20lush%20green%20rice%20terraces%2C%20tropical%20palm%20trees%2C%20traditional%20temples%2C%20and%20pristine%20beaches%20with%20crystal%20clear%20turquoise%20water%2C%20perfect%20vacation%20destination%2C%20professional%20travel%20photography&width=600&height=400&seq=2&orientation=landscape",
    },
    {
      id: 3,
      name: "Kyoto, Japan",
      description:
        "Immerse yourself in ancient temples, traditional gardens and cherry blossoms.",
      price: 1499,
      rating: 4.7,
      image:
        "https://readdy.ai/api/search-image?query=Traditional%20Japanese%20temple%20in%20Kyoto%20during%20cherry%20blossom%20season%2C%20ancient%20wooden%20architecture%2C%20zen%20gardens%20with%20stone%20pathways%2C%20pink%20sakura%20flowers%2C%20pagoda%20rooftops%2C%20serene%20atmosphere%2C%20professional%20travel%20photography&width=600&height=400&seq=3&orientation=landscape",
    },
    {
      id: 4,
      name: "Machu Picchu, Peru",
      description:
        "Explore the ancient Incan citadel set against a backdrop of stunning mountains.",
      price: 1699,
      rating: 4.9,
      image:
        "https://readdy.ai/api/search-image?query=Majestic%20view%20of%20Machu%20Picchu%20ancient%20Incan%20ruins%20in%20Peru%2C%20dramatic%20mountain%20backdrop%20with%20Huayna%20Picchu%2C%20early%20morning%20mist%2C%20lush%20green%20terraces%2C%20stone%20architecture%2C%20dramatic%20clouds%2C%20professional%20travel%20photography&width=600&height=400&seq=4&orientation=landscape",
    },
    {
      id: 5,
      name: "Amalfi Coast, Italy",
      description:
        "Drive along the stunning coastline and visit charming cliffside villages.",
      price: 1399,
      rating: 4.8,
      image:
        "https://readdy.ai/api/search-image?query=Picturesque%20Amalfi%20Coast%20in%20Italy%20with%20colorful%20houses%20built%20into%20steep%20cliffs%2C%20azure%20Mediterranean%20Sea%20below%2C%20winding%20coastal%20road%2C%20luxury%20yachts%20in%20harbor%2C%20vibrant%20flowers%2C%20golden%20sunshine%2C%20professional%20travel%20photography&width=600&height=400&seq=5&orientation=landscape",
    },
    {
      id: 6,
      name: "Serengeti, Tanzania",
      description:
        "Witness the incredible wildlife and spectacular savanna landscapes.",
      price: 2199,
      rating: 4.9,
      image:
        "https://readdy.ai/api/search-image?query=Expansive%20Serengeti%20National%20Park%20landscape%20at%20golden%20hour%20with%20acacia%20trees%20silhouetted%20against%20orange%20sunset%20sky%2C%20African%20wildlife%20including%20elephants%20and%20giraffes%2C%20vast%20savanna%20grasslands%2C%20dramatic%20clouds%2C%20professional%20safari%20photography&width=600&height=400&seq=6&orientation=landscape",
    },
  ];

  // Travel packages data
  const travelPackages = [
    {
      id: 1,
      name: "European Elegance",
      duration: "12 Days",
      highlights: [
        "Paris, Rome, Barcelona",
        "Luxury accommodations",
        "Skip-the-line attractions",
        "Expert local guides",
      ],
      price: 3499,
      image:
        "https://readdy.ai/api/search-image?query=Collage%20of%20iconic%20European%20landmarks%20including%20Eiffel%20Tower%20in%20Paris%2C%20Colosseum%20in%20Rome%2C%20and%20Sagrada%20Familia%20in%20Barcelona%2C%20elegant%20architecture%2C%20historic%20sites%2C%20beautiful%20city%20squares%20with%20cafes%2C%20professional%20travel%20photography&width=600&height=350&seq=7&orientation=landscape",
    },
    {
      id: 2,
      name: "Asian Adventure",
      duration: "14 Days",
      highlights: [
        "Tokyo, Bangkok, Singapore",
        "Cultural immersion",
        "Street food tours",
        "Temple excursions",
      ],
      price: 2899,
      image:
        "https://readdy.ai/api/search-image?query=Collage%20of%20Asian%20destinations%20featuring%20Tokyo%20skyline%20with%20Mt%20Fuji%2C%20Bangkok%20temples%20with%20golden%20spires%2C%20Singapore%20Gardens%20by%20the%20Bay%20with%20Supertrees%2C%20vibrant%20street%20markets%2C%20traditional%20architecture%2C%20professional%20travel%20photography&width=600&height=350&seq=8&orientation=landscape",
    },
    {
      id: 3,
      name: "Caribbean Cruise",
      duration: "7 Days",
      highlights: [
        "Jamaica, Bahamas, Mexico",
        "All-inclusive luxury ship",
        "Water sports activities",
        "Island hopping",
      ],
      price: 1999,
      image:
        "https://readdy.ai/api/search-image?query=Luxury%20cruise%20ship%20sailing%20through%20crystal%20clear%20turquoise%20Caribbean%20waters%2C%20white%20sandy%20beaches%20with%20palm%20trees%2C%20coral%20reefs%20visible%20beneath%20surface%2C%20tropical%20islands%20on%20horizon%2C%20perfect%20blue%20sky%2C%20professional%20travel%20photography&width=600&height=350&seq=9&orientation=landscape",
    },
    {
      id: 4,
      name: "African Safari",
      duration: "10 Days",
      highlights: [
        "Kenya, Tanzania",
        "Big Five wildlife viewing",
        "Luxury tented camps",
        "Maasai village visit",
      ],
      price: 4299,
      image:
        "https://readdy.ai/api/search-image?query=African%20safari%20scene%20with%20luxury%20safari%20vehicle%20viewing%20lions%2C%20elephants%20and%20giraffes%20on%20savanna%2C%20acacia%20trees%2C%20dramatic%20sunset%2C%20luxury%20tented%20camp%2C%20Maasai%20warriors%20in%20traditional%20dress%2C%20professional%20wildlife%20photography&width=600&height=350&seq=10&orientation=landscape",
    },
  ];

  // Instagram-style travel photos
  const travelPhotos = [
    {
      id: 1,
      location: "Maldives",
      image:
        "https://readdy.ai/api/search-image?query=Overwater%20bungalows%20in%20Maldives%20with%20crystal%20clear%20turquoise%20water%2C%20wooden%20walkways%2C%20palm%20trees%2C%20luxury%20resort%2C%20perfect%20tropical%20paradise%2C%20drone%20perspective%2C%20professional%20travel%20photography&width=300&height=300&seq=11&orientation=squarish",
    },
    {
      id: 2,
      location: "New York City",
      image:
        "https://readdy.ai/api/search-image?query=New%20York%20City%20skyline%20at%20sunset%20with%20Empire%20State%20Building%2C%20yellow%20taxis%20on%20streets%2C%20Central%20Park%20view%2C%20urban%20landscape%2C%20city%20lights%20beginning%20to%20shine%2C%20professional%20travel%20photography&width=300&height=300&seq=12&orientation=squarish",
    },
    {
      id: 3,
      location: "Swiss Alps",
      image:
        "https://readdy.ai/api/search-image?query=Majestic%20snow-capped%20Swiss%20Alps%20with%20traditional%20wooden%20chalet%2C%20green%20meadows%20with%20wildflowers%2C%20grazing%20cows%20with%20bells%2C%20crystal%20clear%20lake%20reflecting%20mountains%2C%20professional%20travel%20photography&width=300&height=300&seq=13&orientation=squarish",
    },
    {
      id: 4,
      location: "Great Barrier Reef",
      image:
        "https://readdy.ai/api/search-image?query=Underwater%20scene%20of%20Great%20Barrier%20Reef%20with%20colorful%20coral%20formations%2C%20tropical%20fish%20in%20vibrant%20colors%2C%20clear%20blue%20water%20with%20sunlight%20streaming%20through%2C%20scuba%20diver%20exploring%2C%20professional%20underwater%20photography&width=300&height=300&seq=14&orientation=squarish",
    },
    {
      id: 5,
      location: "Marrakech",
      image:
        "https://readdy.ai/api/search-image?query=Vibrant%20Marrakech%20market%20with%20colorful%20spice%20displays%2C%20intricate%20lanterns%20hanging%2C%20traditional%20Moroccan%20textiles%2C%20bustling%20atmosphere%2C%20ornate%20architecture%2C%20professional%20travel%20photography&width=300&height=300&seq=15&orientation=squarish",
    },
    {
      id: 6,
      location: "Northern Lights",
      image:
        "https://readdy.ai/api/search-image?query=Spectacular%20Northern%20Lights%20aurora%20borealis%20dancing%20across%20night%20sky%20in%20vibrant%20green%20and%20purple%20colors%2C%20silhouette%20of%20pine%20trees%2C%20snow-covered%20landscape%2C%20cabin%20with%20warm%20light%2C%20professional%20night%20photography&width=300&height=300&seq=16&orientation=squarish",
    },
  ];

  // Hero slider images
  const heroSlides = [
    {
      id: 1,
      image:
        "https://readdy.ai/api/search-image?query=Breathtaking%20panoramic%20view%20of%20Santorini%20Greece%20with%20white%20buildings%20cascading%20down%20cliffs%2C%20deep%20blue%20Aegean%20Sea%20stretching%20to%20horizon%2C%20luxury%20infinity%20pools%2C%20perfect%20sunset%20with%20golden%20light%2C%20professional%20travel%20photography%2C%20inspiring%20wanderlust%20scene&width=1440&height=600&seq=17&orientation=landscape",
      title: "Discover Greece",
      subtitle: "Experience the magic of Mediterranean islands",
    },
    {
      id: 2,
      image:
        "https://readdy.ai/api/search-image?query=Majestic%20view%20of%20snow-capped%20mountains%20in%20Swiss%20Alps%20with%20green%20meadows%2C%20traditional%20wooden%20chalets%2C%20crystal%20clear%20lake%20reflecting%20peaks%2C%20perfect%20blue%20sky%20with%20fluffy%20clouds%2C%20professional%20travel%20photography%2C%20inspiring%20wanderlust%20scene&width=1440&height=600&seq=18&orientation=landscape",
      title: "Alpine Adventures",
      subtitle: "Breathtaking mountain escapes await",
    },
    {
      id: 3,
      image:
        "https://readdy.ai/api/search-image?query=Pristine%20tropical%20beach%20with%20white%20sand%2C%20crystal%20clear%20turquoise%20water%2C%20palm%20trees%20swaying%20in%20breeze%2C%20luxury%20beach%20cabanas%2C%20perfect%20blue%20sky%2C%20small%20islands%20in%20distance%2C%20professional%20travel%20photography%2C%20inspiring%20wanderlust%20scene&width=1440&height=600&seq=19&orientation=landscape",
      title: "Tropical Paradise",
      subtitle: "Relax on the world's most beautiful beaches",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300 backdrop-blur-sm bg-white/80">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">
              <i className="fas fa-globe-americas mr-2"></i>
              WanderLuxe
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className={`text-sm font-medium transition-colors duration-300 ${
                activeTab === "home"
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              } cursor-pointer`}
              onClick={() => setActiveTab("home")}
            >
              Home
            </a>
            <a
              href="#destinations"
              className={`text-sm font-medium transition-colors duration-300 ${
                activeTab === "destinations"
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              } cursor-pointer`}
              onClick={() => setActiveTab("destinations")}
            >
              Destinations
            </a>
            <a
              href="#packages"
              className={`text-sm font-medium transition-colors duration-300 ${
                activeTab === "packages"
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              } cursor-pointer`}
              onClick={() => setActiveTab("packages")}
            >
              Packages
            </a>
            <a
              href="#about"
              className={`text-sm font-medium transition-colors duration-300 ${
                activeTab === "about"
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              } cursor-pointer`}
              onClick={() => setActiveTab("about")}
            >
              About Us
            </a>
            <a
              href="#contact"
              className={`text-sm font-medium transition-colors duration-300 ${
                activeTab === "contact"
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-blue-600"
              } cursor-pointer`}
              onClick={() => setActiveTab("contact")}
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
              <SearchOutlined style={{ fontSize: "18px" }} />
            </button>
            <button className="text-gray-700 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
              <UserOutlined style={{ fontSize: "18px" }} />
            </button>
            <Button
              type="primary"
              className="!rounded-button whitespace-nowrap bg-blue-600 hover:bg-blue-700 border-none cursor-pointer"
            >
              Book Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-16">
        <div className="relative">
          <Carousel autoplay effect="fade">
            {heroSlides.map((slide) => (
              <div key={slide.id} className="relative h-[600px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${slide.image})`,
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                </div>
                <div className="container mx-auto px-6 h-full flex items-center">
                  <div className="max-w-2xl text-white z-10">
                    <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                    <p className="text-xl mb-8">{slide.subtitle}</p>
                    <Button
                      type="primary"
                      size="large"
                      className="!rounded-button whitespace-nowrap bg-blue-600 hover:bg-blue-700 border-none cursor-pointer"
                    >
                      Explore Now
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>

          {/* Search Bar Overlay */}
          <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 z-10">
            <div className="container mx-auto px-6">
              <div className="bg-white rounded-lg shadow-xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <Input
                      placeholder="Where to?"
                      prefix={<SearchOutlined className="text-gray-400" />}
                      className="h-12 text-sm border-none shadow-sm"
                    />
                  </div>
                  <div className="relative">
                    <Input
                      placeholder="Departure Date"
                      prefix={<CalendarOutlined className="text-gray-400" />}
                      className="h-12 text-sm border-none shadow-sm"
                    />
                  </div>
                  <div className="relative">
                    <Input
                      placeholder="Return Date"
                      prefix={<CalendarOutlined className="text-gray-400" />}
                      className="h-12 text-sm border-none shadow-sm"
                    />
                  </div>
                  <div className="relative">
                    <Input
                      placeholder="Travelers"
                      prefix={<TeamOutlined className="text-gray-400" />}
                      className="h-12 text-sm border-none shadow-sm"
                    />
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <Button
                    type="primary"
                    size="large"
                    className="!rounded-button whitespace-nowrap bg-blue-600 hover:bg-blue-700 border-none px-8 cursor-pointer"
                  >
                    Search Trips
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="destinations" className="py-24 mt-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Popular Destinations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most sought-after destinations that travelers from
              around the world love to explore. From pristine beaches to
              historic cities, we have something for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                  />
                  {/* <Image
                    src={destination.image}
                    alt={destination.name}
                    width={600} // You need to specify the width
                    height={400} // You need to specify the height
                    className="object-cover object-top transition-transform duration-500 hover:scale-110"
                  /> */}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">
                      {destination.name}
                    </h3>
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      From ${destination.price}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {destination.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Rate
                      disabled
                      defaultValue={destination.rating}
                      className="text-yellow-500 text-sm"
                    />
                    <Button
                      type="link"
                      className="flex items-center text-blue-600 hover:text-blue-800 !rounded-button whitespace-nowrap cursor-pointer"
                    >
                      Explore <ArrowRightOutlined className="ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Travel Packages */}
      <section id="packages" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Featured Travel Packages
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our carefully curated travel packages offer unforgettable
              experiences with premium accommodations, expert guides, and
              exclusive activities at unbeatable values.
            </p>
          </div>

          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5000 }}
            className="package-swiper"
          >
            {travelPackages.map((pkg) => (
              <SwiperSlide key={pkg.id}>
                <div className="bg-white rounded-lg overflow-hidden shadow-lg h-full">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-blue-600">
                      {pkg.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{pkg.name}</h3>
                    <ul className="mb-4">
                      {pkg.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start mb-2">
                          <CheckOutlined className="text-green-500 mt-1 mr-2" />
                          <span className="text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center mt-6">
                      <div className="text-blue-600 font-bold text-xl">
                        ${pkg.price}
                        <span className="text-gray-500 text-sm font-normal ml-1">
                          / person
                        </span>
                      </div>
                      <Button
                        type="primary"
                        className="!rounded-button whitespace-nowrap bg-blue-600 hover:bg-blue-700 border-none cursor-pointer"
                      >
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              With over 15 years of experience creating unforgettable journeys,
              we combine expertise, personalized service, and exclusive access
              to deliver extraordinary travel experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-map-marked-alt text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Curated Destinations
              </h3>
              <p className="text-gray-600">
                We handpick and personally visit every destination in our
                portfolio to ensure exceptional quality and authentic
                experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-concierge-bell text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Personalized Service
              </h3>
              <p className="text-gray-600">
                Our travel experts craft bespoke itineraries tailored to your
                preferences, interests, and travel style for a truly customized
                journey.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fas fa-shield-alt text-2xl text-blue-600"></i>
              </div>
              <h3 className="text-xl font-semibold mb-3">24/7 Support</h3>
              <p className="text-gray-600">
                Travel with peace of mind knowing our dedicated support team is
                available around the clock to assist with any needs during your
                journey.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {statsData.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.value.toLocaleString()}+
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center items-center mt-16 gap-8">
            <div className="flex items-center text-gray-500">
              <i className="fas fa-certificate text-xl mr-2"></i>
              <span>IATA Accredited</span>
            </div>
            <div className="flex items-center text-gray-500">
              <i className="fas fa-award text-xl mr-2"></i>
              <span>Best Tour Operator 2024</span>
            </div>
            <div className="flex items-center text-gray-500">
              <i className="fas fa-star text-xl mr-2"></i>
              <span>5-Star Rated on TripAdvisor</span>
            </div>
            <div className="flex items-center text-gray-500">
              <i className="fas fa-handshake text-xl mr-2"></i>
              <span>Sustainable Tourism Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Inspiration */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Travel Inspiration</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get inspired by stunning photos from travelers around the world.
              Explore these breathtaking destinations and start planning your
              next adventure.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {travelPhotos.map((photo) => (
              <div
                key={photo.id}
                className="relative group overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={photo.image}
                  alt={photo.location}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-medium">{photo.location}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              type="primary"
              size="large"
              className="!rounded-button whitespace-nowrap bg-blue-600 hover:bg-blue-700 border-none cursor-pointer"
            >
              Share Your Story
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        className="py-24 bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Beautiful%20mountain%20landscape%20with%20lake%20reflection%2C%20snow-capped%20peaks%2C%20lush%20green%20valley%2C%20dramatic%20clouds%2C%20golden%20sunlight%2C%20serene%20atmosphere%2C%20inspiring%20travel%20scene%2C%20professional%20photography%20with%20soft%20focus%20background&width=1440&height=500&seq=20&orientation=landscape')`,
        }}
      >
        <div className="absolute inset-0 bg-blue-900/80 backdrop-blur-sm"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Get Exclusive Travel Offers
            </h2>
            <p className="mb-8">
              Subscribe to our newsletter and receive personalized travel
              recommendations, exclusive deals, and insider tips directly to
              your inbox.
            </p>

            <Form
              form={form}
              layout="vertical"
              className="flex flex-col md:flex-row gap-4"
            >
              <Form.Item className="flex-grow mb-0">
                <Input
                  placeholder="Your email address"
                  className="h-12 text-sm border-none shadow-sm"
                />
              </Form.Item>
              <Form.Item className="mb-0">
                <Button
                  type="primary"
                  htmlType="submit"
                  className="!rounded-button whitespace-nowrap bg-blue-600 hover:bg-blue-700 border-none h-12 px-8 cursor-pointer"
                >
                  Subscribe
                </Button>
              </Form.Item>
            </Form>

            <div className="mt-4 flex items-center justify-center">
              <Checkbox className="text-white">
                <span className="text-white text-sm">
                  I agree to receive marketing emails and accept the{" "}
                  <a href="#" className="underline">
                    Privacy Policy
                  </a>
                </span>
              </Checkbox>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-6">WanderLuxe</h3>
              <p className="text-gray-400 mb-6">
                Creating unforgettable travel experiences since 2010. We
                specialize in crafting personalized journeys to the world most
                extraordinary destinations.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-facebook-f text-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-twitter text-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-instagram text-lg"></i>
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-pinterest text-lg"></i>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Destinations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Tour Packages
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Travel Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Travel Insurance
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Booking Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Cancellation Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-6">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-3 text-blue-400"></i>
                  <span className="text-gray-400">
                    123 Travel Street, New York, NY 10001, USA
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone-alt mr-3 text-blue-400"></i>
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-blue-400"></i>
                  <span className="text-gray-400">info@wanderluxe.com</span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-clock mr-3 text-blue-400"></i>
                  <span className="text-gray-400">Mon-Fri: 9AM - 6PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2025 WanderLuxe. All rights reserved.
              </p>

              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300 cursor-pointer"
                >
                  Terms & Conditions
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300 cursor-pointer"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-300 cursor-pointer"
                >
                  Cookie Policy
                </a>
              </div>

              <div className="flex space-x-3 mt-4 md:mt-0">
                <i className="fab fa-cc-visa text-2xl text-gray-400"></i>
                <i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
                <i className="fab fa-cc-amex text-2xl text-gray-400"></i>
                <i className="fab fa-cc-paypal text-2xl text-gray-400"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
