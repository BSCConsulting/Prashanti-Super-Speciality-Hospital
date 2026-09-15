import { HOSPITAL } from "@/lib/data";
import { doctors } from "@/lib/data";

/** Hospital + Physician JSON-LD for search engines. */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: HOSPITAL.name,
    url: "https://prashanti-super-speciality-hospital.vercel.app",
    telephone: [HOSPITAL.emergencyLandline, HOSPITAL.emergencyMobile],
    address: {
      "@type": "PostalAddress",
      streetAddress: `Door No ${HOSPITAL.doorNo}, Bhavani Mess Road, Wyra Road, Nehru Nagar`,
      addressLocality: "Khammam",
      addressRegion: "Telangana",
      postalCode: HOSPITAL.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: HOSPITAL.lat,
      longitude: HOSPITAL.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    sameAs: [HOSPITAL.instagram, HOSPITAL.facebook],
    medicalSpecialty: doctors.map((d) => d.specialty),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
