const SALONS = [
  {
    id: 1,
    name: "Amanda Salon",
    location: "Baya El Sila, Abu Dubai",
    distance: 120, // in KM
    logo: require("../assets/images/salon1.png"),
    images: [
      { id: 1, image: require("../assets/images/innerSalon1.png") },
      { id: 2, image: require("../assets/images/innerSalon2.png") },
      { id: 3, image: require("../assets/images/innerSalon3.png") },
      { id: 4, image: require("../assets/images/innerSalon1.png") },
      { id: 5, image: require("../assets/images/innerSalon2.png") },
      { id: 6, image: require("../assets/images/innerSalon3.png") },
    ],
    openDays: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
    ],
    rating: 4.5,
    numOfReviews: 15,
    isRecommended: true,
    isNew: true,
    discount: 10, // in percentage
    openTime: "09:00",
    closeTime: "18:00",
    phone: "+97135987456",
    website: "www.beauty&bridges.com",
    instagram: "www.instagram.com/beauty&bridges",
    services: [
      {
        name: "Packages",
        items: [
          {
            salonId: 1,
            title: "Bridal Package",
            description: "Full spa treatment",
            priceBefore: 100,
            priceAfter: 80,
          },
          {
            salonId: 1,
            title: "Basic Package",
            description: "Hair and nails",
            priceBefore: 80,
            priceAfter: 65,
          },
          {
            salonId: 1,
            title: "Luxury Package",
            description: "Facial and massage",
            priceBefore: 120,
            priceAfter: 90,
          },
        ],
      },
      {
        name: "Hair",
        items: [
          {
            salonId: 1,
            title: "Haircut",
            description: "Stylish haircut",
            priceBefore: 50,
            priceAfter: 40,
          },
          {
            salonId: 1,
            title: "Hair Color",
            description: "Color treatment",
            priceBefore: 70,
            priceAfter: 55,
          },
          {
            salonId: 1,
            title: "Hair Treatment",
            description: "Keratin treatment",
            priceBefore: 100,
            priceAfter: 85,
          },
        ],
      },
      {
        name: "Nailing",
        items: [
          {
            salonId: 1,
            title: "Manicure",
            description: "Manicure treatment",
            priceBefore: 30,
            priceAfter: 25,
          },
          {
            salonId: 1,
            title: "Pedicure",
            description: "Pedicure treatment",
            priceBefore: 40,
            priceAfter: 35,
          },
        ],
      },
      {
        name: "Spa",
        items: [
          {
            salonId: 1,
            title: "Massage",
            description: "Relaxing massage",
            priceBefore: 90,
            priceAfter: 75,
          },
          {
            salonId: 1,
            title: "Facial",
            description: "Facial treatment",
            priceBefore: 70,
            priceAfter: 60,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Bliss & Beauty",
    location: "Baya El Sila, Abu Dubai",
    distance: 120, // in KM
    logo: require("../assets/images/salon2.png"),
    images: [
      { id: 1, image: require("../assets/images/innerSalon1.png") },
      { id: 2, image: require("../assets/images/innerSalon2.png") },
      { id: 3, image: require("../assets/images/innerSalon3.png") },
      { id: 4, image: require("../assets/images/innerSalon1.png") },
      { id: 5, image: require("../assets/images/innerSalon2.png") },
      { id: 6, image: require("../assets/images/innerSalon3.png") },
    ],
    openDays: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
    ],
    rating: 4.0,
    numOfReviews: 15,
    isRecommended: true,
    isNew: false,
    discount: 15, // in percentage
    openTime: "09:00",
    closeTime: "18:00",
    phone: "+97135987456",
    website: "www.beauty&bridges.com",
    instagram: "www.instagram.com/beauty&bridges",
    services: [
      {
        name: "Packages",
        items: [
          {
            salonId: 2,
            title: "Bridal Package",
            description: "Full spa treatment",
            priceBefore: 100,
            priceAfter: 80,
          },
          {
            salonId: 2,
            title: "Basic Package",
            description: "Hair and nails",
            priceBefore: 80,
            priceAfter: 65,
          },
          {
            salonId: 2,
            title: "Luxury Package",
            description: "Facial and massage",
            priceBefore: 120,
            priceAfter: 90,
          },
        ],
      },
      {
        name: "Hair",
        items: [
          {
            salonId: 2,
            title: "Haircut",
            description: "Stylish haircut",
            priceBefore: 50,
            priceAfter: 40,
          },
          {
            salonId: 2,
            title: "Hair Color",
            description: "Color treatment",
            priceBefore: 70,
            priceAfter: 55,
          },
          {
            salonId: 2,
            title: "Hair Treatment",
            description: "Keratin treatment",
            priceBefore: 100,
            priceAfter: 85,
          },
        ],
      },
      {
        name: "Nailing",
        items: [
          {
            salonId: 2,
            title: "Manicure",
            description: "Manicure treatment",
            priceBefore: 30,
            priceAfter: 25,
          },
          {
            salonId: 2,
            title: "Pedicure",
            description: "Pedicure treatment",
            priceBefore: 40,
            priceAfter: 35,
          },
        ],
      },
      {
        name: "Spa",
        items: [
          {
            salonId: 2,
            title: "Massage",
            description: "Relaxing massage",
            priceBefore: 90,
            priceAfter: 75,
          },
          {
            salonId: 2,
            title: "Facial",
            description: "Facial treatment",
            priceBefore: 70,
            priceAfter: 60,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Glamour Garden",
    location: "Baya El Sila, Abu Dubai",
    distance: 120, // in KM
    logo: require("../assets/images/salon3.png"),
    images: [
      { id: 1, image: require("../assets/images/innerSalon1.png") },
      { id: 2, image: require("../assets/images/innerSalon2.png") },
      { id: 3, image: require("../assets/images/innerSalon3.png") },
      { id: 4, image: require("../assets/images/innerSalon1.png") },
      { id: 5, image: require("../assets/images/innerSalon2.png") },
      { id: 6, image: require("../assets/images/innerSalon3.png") },
    ],
    openDays: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
    ],
    rating: 4.2,
    numOfReviews: 15,
    isRecommended: false,
    isNew: true,
    discount: 0, // in percentage
    openTime: "09:00",
    closeTime: "18:00",
    phone: "+97135987456",
    website: "www.beauty&bridges.com",
    instagram: "www.instagram.com/beauty&bridges",
    services: [
      {
        name: "Packages",
        items: [
          {
            salonId: 3,
            title: "Bridal Package",
            description: "Full spa treatment",
            priceBefore: 100,
            priceAfter: 80,
          },
          {
            salonId: 3,
            title: "Basic Package",
            description: "Hair and nails",
            priceBefore: 80,
            priceAfter: 65,
          },
          {
            salonId: 3,
            title: "Luxury Package",
            description: "Facial and massage",
            priceBefore: 120,
            priceAfter: 90,
          },
        ],
      },
      {
        name: "Hair",
        items: [
          {
            salonId: 3,
            title: "Haircut",
            description: "Stylish haircut",
            priceBefore: 50,
            priceAfter: 40,
          },
          {
            salonId: 3,
            title: "Hair Color",
            description: "Color treatment",
            priceBefore: 70,
            priceAfter: 55,
          },
          {
            salonId: 3,
            title: "Hair Treatment",
            description: "Keratin treatment",
            priceBefore: 100,
            priceAfter: 85,
          },
        ],
      },
      {
        name: "Nailing",
        items: [
          {
            salonId: 3,
            title: "Manicure",
            description: "Manicure treatment",
            priceBefore: 30,
            priceAfter: 25,
          },
          {
            salonId: 3,
            title: "Pedicure",
            description: "Pedicure treatment",
            priceBefore: 40,
            priceAfter: 35,
          },
        ],
      },
      {
        name: "Spa",
        items: [
          {
            salonId: 3,
            title: "Massage",
            description: "Relaxing massage",
            priceBefore: 90,
            priceAfter: 75,
          },
          {
            salonId: 3,
            title: "Facial",
            description: "Facial treatment",
            priceBefore: 70,
            priceAfter: 60,
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Glow Studio",
    location: "Baya El Sila, Abu Dubai",
    distance: 120, // in KM
    logo: require("../assets/images/salon4.png"),
    images: [
      { id: 1, image: require("../assets/images/innerSalon1.png") },
      { id: 2, image: require("../assets/images/innerSalon2.png") },
      { id: 3, image: require("../assets/images/innerSalon3.png") },
      { id: 4, image: require("../assets/images/innerSalon1.png") },
      { id: 5, image: require("../assets/images/innerSalon2.png") },
      { id: 6, image: require("../assets/images/innerSalon3.png") },
    ],
    openDays: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
    ],
    rating: 3.8,
    numOfReviews: 15,
    isRecommended: false,
    isNew: true,
    discount: 20, // in percentage
    openTime: "09:00",
    closeTime: "18:00",
    phone: "+97135987456",
    website: "www.beauty&bridges.com",
    instagram: "www.instagram.com/beauty&bridges",
    services: [
      {
        name: "Packages",
        items: [
          {
            salonId: 4,
            title: "Bridal Package",
            description: "Full spa treatment",
            priceBefore: 100,
            priceAfter: 80,
          },
          {
            salonId: 4,
            title: "Basic Package",
            description: "Hair and nails",
            priceBefore: 80,
            priceAfter: 65,
          },
          {
            salonId: 4,
            title: "Luxury Package",
            description: "Facial and massage",
            priceBefore: 120,
            priceAfter: 90,
          },
        ],
      },
      {
        name: "Hair",
        items: [
          {
            salonId: 4,
            title: "Haircut",
            description: "Stylish haircut",
            priceBefore: 50,
            priceAfter: 40,
          },
          {
            salonId: 4,
            title: "Hair Color",
            description: "Color treatment",
            priceBefore: 70,
            priceAfter: 55,
          },
          {
            salonId: 4,
            title: "Hair Treatment",
            description: "Keratin treatment",
            priceBefore: 100,
            priceAfter: 85,
          },
        ],
      },
      {
        name: "Nailing",
        items: [
          {
            salonId: 4,
            title: "Manicure",
            description: "Manicure treatment",
            priceBefore: 30,
            priceAfter: 25,
          },
          {
            salonId: 4,
            title: "Pedicure",
            description: "Pedicure treatment",
            priceBefore: 40,
            priceAfter: 35,
          },
        ],
      },
      {
        name: "Spa",
        items: [
          {
            salonId: 4,
            title: "Massage",
            description: "Relaxing massage",
            priceBefore: 90,
            priceAfter: 75,
          },
          {
            salonId: 4,
            title: "Facial",
            description: "Facial treatment",
            priceBefore: 70,
            priceAfter: 60,
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "The Beauty Boudoir",
    location: "Baya El Sila, Abu Dubai",
    distance: 120, // in KM
    logo: require("../assets/images/salon5.png"),
    images: [
      { id: 1, image: require("../assets/images/innerSalon1.png") },
      { id: 2, image: require("../assets/images/innerSalon2.png") },
      { id: 3, image: require("../assets/images/innerSalon3.png") },
      { id: 4, image: require("../assets/images/innerSalon1.png") },
      { id: 5, image: require("../assets/images/innerSalon2.png") },
      { id: 6, image: require("../assets/images/innerSalon3.png") },
    ],
    openDays: [
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
    ],
    rating: 4.7,
    numOfReviews: 15,
    isRecommended: true,
    isNew: true,
    discount: 0, // in percentage
    openTime: "09:00",
    closeTime: "18:00",
    phone: "+97135987456",
    website: "www.beauty&bridges.com",
    instagram: "www.instagram.com/beauty&bridges",
    services: [
      {
        name: "Packages",
        items: [
          {
            salonId: 5,
            title: "Bridal Package",
            description: "Full spa treatment",
            priceBefore: 100,
            priceAfter: 80,
          },
          {
            salonId: 5,
            title: "Basic Package",
            description: "Hair and nails",
            priceBefore: 80,
            priceAfter: 65,
          },
          {
            salonId: 5,
            title: "Luxury Package",
            description: "Facial and massage",
            priceBefore: 120,
            priceAfter: 90,
          },
        ],
      },
      {
        name: "Hair",
        items: [
          {
            salonId: 5,
            title: "Haircut",
            description: "Stylish haircut",
            priceBefore: 50,
            priceAfter: 40,
          },
          {
            salonId: 5,
            title: "Hair Color",
            description: "Color treatment",
            priceBefore: 70,
            priceAfter: 55,
          },
          {
            salonId: 5,
            title: "Hair Treatment",
            description: "Keratin treatment",
            priceBefore: 100,
            priceAfter: 85,
          },
        ],
      },
      {
        name: "Nailing",
        items: [
          {
            salonId: 5,
            title: "Manicure",
            description: "Manicure treatment",
            priceBefore: 30,
            priceAfter: 25,
          },
          {
            salonId: 5,
            title: "Pedicure",
            description: "Pedicure treatment",
            priceBefore: 40,
            priceAfter: 35,
          },
        ],
      },
      {
        name: "Spa",
        items: [
          {
            salonId: 5,
            title: "Massage",
            description: "Relaxing massage",
            priceBefore: 90,
            priceAfter: 75,
          },
          {
            salonId: 5,
            title: "Facial",
            description: "Facial treatment",
            priceBefore: 70,
            priceAfter: 60,
          },
        ],
      },
    ],
  },
];

export default SALONS;
