export type Product = {
  slug: string;
  name: string;
  price: string;
  mainImage: string;
  images: string[];
  gender?: "UNISEX";
  soldOut: boolean;
};

const productImagePath = (fileName: string) => `/Images/Product/${fileName}`;

export const products: Product[] = [
  {
    slug: "shade-room-1",
    name: "Shade room -1",
    price: "₦15,000",
    mainImage: productImagePath("Shade room -1, 15k.jpeg"),
    images: [
      productImagePath("Shade room -1, 15k.jpeg"),
      productImagePath("Shade room -1.jpeg"),
    ],
    soldOut: false,
  },
  {
    slug: "shade-room-2",
    name: "Shade room -2",
    price: "₦20,000",
    mainImage: productImagePath("Shade room -2, 20k.jfif"),
    images: [
      productImagePath("Shade room -2, 20k.jfif"),
      productImagePath("Shade room -2.jfif"),
      productImagePath("Shade room -2, model.jfif"),
    ],
    soldOut: false,
  },
  {
    slug: "shade-room-3",
    name: "Shade room -3",
    price: "₦15,000",
    mainImage: productImagePath("Shade room -3, 15k.jpeg"),
    images: [
      productImagePath("Shade room -3, 15k.jpeg"),
      productImagePath("Shade room -3.jpg"),
    ],
    gender: "UNISEX",
    soldOut: false,
  },
  {
    slug: "shade-room-4",
    name: "Shade room -4",
    price: "₦10,000",
    mainImage: productImagePath("Shade room -4, 10k.jpeg"),
    images: [
      productImagePath("Shade room -4, 10k.jpeg"),
      productImagePath("Shade room -4.jpeg"),
    ],
    soldOut: false,
  },
  {
    slug: "shade-room-5",
    name: "Shade room -5",
    price: "₦15,000",
    mainImage: productImagePath("Shade room -5, 15k.jpeg"),
    images: [
      productImagePath("Shade room -5, 15k.jpeg"),
      productImagePath("Shade room -5.jpeg"),
    ],
    gender: "UNISEX",
    soldOut: false,
  },
  {
    slug: "shade-room-6",
    name: "Shade room -6",
    price: "₦10,000",
    mainImage: productImagePath("Shade room -6, 10k.jfif"),
    images: [
      productImagePath("Shade room -6, 10k.jfif"),
      productImagePath("Shade room -6.jfif"),
    ],
    soldOut: false,
  },
  {
    slug: "shade-room-7",
    name: "Shade room -7",
    price: "₦15,000",
    mainImage: productImagePath("Shade room -7, 15k.jfif"),
    images: [
      productImagePath("Shade room -7, 15k.jfif"),
      productImagePath("Shade room -7.jfif"),
    ],
    gender: "UNISEX",
    soldOut: false,
  },
  {
    slug: "shade-room-8",
    name: "Shade room -8",
    price: "₦15,000",
    mainImage: productImagePath("Shade room -8, 15k.jfif"),
    images: [
      productImagePath("Shade room -8, 15k.jfif"),
      productImagePath("Shade room -8.jpeg"),
    ],
    soldOut: false,
  },
  {
    slug: "shade-room-9",
    name: "Shade room -9",
    price: "₦15,000",
    mainImage: productImagePath("Shade room -9, 15k.jfif"),
    images: [
      productImagePath("Shade room -9, 15k.jfif"),
      productImagePath("Shade room -9.jfif"),
    ],
    gender: "UNISEX",
    soldOut: false,
  },
  {
    slug: "shade-room-10",
    name: "Shade room -10",
    price: "₦12,000",
    mainImage: productImagePath("Shade room -10, 12k.jfif"),
    images: [
      productImagePath("Shade room -10, 12k.jfif"),
      productImagePath("Shade room -10.jfif"),
    ],
    soldOut: false,
  },
  {
    slug: "shade-room-11",
    name: "Shade room -11",
    price: "₦17,000",
    mainImage: productImagePath("Shade room -11, 17k.jfif"),
    images: [
      productImagePath("Shade room -11, 17k.jfif"),
      productImagePath("Shade room -11.jfif"),
    ],
    gender: "UNISEX",
    soldOut: false,
  },
  {
    slug: "shade-room-12",
    name: "Shade room -12",
    price: "₦12,000",
    mainImage: productImagePath("Shade room -12, 12k.jfif"),
    images: [
      productImagePath("Shade room -12, 12k.jfif"),
      productImagePath("Shade room -12.jfif"),
    ],
    gender: "UNISEX",
    soldOut: false,
  },
  {
    slug: "shade-room-13",
    name: "Shade room -13",
    price: "₦15,000",
    mainImage: productImagePath("Shade room -13, 15k.jfif"),
    images: [
      productImagePath("Shade room -13, 15k.jfif"),
      productImagePath("Shade room -13.jfif"),
    ],
    gender: "UNISEX",
    soldOut: false,
  },
  {
    slug: "shade-room-14",
    name: "Shade room -14",
    price: "₦15,000",
    mainImage: productImagePath("Shade room -14, 15k.jfif"),
    images: [
      productImagePath("Shade room -14, 15k.jfif"),
      productImagePath("Shade room -14.jfif"),
    ],
    gender: "UNISEX",
    soldOut: false,
  },
  {
    slug: "shade-room-15",
    name: "Shade room -15",
    price: "₦16,000",
    mainImage: productImagePath("Shade room -15, 16k.jfif"),
    images: [
      productImagePath("Shade room -15, 16k.jfif"),
      productImagePath("Shade room -15.jfif"),
    ],
    gender: "UNISEX",
    soldOut: false,
  },
  {
    slug: "shade-room-16",
    name: "Shade room -16",
    price: "₦13,000",
    mainImage: productImagePath("Shade room -16, 13k.jfif"),
    images: [
      productImagePath("Shade room -16, 13k.jfif"),
      productImagePath("Shade room -16.jfif"),
    ],
    gender: "UNISEX",
    soldOut: false,
  },
  {
    slug: "shade-room-17",
    name: "Shade room -17",
    price: "₦17,000",
    mainImage: productImagePath("Shade room -17, 17k.jfif"),
    images: [
      productImagePath("Shade room -17, 17k.jfif"),
      productImagePath("Shade room -17.jfif"),
    ],
    gender: "UNISEX",
    soldOut: false,
  },
  {
    slug: "shade-room-18",
    name: "Shade room -18",
    price: "₦20,000",
    mainImage: productImagePath("Shade room -18, 20k.jfif"),
    images: [
      productImagePath("Shade room -18, 20k.jfif"),
      productImagePath("Shade room -18.jfif"),
    ],
    gender: "UNISEX",
    soldOut: false,
  },
  {
    slug: "shade-room-19",
    name: "Shade room -19",
    price: "₦15,000",
    mainImage: productImagePath("Shade room -19, 15k.jfif"),
    images: [
      productImagePath("Shade room -19, 15k.jfif"),
      productImagePath("Shade room -19.jfif"),
    ],
    soldOut: false,
  },
  {
    slug: "shade-room-20",
    name: "Shade room 20",
    price: "₦15,000",
    mainImage: productImagePath("Shade room 20, 15k.jfif"),
    images: [
      productImagePath("Shade room 20, 15k.jfif"),
      productImagePath("Shade room -20.jfif"),
    ],
    gender: "UNISEX",
    soldOut: false,
  },
  {
    slug: "shade-room-21",
    name: "Shade room 21",
    price: "₦20,000",
    mainImage: productImagePath("Shade room 21, 20k.jfif"),
    images: [
      productImagePath("Shade room 21, 20k.jfif"),
      productImagePath("Shade room 21.jfif"),
    ],
    gender: "UNISEX",
    soldOut: false,
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
