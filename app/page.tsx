import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import CallbackStrip from "@/components/CallbackStrip";
import AboutSection from "@/components/AboutSection";
import CampusGallery from "@/components/CampusGallery";
import InstituteChapters from "@/components/InstituteChapters";
import DoctorPride from "@/components/DoctorPride";
import CareJourney from "@/components/CareJourney";
import ContactFooter from "@/components/ContactFooter";
import JsonLd from "@/components/JsonLd";

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <TrustStrip />
      <CallbackStrip />
      <AboutSection />
      <CampusGallery />
      <InstituteChapters />
      <DoctorPride />
      <CareJourney />
      <ContactFooter />
    </>
  );
}
