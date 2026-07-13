import { readdirSync } from "node:fs";
import { extname, join, parse } from "node:path";

export type Product = {
  slug: string;
  name: string;
  price: string;
  mainImage: string;
  images: string[];
  gender?: "UNISEX";
  availableColor?: string;
  soldOut: boolean;
};

const PRODUCT_IMAGE_DIRECTORY = join(process.cwd(), "public", "Images", "Product");
const PRODUCT_IMAGE_URL = "/Images/Product";
const SUPPORTED_IMAGE_EXTENSIONS = new Set([
  ".avif",
  ".gif",
  ".jfif",
  ".jpeg",
  ".jpg",
  ".png",
  ".webp",
]);

// These labels cannot be inferred from an image filename, so preserve the
// existing catalogue values. Newly discovered products have no gender label.
const UNISEX_PRODUCT_SLUGS = new Set([
  "shade-room-3",
  "shade-room-5",
  "shade-room-7",
  "shade-room-9",
  "shade-room-11",
  "shade-room-12",
  "shade-room-13",
  "shade-room-14",
  "shade-room-15",
  "shade-room-16",
  "shade-room-17",
  "shade-room-18",
  "shade-room-20",
  "shade-room-21",
]);

// Add a product slug here to remove it from the shop, product pages, and
// checkout pages. Remove the slug to make the product available again.
// Example: "shade-room-22",
const UNAVAILABLE_PRODUCT_SLUGS = new Set<string>(["shade-room-14"]);

// Add or edit a product's available color here. Products omitted from this
// list will not display a color badge.
const PRODUCT_COLORS: Record<string, string> = {
  // "shade-room-1": "BLACK",
  "shade-room-22": "BLACK ALSO",
};

type ProductImageGroup = {
  files: string[];
  mainFile?: string;
  name?: string;
  priceInThousands?: number;
};

function createSlug(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function productImagePath(fileName: string) {
  return `${PRODUCT_IMAGE_URL}/${fileName}`;
}

function formatPrice(priceInThousands: number) {
  return `\u20A6${(priceInThousands * 1000).toLocaleString("en-NG")}`;
}

function discoverProducts(): Product[] {
  const fileNames = readdirSync(PRODUCT_IMAGE_DIRECTORY, { withFileTypes: true })
    .filter(
      (entry) =>
        entry.isFile() && SUPPORTED_IMAGE_EXTENSIONS.has(extname(entry.name).toLowerCase()),
    )
    .map((entry) => entry.name);

  const groups = new Map<string, ProductImageGroup>();

  for (const fileName of fileNames) {
    const stem = parse(fileName).name;
    const priceMatch = stem.match(/^(.*?),\s*(\d+(?:\.\d+)?)k$/i);
    const productName = (priceMatch?.[1] ?? stem.split(",", 1)[0]).trim();
    const slug = createSlug(productName);

    if (!slug) {
      continue;
    }

    const group = groups.get(slug) ?? { files: [] };
    group.files.push(fileName);

    if (priceMatch) {
      if (group.mainFile) {
        throw new Error(
          `Product "${slug}" has more than one priced main image: "${group.mainFile}" and "${fileName}".`,
        );
      }

      group.mainFile = fileName;
      group.name = productName;
      group.priceInThousands = Number(priceMatch[2]);
    }

    groups.set(slug, group);
  }

  const nameSorter = new Intl.Collator("en", { numeric: true, sensitivity: "base" });

  return Array.from(groups.entries())
    .filter((entry): entry is [string, ProductImageGroup & Required<Pick<ProductImageGroup, "mainFile" | "name" | "priceInThousands">>] => {
      const [, group] = entry;
      return Boolean(group.mainFile && group.name && group.priceInThousands !== undefined);
    })
    .map(([slug, group]) => {
      const galleryFiles = group.files
        .filter((fileName) => fileName !== group.mainFile)
        .sort(nameSorter.compare);

      return {
        slug,
        name: group.name,
        price: formatPrice(group.priceInThousands),
        mainImage: productImagePath(group.mainFile),
        images: [group.mainFile, ...galleryFiles].map(productImagePath),
        gender: UNISEX_PRODUCT_SLUGS.has(slug) ? ("UNISEX" as const) : undefined,
        availableColor: PRODUCT_COLORS[slug],
        soldOut: UNAVAILABLE_PRODUCT_SLUGS.has(slug),
      };
    })
    .sort((first, second) => nameSorter.compare(first.name, second.name));
}

export const products: Product[] = discoverProducts().filter((product) => !product.soldOut);

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
