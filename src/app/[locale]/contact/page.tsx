import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BackButton from "@/components/shared/BackButton";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import SocialLinks from "@/components/contact/SocialLinks";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-black px-6 pt-24 text-white">
  
    <BackButton />
  

  <ContactHero />
  <ContactInfo />
  <ContactForm />
  <SocialLinks />
</main>

      <Footer />
    </>
  );
}