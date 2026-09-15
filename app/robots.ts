import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://prashanti-super-speciality-hospital.vercel.app/sitemap.xml",
  };
}
