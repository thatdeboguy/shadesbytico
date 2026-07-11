import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Shade Room by Tico",
    short_name: "Shade Room",
    description:
      "Browse exquisite sunglasses that improve your style and make you stand out.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf3",
    theme_color: "#211c18",
    icons: [
      {
        src: "/logo.jpeg",
        sizes: "any",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
